import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = { user, setUser, providerLogin, logOut }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
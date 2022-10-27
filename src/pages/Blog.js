import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../utilities/UserContext';
import './Blog.css'

const Blog = () => {
    const { darkToggle } = useContext(AuthContext);
    return (
        <div className={`${darkToggle && 'dark'} blog-bg pt-8`}>
            <div class='flex items-center justify-center min-h-screen'>
                <div class='w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl dark:bg-slate-700 dark:text-white'>
                    <h1 class="text-xl mb-10 text-center">Some Questions & Answers</h1>

                    <details class="w-full bg-white border border-green-500 cursor-pointer mb-3 dark:bg-slate-700">
                        <summary class="w-full bg-white text-dark flex justify-between px-4 py-3  after:content-['+'] dark:bg-green-500">What is CORS?</summary>
                        <p class="px-4 py-3">
                            CORS is a policy that allows a server to indicate any origins other than its own from which a browser should permit loading sources.
                            CORS prevents website of other domains from accesing the data.
                        </p>
                    </details>

                    <details class="w-full bg-white border border-green-500 cursor-pointer mb-3 dark:bg-slate-700">
                        <summary class="w-full bg-white text-dark flex justify-between px-4 py-3 after:content-['+'] dark:bg-green-500">
                            Why are you using firebase? What other options do you have to implement authentication?
                        </summary>
                        <p class="px-4 py-3">
                            I am using firebase mainly because it makes authentication much easier by handling the backend services.
                            There are many other firebase alternatives but among them the popular alternatives are Back4App, AWS Amplify etc.
                        </p>
                    </details>

                    <details class="w-full bg-white border border-green-500 cursor-pointer mb-3 dark:bg-slate-700">
                        <summary class="w-full bg-white text-dark flex justify-between px-4 py-3  after:content-['+'] dark:bg-green-500">
                            How does the private route work?
                        </summary>
                        <p class="px-4 py-3">
                            Private routes prevents users from accessing certain routes unless the conditions are met.
                            Such as not letting users go to profile page if they are not logged in.
                        </p>
                    </details>
                    <details class="w-full bg-white border border-green-500 cursor-pointer mb-3 dark:bg-slate-700">
                        <summary class="w-full bg-white text-dark flex justify-between px-4 py-3  after:content-['+'] dark:bg-green-500">
                            What is Node? How does Node work?
                        </summary>
                        <p class="px-4 py-3">
                            Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application.
                            Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread.
                        </p>
                    </details>
                </div>
            </div>
        </div>
    );
};

export default Blog;
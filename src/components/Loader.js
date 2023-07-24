import React from 'react';

const Loader = () => {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-opacity-75 bg-gray-800 z-50">
            <svg
                className="animate-spin h-12 w-12 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                ></circle>
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zm9 1.352a7.96 7.96 0 01-3-1.943l-3 2.647A7.962 7.962 0 0112 20h4c0-3.042-1.135-5.824-3-7.938zm-2-9.643A7.96 7.96 0 0112 4a7.96 7.96 0 011-1.943l3 2.647c1.865-2.114 3-4.896 3-7.938h-4z"
                ></path>
            </svg>
        </div>
    );
};

export default Loader;

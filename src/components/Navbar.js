import React, { useState } from "react";
import { Link } from 'react-router-dom'


export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const hidenav = () => {
        setShowMenu(false)
    }

    const showmn = () => {
        setShowMenu(true);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    const top = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }


    return (
        <div className="dark:bg-gray-900">
            <div>
                <div className="relative">
                    <div className="dark:bg-gray-900 bg-gray-50 px-6 py-3 fixed z-40 w-full">
                        <div className="container mx-auto flex items-center justify-between">
                            <h1 className="md:w-4/12 font-bold text-red-700  font-serif cursor-pointer  " aria-label="the Crib.">
                                <Link to="/" className="flex items-center  text-sm " onClick={top}>
                                    <img src="/images/logonav.png" className="w-9 h-9  object-fill lg:w-12 lg:h-14 " alt="Bin Mushtaq international" />
                                    <div className="md:flex flex-col  pt-2 hidden">
                                    <span>Bin Mushtaq   International</span>
                                   <span className=" text-xs "> The Global Connection</span>
                                   
                                   </div>

                                    <div className="flex flex-col md:hidden">
                                    <span>Bin Mushtaq   International</span>
                                    <span className=" text-xs "> The Global Connection</span>
                                    </div>
                                </Link>
                            </h1>

                            <ul className="hidden  md:flex  ml-auto space-x-8 ">
                                <li>
                                    <Link to="/" className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline" onClick={top}>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Products" className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline" onClick={top}>
                                        Products
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/Contact" className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline" onClick={top}>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                            <div className="md:w-2/12 justify-end flex items-center space-x-4 xl:space-x-8">
                                <div className="flex lg:hidden">
                                    {!showMenu ?
                                        <button aria-label="open menu" onClick={showmn} className="text-black dark:text-white dark:hover:text-gray-300 md:hidden focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                                            <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M6 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                        :
                                        <button onClick={() => setShowMenu(false)} aria-label="close menu" className="focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                                            <svg className="fill-stroke text-gray-800 dark:text-white" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 4L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M4 4L12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* For small screen */}
                    <div id="mobile-menu" className={`${showMenu ? "flex" : "hidden"}  dark:bg-gray-900 z-10 inset-0 md:hidden bg-white flex-col h-screen w-full`}>
                        <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 p-4">
                        </div>
                        <div className="mt-6 p-4 pt-8">
                            <ul className="flex flex-col space-y-6">
                                <li>
                                    <Link to="/" onClick={hidenav} className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                        Home
                                        <div>
                                            <svg className="fill-stroke text-black dark:text-white" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Products" onClick={hidenav} className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                        Products
                                        <div>
                                            <svg className="fill-stroke text-black dark:text-white" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/Contact" onClick={hidenav} className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                        Contact
                                        <div>
                                            <svg className="fill-stroke text-black dark:text-white" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="h-full flex items-end">
                            <ul className="flex flex-col space-y-8 bg-gray-50 w-full py-10 p-4 dark:bg-gray-800">
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

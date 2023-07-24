import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineGlobal } from 'react-icons/ai'
import { useRef, useEffect, useState } from 'react';

const GlobalConnection = () => {
    const [scrool, setscrool] = useState(true);
    const boxRef = useRef();

    useEffect(
        function onFirstMount() {
            const a = boxRef.current.offsetTop
            function onScroll() {
                const scrolled = document.documentElement.scrollTop;
                if (a <= scrolled + (window.screen.availHeight / 2)) {
                    setscrool(true)
                }
                else {
                    setscrool(false)
                }
            }
            window.addEventListener("scroll", onScroll);
        }, []
    );

    return (
        <div className='lg:mx-40 sm:mx-4' ref={boxRef}>
            <section className="p-4 lg:p-8 ">
                <div className="container mx-auto">
                    <div className="flex flex-col-reverse overflow-hidden lg:flex-row-reverse items-center ">
                        <img src="../images/truck.png" alt="" className={` w-[32rem] lg:h-[27rem] lg:ml-10   ${scrool ? "animate__animated animate__bounceInRight" : ""} `} />
                        <div className={`flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg  ${scrool ? "animate__animated animate__fadeInLeft" : ""} `}>
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
                                <AiOutlineGlobal className="text-teal-900 w-7 h-7" />
                            </div>
                            <div className="max-w-xl mb-6">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                    The Global Connection
                                </h2>
                                <p className={`text-base text-gray-700 md:text-lg`}>
                                    At BMI, we pride ourselves on our global reach and seamless business connections. With our cutting edge cold chain infrastructure and extensive network, we deliver high-quality products worldwide while maintaining optimal temperature conditions. Trust Us for reliable and eco-friendly logistics solutions that meet your diverse needs.
                                </p>
                            </div>
                            <Link href="/Contact" className='lg:flex hidden' >
                                <div
                                    className=" cursor-pointer inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                                    Read more
                                    <svg
                                        className="inline-block w-3 ml-2"
                                        fill="currentColor"
                                        viewBox="0 0 12 12">
                                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default GlobalConnection
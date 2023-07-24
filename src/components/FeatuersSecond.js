import React from 'react'
import { useRef, useEffect, useState } from 'react';

const FeatuersSecond = () => {
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
        <div>
            <section className="relative lg:py-20 overflow-hidden lg:mx-40" ref={boxRef}>
                <section >
                    <div className="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                        <div className="max-w-xl">
                            <h2 className="lg:text-4xl font-bold text-4xl">Features</h2>
                        </div>
                        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-2" >


                            <div className={`flex items-start gap-4 hover:shadow-2xl rounded-lg md:p-5 ${scrool ? "animate__animated animate__backInLeft" : ""} `}>
                                <span className="shrink-0 rounded-lg  p-4">
                                    <img src='../images/icon2.png' alt="Bin Mushtaq International" className='w-24 h-24 border-r-2' />
                                </span>
                                <div>
                                    <h2 className="text-xl font-bold">Shipping</h2>
                                    <p className="mt-1  text-gray-800">
                                        We specialize in shipping with precise temperature control and meticulous care, ensuring the safe delivery of fresh products.
                                    </p>
                                </div>
                            </div>

                            <div className={`flex items-start gap-4 hover:shadow-2xl rounded-lg md:p-5 ${scrool ? "animate__animated animate__backInRight" : ""} `}>
                                <span className="shrink-0 rounded-lg  p-4">
                                    <img src='../images/icon4.png' alt="Bin Mushtaq International" className='w-24 h-24 border-r-2' />
                                </span>

                                <div>
                                    <h2 className="text-xl font-bold">24/7 Support</h2>

                                    <p className="mt-1  text-gray-800">
                                        Experience peace of mind with our customer support, available 24/7 to assist you.
                                    </p>
                                </div>
                            </div>






                            <div className={`flex items-start gap-4 hover:shadow-2xl rounded-lg md:p-5 ${scrool ? "animate__animated animate__backInLeft" : ""} `}>
                                <span className="shrink-0 rounded-lg  p-4">
                                    <img src='../images/icon3.png' alt="Bin Mushtaq International" className='w-24 h-24 border-r-2' />
                                </span>

                                <div>
                                    <h2 className="text-xl font-bold">Hand Picked</h2>

                                    <p className="mt-1  text-gray-800">
                                        Indulge in the exceptional quality of our hand-picked selection, ensuring the finest products.
                                    </p>
                                </div>
                            </div>

                            <div className={`flex items-start gap-4 hover:shadow-2xl rounded-lg md:p-5 ${scrool ? "animate__animated animate__backInRight" : ""} `}>
                                <span className="shrink-0 rounded-lg  p-4">
                                    <img src='../images/icon1.png' alt="Bin Mushtaq International" className='w-24 h-24 border-r-2' />
                                </span>

                                <div>
                                    <h2 className="text-xl font-bold">Always Fresh</h2>
                                    <p className="mt-1  text-gray-800">
                                        Experience the delight of always fresh produce, meticulously selected and delivered to your doorstep.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default FeatuersSecond



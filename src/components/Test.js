import React from 'react'
import { useRef, useEffect, useState } from 'react';

const Test = () => {
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
        <section className='lg:py-0 py-5 bg-black' ref={boxRef}>
            <div className="mx-auto max-w-screen-xl px-4  sm:px-6 sm:py-4 lg:px-8 ">
                <div className="  grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className={`relative  overflow-hidden  lg:h-full ${scrool ? "animate__animated animate__fadeIn" : ""}`}>
                        <img
                            alt="Party"
                            src="../images/quality.png"
                            className="inset-0 lg:mt-16 lg:h-96 lg:w-96 w-100 h-100 object-cover"
                        />
                    </div>
                    <div className={`lg:py-10 ${scrool ? "animate__animated animate__zoomIn" : ""}`}>
                        <h1 className="text-white lg:text-6xl text-5xl font-bold py-8  ">Premium Quality</h1>
                        <article className="space-y-4 text-gray-600">
                            <p className='text-slate-300 lg:text-2xl  text-xl   text-left  leading-relaxed  tracking-wide	'>
                                Experience the essence of premium quality as we handpick only the finest produce for your satisfaction. Our rigorous quality control measures guarantee freshness and flavor in every bite. Trust in our commitment to excellence as we consistently deliver top-tier products.
                                Indulge in the ultimate culinary experience with our premium quality offerings.
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </section >

    )
}

export default Test
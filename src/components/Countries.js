import React from 'react'
import { useState, useRef, useEffect } from 'react'
import Flag from './Flag'


const Countries = () => {
    const flag = [
        {
            "img": "../images/flag1.jpeg",
            "link": "Pakistan",
            "anim": "animate__animated animate__fadeInLeft"
        },
        {
            "img": "../images/flag2.jpeg",
            "link": "Keniya",
            "anim": "animate__animated  animate__fadeInLeft"
        }
    ]
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
            <section className="text-gray-600 body-font lg:mx-40 sm:mx-4 mt-10 p-5">
                <div className="container py-14 lg:px-8 flex  items-center justify-center  flex-col">
                    <div className="flex flex-col  w-full mb-10" ref={boxRef}>
                        <h1 className="font-heading lg:text-4xl text-4xl  md:text-5xl font-bold text-gray-900 mb-2">
                            Browse our Fresh products
                        </h1>
                        <p className="  leading-relaxed  text-xl">With a diverse range of fresh products available year-round, we cater to all your needs, guaranteeing you&rsquo;ll find exactly what you&rsquo;re looking for.</p>
                    </div>
                    <div className='flex items-center justify-center flex-wrap  md:flex-nowrap  space-y-5'>
                        {flag.map((x, i) => (<Flag img={x.img} link={x.link} key={i} animate={scrool} aim={x.anim} />))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Countries


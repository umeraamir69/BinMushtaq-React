import React from 'react'
import { useRef, useEffect, useState } from 'react';

const WhoWeAre = () => {
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
        <div className='lg:mx-40 sm:mx-4' >
            <section className="p-4 lg:p-8  ">
                <div className="container mx-auto" >
                    <div className="flex  overflow-hidden lg:flex-row-reverse   items-center  flex-col-reverse " ref={boxRef}>
                        <div className={`${scrool ? "animate__animated animate__fadeInRight" : ""} `}>
                            <img src="images/WWA.png" alt="" className="  w-[32rem] lg:h-[27rem] lg:ml-10" />
                        </div>
                        <div className={`flex flex-col justify-center flex-1 py-6 ${scrool ? "animate__animated animate__fadeInLeft" : ""} `}>
                            <span className="text-xs uppercase ">Bin Mushtaq International</span>
                            <h3 className="text-4xl font-bold">Who we are ?</h3>
                            <p className="my-2  ">A leading exporter of fresh fruits, vegetables, and herbs. We specialize in sourcing our fresh products from farm partners and growers worldwide, ensuring that our clients receive only the freshest produce. With our extensive network of suppliers and logistics experts, we can deliver fresh fruits and herbs throughout the year, meeting the ever-increasing demand for healthy and environmentally friendly fresh products. Our commitment to sustainability extends throughout our supply chain, and we take pride in promoting responsible farming practices and reducing our carbon footprint. Our fresh products are not only delicious and nutritious, but they are also ethically produced. At BMI, we strive to exceed our clients&apos; expectations by delivering top-quality produce at competitive prices while adhering to the highest standards of food safety and hygiene.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WhoWeAre;
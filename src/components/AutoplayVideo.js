import React, { useEffect, useRef, useState } from 'react';


const AutoplayVideo = () => {
    const [isScrolled, setIsScrolled] = useState(true);
    const boxRef = useRef();

    useEffect(() => {
        const a = boxRef.current.offsetTop;

        function onScroll() {
            const scrolled = document.documentElement.scrollTop;
            if (a <= scrolled + (window.screen.availHeight / 2)) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []); // Empty dependency array ensures this effect runs only once on mount

    return (
        <div className="relative" ref={boxRef}>
            <video
                className={`w-full pt-16`}
                autoPlay
                muted
                loop
                poster="../images/poster.webp"
            >
                <source src="../video.mp4" type="video/mp4" />
            </video>

            <div className={`absolute lg:bottom-28 -bottom-7 border-l-4 left-0 mb-10 ml-10 text-white text-5xl font-bold p-4 ${isScrolled ? "animate__animated animate__fadeInLeft" : "animate__animated animate__fadeInLeft"}`}>
                <div className='lg:text-6xl lg:mb-3 text-xl'>Welcome to</div>
                <div className=' lg:text-8xl font-bold text6-xl' >Bin Mushtaq</div>
            </div>
        </div>
    );
};

export default AutoplayVideo;

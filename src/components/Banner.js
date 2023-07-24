import React from 'react'
import { AiOutlineGlobal } from 'react-icons/ai'
import { useState } from 'react'

const Banner = () => {
    const [more, setmore] = useState(false)
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
                            <AiOutlineGlobal className="text-teal-900 w-7 h-7" />


                        </div>
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                The Global Connection
                            </h2>
                            <p className={`text-base text-gray-700 md:text-lg ${more ? "hidden" : "flex"}`}>
                                At BMI, we take pride in our global reach and ability to connect businesses all around the world. Our commitment to delivering high-quality products in a timely manner has led us to establish a state-of-the-art cold chain with our partner courier and airliners. This allows us ...
                            </p>

                            <p className={`text-base text-gray-700 md:text-lg ${more ? "flex" : "hidden"} `}>
                                At BMI, we take pride in our global reach and ability to connect businesses all around the world. Our commitment to delivering high-quality products in a timely manner has led us to establish a state-of-the-art cold chain with our partner courier and airliners. This allows us to deliver goods by sea, air, and land, regardless of the destination, while maintaining the required temperature conditions. Our extensive network ensures that we can deliver products to remote locations and major cities alike, fulfilling our promise of providing seamless connections. Our cold chain not only guarantees the quality of the products but also reduces our carbon footprint. Thus, we have established ourselves as a trustworthy company that values its customers&apos; needs, enabling The Global Connection as the company slogan says.
                            </p>


                        </div>
                        <div className={more ? "hidden" : "block"}>
                            <div
                                className=" cursor-pointer inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                onClick={() => setmore(true)}
                            >
                                Read more
                                <svg
                                    className="inline-block w-3 ml-2"
                                    fill="currentColor"
                                    viewBox="0 0 12 12"
                                >
                                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                </svg>
                            </div>
                        </div>

                        <div className={more ? "block" : "hidden"}>
                            <div
                                className=" cursor-pointer inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                onClick={() => setmore(false)}
                            >
                                Hide
                                <svg
                                    className="inline-block w-3 ml-2"
                                    fill="currentColor"
                                    viewBox="0 0 12 12"
                                >
                                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center -mx-4 lg:pl-8">
                        <div className="flex flex-col items-end px-3">
                            <img
                                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                                src="../images/sea.png"
                                alt=""
                            />
                            <img
                                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                                src="../images/container.png"
                                alt=""
                            />
                        </div>
                        <div className="px-3">
                            <img
                                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                                src="../images/truck.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Banner
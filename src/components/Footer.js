import React from 'react'
import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'
import { ImFacebook } from 'react-icons/im'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap text-left lg:text-left">
                        <div className="w-full lg:w-6/12 px-4">
                            <h4 className="text-3xl fonat-semibold text-blueGray-700">Let&apos;s keep in touch!</h4>
                            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                                Find us on any of these platforms, we respond in business days.
                            </h5>
                            <div className="mt-6 lg:mb-0 mb-6 flex">

                                <button className="bg-white text-lightBlue-400  flex shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <AiOutlineInstagram className='w-6 h-6' />
                                </button>
                                <button className="bg-white text-lightBlue-400  flex shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <AiOutlineWhatsApp className='w-6 h-6' />
                                </button>
                                <button className="bg-white text-lightBlue-400  flex shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <ImFacebook className='w-6 h-6' />
                                </button>
                            </div>
                            <Link
                                href="/Contact"
                                className="relative block overflow-hidden rounded-lg  border-gray-100 py-4 "
                            >



                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                                        Office Address
                                    </h3>
                                </div>


                            </Link>
                        </div>
                        <div className="mt-4 flex flex-row ml-5 w-full">
                            <div className="w-full ">


                                <dt className="text-sm font-medium text-gray-800">UAE Office</dt>
                                <dd className="text-xs text-gray-500">
                                    Premises No: E2-119G-14 Hamriyah Free Zone Authority Sharjah, <br />United Arab Emirates</dd>
                            </div>



                            <div className="w-full ">
                                <dt className="text-sm font-medium text-gray-800">KENYA Office</dt>
                                <dd className="text-xs text-gray-500">P.O Box 00100 Central Nairobi <br />Republic of Kenya</dd>
                            </div>

                            <div className="w-full ">
                                <dt className="text-sm font-medium text-gray-800">PAKISTAN Office</dt>
                                <dd className="text-xs text-gray-500">Office 8, Safdar Mansion, Blue Area Islamabad, <br />Islamic Republic of Pakistan</dd>
                            </div>

                        </div>

                    </div>
                </div>
            </footer>






            <section className="bg-white">
                <div className="max-w-screen-xl px-4 pt-12  pb-8 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                    <nav className="flex flex-wrap justify-center -mx-5 -my-2">

                    </nav>

                    <p className="mt-8 text-base leading-6 text-center text-gray-400">
                        © 2023 BinMustaq.com All rights reserved.
                    </p>
                </div>

            </section>
        </div >


    )
}

export default Footer
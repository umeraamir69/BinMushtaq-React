import React from 'react'
import { CiDeliveryTruck } from 'react-icons/ci'
import { GiFruitTree } from 'react-icons/gi'
import { BiBadgeCheck, BiSupport } from 'react-icons/bi'
import { GiBerriesBowl } from 'react-icons/gi'
import { FaHands } from 'react-icons/fa'

const Featuers = () => {
    return (
        <div>
            <section class="relative py-20 overflow-hidden lg:mx-40">
                <div class="container px-4 mx-auto">
                    <div class="max-w-3xl mx-auto text-center">
                        <span class="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">FEATURES</span>
                        <h1 class="font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-gray-900 mb-24">
                            <span class="font-serif italic">Features</span>
                        </h1>
                    </div>
                    <div class="max-w-7xl mx-auto">
                        <div class="flex flex-wrap -mx-4 items-center">
                            <div class="w-full lg:w-2/5 xl:w-auto px-4 lg:pb-10 mb-16 lg:mb-0">
                                <div class="mx-auto max-w-sm">
                                    <div class="flex items-center pb-12 mb-12 border-b border-gray-100">
                                        <div class="flex flex-shrink-0 w-15 h-15 mr-6 items-center justify-center bg-blue-100 rounded-full">
                                            <CiDeliveryTruck className='w-10 h-10 p-1' />
                                        </div>
                                        <div>
                                            <h3 class="text-xl font-semibold">Free &amp; Shipping</h3>
                                            <span class="text-sm text-gray-400">Providing Free shipping</span>
                                        </div>
                                    </div>
                                    <div class="flex items-center pb-12 mb-12 border-b border-gray-100">
                                        <div class="flex flex-shrink-0 w-15 h-15 mr-6 items-center justify-center bg-orange-100 rounded-full">
                                            <GiFruitTree className='w-10 h-10 p-1' />
                                        </div>
                                        <div>
                                            <h3 class="text-xl font-semibold">Always  &amp; Fresh</h3>
                                            <span class="text-sm text-gray-400">Our Product are freshed</span>
                                        </div>
                                    </div>

                                    <div class="flex items-center pb-12 mb-12 border-b border-gray-100">
                                        <div class="flex flex-shrink-0 w-15 h-15 mr-6 items-center justify-center bg-purple-100 rounded-full">
                                            <FaHands className='w-10 h-10 p-1' />
                                        </div>
                                        <div>
                                            <h3 class="text-xl font-semibold">Hand Picked & Premium</h3>
                                            <span class="text-sm text-gray-400">Our Product are freshed</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="w-full lg:w-1/5 xl:w-auto mx-auto px-4 mb-16 lg:mb-0">
                                <img class="block h-80 md:h-100 lg:h-auto xl:h-150 mx-auto" src="/images/mixfruit.jpeg" alt="" />
                            </div>
                            <div class="w-full lg:w-2/5 xl:w-auto px-4 lg:pb-10">
                                <div class="mx-auto max-w-sm">
                                    <div class="flex items-center pb-12 mb-12 border-b border-gray-100">
                                        <div class="flex flex-shrink-0 w-15 h-15 mr-6 items-center justify-center bg-red-200 rounded-full">
                                            <BiBadgeCheck className='w-10 h-10 p-1' />
                                        </div>
                                        <div>
                                            <h3 class="text-xl font-semibold">Superior Quality</h3>
                                            <span class="text-sm text-gray-400">We provide Quality Fruits</span>
                                        </div>
                                    </div>
                                    <div class="flex items-center pb-12 mb-12 border-b border-gray-100">
                                        <div class="flex flex-shrink-0 w-15 h-15 mr-6 items-center justify-center bg-yellow-200 rounded-full">
                                            <BiSupport className='w-10 h-10 p-1' />
                                        </div>
                                        <div>
                                            <h3 class="text-xl font-semibold">Support</h3>
                                            <span class="text-sm text-gray-400">24/7 Contact Support</span>
                                        </div>
                                    </div>

                                    <div class="flex items-center pb-12 mb-12 border-b border-gray-100">
                                        <div class="flex flex-shrink-0 w-15 h-15 mr-6 items-center justify-center bg-blue-200 rounded-full">
                                            <GiBerriesBowl className='w-10 h-10 p-1' />
                                        </div>
                                        <div>
                                            <h3 class="text-xl font-semibold">Fresh Berries</h3>
                                            <span class="text-sm text-gray-400">24/7 Contact Support</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Featuers
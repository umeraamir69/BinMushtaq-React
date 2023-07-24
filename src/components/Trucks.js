import React from 'react'

const Trucks = () => {
    return (
        <div className='mt-32 mx-40'>
            <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100 ">
                <div className="container mx-auto">
                    <div className="flex flex-col overflow-hidden lg:flex-row">
                        <img src="images/Trucks.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                            <span className="text-xs uppercase dark:text-gray-400">Bin Mushtaq International</span>
                            <h3 className="text-3xl font-bold">Who We Are ?</h3>
                            <p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, nihil modi provident mollitia maiores recusandae iste molestiae rerum dolor. Similique.</p>
                            <a href="#_" class="relative px-5 py-3 overflow-hidden font-medium text-gray-600 w-32 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                                <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                                <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                                <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                                <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                                <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                                <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">About Us</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Trucks


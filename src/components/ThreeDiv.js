import React from 'react'

const ThreeDiv = () => {
    return (
        <div className="h-full" >
            <div className="container mx-auto  lg:px-20" >
                <div className='grid grid-cols-3 h-full lg:pb-40'>

                    <div className="  mx-1 lg:pl-20 ">
                        <div className="  rounded-xl pb-3 mt-14 lg:h-4/6  relative bg-purple-100 group hover:bg-purple-200 cursor-pointer transition ease-out duration-300">
                            <div>
                                <img src="../images/ship1.jpeg" alt="Bin Mushtaq International" className='rounded-t-lg' />
                            </div>
                            <div className="lg:px-7 mx-2  mt-5">
                                <h1 className="lg:text-3xl text-xl font-bold group-hover:text-purple-300 transition ease-out duration-300">Air Cargo</h1>
                                <p className="mt-2 opacity-60 group-hover:opacity-70 md:text-lg text-sm">Efficient air cargo services for swift and reliable shipments.</p>
                            </div>
                        </div>
                    </div>


                    <div className="  mx-1 lg:pl-20">
                        <div className=" rounded-xl   pb-3 mt-32  lg:h-4/6 relative bg-indigo-100 group hover:bg-indigo-200 cursor-pointer transition ease-out duration-300">
                            <div>
                                <img src="../images/ship2.png" alt="Bin Mushtaq International" className='rounded-t-lg' />
                            </div>
                            <div className="lg:px-7 mx-2 mt-5">
                                <h1 className="lg:text-3xl text-xl font-bold group-hover:text-indigo-300 transition ease-out duration-300">Ocean Freight</h1>
                                <p className="mt-2 opacity-60 group-hover:opacity-70  md:text-lg text-sm ">Reliable ocean freight solutions for cost-effective and efficient shipments.</p>
                            </div>
                        </div>
                    </div>


                    <div className="  mx-1 lg:pl-20">
                        <div className="  rounded-xl  pb-3 mt-52 lg:h-4/6 relative bg-red-100 group hover:bg-red-200 cursor-pointer transition ease-out duration-300">
                            <div>
                                <img src="../images/ship3.png" alt="Bin Mushtaq International" className='rounded-t-lg' />
                            </div>
                            <div className="lg:px-7 mx-2 mt-5">
                                <h1 className="lg:text-3xl text-xl font-bold group-hover:text-red-300 transition ease-out duration-300">Cargo</h1>
                                <p className="mt-2 opacity-60 group-hover:opacity-70 md:text-lg text-sm ">Efficient cargo transportation for reliable shipments.</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ThreeDiv
import React from 'react'

const Numbers = () => {
    const arr = ["Always Fresh", "Free & Shipping", "Hand Picked", "Support", "Superior Quality"]
    return (


        <div class=" items-center justify-center bg-gradient-to-r from-rose-50 via-sky-50 to-teal-50 hidden md:flex ">

            <div class="flex flex-wrap  items-center justify-center sm:space-x-0 md:space-x-8">

                {arr.map((data, a) => (
                    <div key={a} className='flex flex-col items-center justify-center'>
                        <img src={`/images/icon${a + 1}.png`} className='' />
                        <h1 className='mb-8 font-serif  font-semibold'>{data}</h1>
                    </div>
                ))}

            </div>
        </div>

    )
}

export default Numbers
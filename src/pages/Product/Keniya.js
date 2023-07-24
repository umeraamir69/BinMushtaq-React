import ProductCrad from '../../components/ProductCrad'
import ProductsHeader from '../../components/ProductsHeader'
import React from 'react'


const data = [
    {
        image: "hassavocado.png",
        name: "HASS AVOCADO",
        country: "Kenyan",
        type: "Herbs",
        Packing: "10 KG BOX | 4KG BOX"
    },
    {
        image: "fuerteavocado.png",
        name: "FUERTE AVOCADO",
        country: "Kenyan",
        type: "Herbs",
        Packing: "3 KG BOX"
    },
    {
        image: "jumboavocado.png",
        name: "JUMBO AVOCADO",
        country: "Kenyan",
        type: "Herbs",
        Packing: "3 KG BOX"
    },
    {
        image: "applemango.png",
        name: "APPLE MANGO",
        country: "Kenyan",
        type: "Herbs",
        Packing: "4 KG BOX"
    },
    {
        image: "kentmango.png",
        name: "KENT MANGO",
        country: "Kenyan",
        type: "Herbs",
        Packing: "4 KG BOX"
    },
    {
        image: "basil.png",
        name: "FRESH BASIL",
        country: "Kenyan",
        type: "Herbs",
        Packing: "100g x 10 IN BOX"
    },
    {
        image: "rosemarry.png",
        name: "FRESH ROSEMARRY",
        country: "Kenyan",
        type: "Herbs",
        Packing: "100g x 10 IN BOX"
    },
    {
        image: "thymes.png",
        name: "FRESH THYMES",
        country: "Kenyan",
        type: "Herbs",
        Packing: "100g x 10 IN BOX"
    },
    {
        image: "sage.png",
        name: "FRESH SAGE",
        country: "Kenyan",
        type: "Herbs",
        Packing: "100g x 10 IN BOX"
    },
    {
        image: "oregano.png",
        name: "FRESH OREGANO ",
        country: "Kenyan",
        type: "Herbs",
        Packing: "100g x 10 IN BOX"
    },
    {
        image: "chives.png",
        name: "FRESH CHIVES",
        country: "Kenyan",
        type: "Herbs",
        Packing: "100g x 10 IN BOX"
    },
    {
        image: "snowpeas.png",
        name: "FRESH SNOW PEAS",
        country: "Kenyan",
        type: "Herbs",
        Packing: "250g x 8 IN BOX "
    },
    {
        image: "broccoli.png",
        name: "BROCCOLINI",
        country: "Kenyan",
        type: "Herbs",
        Packing: "250g x 8 IN BOX "
    },
    {
        image: "beans.png",
        name: "FRESH BEANS ",
        country: "Kenyan",
        type: "Herbs",
        Packing: "250g x 8 IN BOX "
    },



    {
        image: "greenchilli.png",
        name: "GREEN CHILLI",
        country: "Kenyan",
        type: "Herbs",
        Packing: "100g x 12 IN BOX"
    },
    {
        image: "redchilli.png",
        name: "RED CHILLI",
        country: "Kenyan",
        type: "Herbs",
        Packing: "100g x 12 IN BOX"
    },
    {
        image: "mixedchilli.png",
        name: "MIX CHILLI",
        country: "Kenyan",
        type: "Herbs",
        Packing: "100g x 12 IN BOX"
    }
]



const Keniya = () => {

    return (
        <>

            <ProductsHeader />

            <div className=" 2xl:container 2xl:mx-auto">
                <div className=" py-6 lg:px-20 md:px-6 px-4">
                    <div className='lg:mx-20 mt-10 mx-5'>
                        <h1 className="mb-4 mt-20 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl">Fresh Products from
                            &nbsp;Kenya

                        </h1>
                        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
                            {data.map((data, index) => (
                                <ProductCrad data={data} key={index} pack={true} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Keniya
















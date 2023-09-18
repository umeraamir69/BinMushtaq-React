import FilterTwo from '../components/FilterTwo'
import ProductCrad from '../components/ProductCrad'
import ProductsHeader from '../components/ProductsHeader'
import React from 'react'
import { useEffect, useState, useRef } from 'react'


const data = [
    {
        image: "mangochaunsa.png",
        name: "Mango Chaunsa",
        country: "Pakistani",
        type: "Fruits"
    },
    {
        image: "mangosindhri.png",
        name: "Mango Sindhri",
        country: "Pakistani",
        type: "Fruits"
    },
    {
        image: "mangoanwarratol.png",
        name: "Mango Small Anwar Rattol",
        country: "Pakistani",
        type: "Fruits"
    },
    {
        image: "mangolangra.png",
        name: "Mango Langra",
        country: "Pakistani",
        type: "Fruits"
    },
    {
        image: "Peach.png",
        name: "Peach",
        country: "Pakistani",
        type: "Herbs"
    },
    {
        image: "orange.png",
        name: "Orange",
        country: "Pakistani",
        type: "Herbs"
    },
    {
        image: "vegetables.png",
        name: "Vegetables",
        country: "Pakistani",
        type: "Herbs"
    },
    {
        image: "mangodusehri.png",
        name: "Mango Dusheri",
        country: "Pakistani",
        type: "Herbs"
    },
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
    },


    {
        image: "Mangosteen.jpeg",
        name: "Mangosteen",
        country: "Indonesia",
        type: "Herbs",
        Packing: "100g x 12 IN BOX"
    },
    {
        image: "Rambutan.jpeg",
        name: "Rambutan",
        country: "Indonesia",
        type: "Herbs",
        Packing: "100g x 12 IN BOX"
    },
    {
        image: "Salak.jpeg",
        name: "Salak",
        country: "Indonesia",
        type: "Herbs",
        Packing: "100g x 12 IN BOX"
    },
    {
        image: "Dragon.jpeg",
        name: "Dragon Fruit",
        country: "Indonesia",
        type: "Herbs",
        Packing: "100g x 12 IN BOX"
    },
    {
        image: "Soursop.jpeg",
        name: "Soursop",
        country: "Indonesia",
        type: "Herbs",
        Packing: "100g x 12 IN BOX"
    },
    {
        image: "Turmeric.jpeg",
        name: "Turmeric",
        country: "Indonesia",
        type: "Herbs",
        Packing: "100g x 12 IN BOX"
    },
    {
        image: "Galangal.jpeg", 
        name: "Galangal",
        country: "Indonesia",
        type: "Herbs",
        Packing: "100g x 12 IN BOX"
    },
    {
        image: "LemonGrass.jpeg", 
        name: "LemonGrass",
        country: "Indonesia",
        type: "Herbs",
        Packing: "100g x 12 IN BOX"
    },
    {
        image: "Banana.jpeg", 
        name: "Banana Leaf",
        country: "Indonesia",
        type: "Herbs",
        Packing: "100g x 12 IN BOX"
    },
    {
        image: "Pandan.jpeg", 
        name: "Pandan Leaf",
        country: "Indonesia",
        type: "Herbs",
        Packing: "100g x 12 IN BOX"
    },
    {
        image: "Lemon.jpeg", 
        name: "Lemon Leaf",
        country: "Indonesia",
        type: "Herbs",
        Packing: "100g x 12 IN BOX"
    },
    {
        image: "TurmericL.jpeg", 
        name: "Turmeric Leaf",
        country: "Indonesia",
        type: "Herbs",
        Packing: "100g x 12 IN BOX"
    },
    
    {
        image: "Salam.jpeg", 
        name: "Salam Leaf",
        country: "Indonesia",
        type: "Herbs",
        Packing: "100g x 12 IN BOX"
    },
    


]



const Products = () => {


    const pakRef = useRef();
    const kenRef = useRef();
    const indRef = useRef();
    const [pak, setPak] = useState(0)
    const [ken, setken] = useState(0)
    const [ind, setind] = useState(0)



    const getElementPosition = () => {
        const pak = pakRef.current
        const ken = kenRef.current
        const ind = indRef.current
        if (pak && ken && ind) {
            setPak(pak.getBoundingClientRect())
            setken(ken.getBoundingClientRect())
            setind(ind.getBoundingClientRect())
        }
    };

    useEffect(() => {
        getElementPosition();

    }, []);



    return (
        <>


            <ProductsHeader />
            <div className='flex items-center justify-center'>
                <FilterTwo pak={pak} ken={ken} />
            </div>
            <div className=" 2xl:container 2xl:mx-auto">
                <div className=" py-6 lg:px-20 md:px-6 px-4">

                    <div className='lg:mx-20 mt-10 mx-5'>
                        <h1 ref={kenRef} className="mb-4 mt-20 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl">Fresh Products from
                            &nbsp;Kenya
                        </h1>
                        <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
                            {data
                                .filter(function (el) {
                                    return el.country === "Kenyan";
                                })
                                .map((data, index) => (
                                    <ProductCrad data={data} key={index} pack={true} />
                                ))}
                        </div>


                        <h1 ref={pakRef} className="mb-4  mt-20  py-10text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl">Fresh Products from
                            Pakistan

                        </h1>
                        <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
                            {data
                                .filter(function (el) {
                                    return el.country === "Pakistani";
                                })
                                .map((data, index) => (
                                    <ProductCrad data={data} key={index} pack={false} />
                                ))}
                        </div>


                        <h1 ref={indRef} className="mb-4  mt-20  py-10text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl">Fresh Products from
                        INDONESIA

                        </h1>
                        <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
                            {data
                                .filter(function (el) {
                                    return el.country === "Indonesia";
                                })
                                .map((data, index) => (
                                    <ProductCrad data={data} key={index} pack={false} />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products;

















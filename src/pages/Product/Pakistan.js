import ProductCrad from '../../components/ProductCrad'
import ProductsHeader from '../../components/ProductsHeader'
import React from 'react'


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
    }
]



const Pakistan = () => {

    return (
        <>

            <ProductsHeader />
            <div className=" 2xl:container 2xl:mx-auto">
                <div className=" py-6 lg:px-20 md:px-6 px-4">
                    <div className='lg:mx-20 mt-10 mx-5'>
                        <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl">Fresh Products from
                            &nbsp; Pakistani

                        </h1>
                        <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
                            {data.map((data, index) => (
                                <ProductCrad data={data} key={index} pack={false} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pakistan

















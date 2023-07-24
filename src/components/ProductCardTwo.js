import React from 'react'

const ProductCardTwo = (props) => {
    return (
        <div className=" relative">
            <div className=" absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50 ">
                <p className="text-xs leading-3 text-gray-800">New</p>
            </div>
            <div className=" relative group">
                <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                <img className=" w-full" src="../images/mixfruit.jpeg" alt="A girl Posing Img" />
            </div>
            <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">{props.data.name}</p>
            <p className=" font-normal text-base leading-4 text-gray-600 mt-4">{props.data.type}</p>
        </div>
    )
}

export default ProductCardTwo
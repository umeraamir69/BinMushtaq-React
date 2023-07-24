import React from 'react'

const ProductsHeader = () => {
    return (
        <header className="relative md:pt-7 pt-20">
            <img
                className="w-full h-auto"
                src="/images/productbanner.jpg"
                alt="Product Banner"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-md p-6 hidden md:flex">

                </div>
            </div>
        </header>

    )
}

export default ProductsHeader
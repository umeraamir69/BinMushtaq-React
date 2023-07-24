import React from 'react'

const ProductCrad = (props) => {
    return (
        <div className="group relative block bg-black rounded-lg">
            <img
                alt="Developer"
                src={`../images/${props.data.country}/${props.data.image}`}
                className="absolute inset-0 h-full w-full object-cover  opacity-80 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-yellow-900">
                    {props.data.country}
                </p>

                <p className="text-xl font-bold text-white sm:text-2xl">{props.data.name}</p>

                <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div
                        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                        {props.pack &&
                            <div className="text-lg text-white text-center ">
                                <h1 className="font-bold">Packaging</h1>
                                {props.data.Packing}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCrad
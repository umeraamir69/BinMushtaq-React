import React from 'react'

const FilterTwo = (props) => {
    return (
        <div className="m-2 max-w-screen-md bg-transparent">
            <div className="rounded-xl   p-6 flex items-center justify-center flex-wrap md:flex-nowrap" >
                <div >
                    <label htmlFor="status" className="text-stone-600 text-sm font-medium">Search</label>
                    <select id="status" className="mt-2 block w-52  text-black rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        onChange={(event) => {
                            if (event.target.value === "pakistani") {
                                window.scrollTo({
                                    top: props.pak.y - 100,
                                    behavior: 'smooth'
                                });
                            }
                            else if (event.target.value === "kenyan") {
                                window.scrollTo({
                                    top: props.ken.y - 100,
                                    behavior: 'smooth'
                                });
                            }
                            else {
                                window.scrollTo({
                                    top: 0,
                                    behavior: 'smooth'
                                });
                            }
                        }}
                    >
                        <option value="all">All Products</option>
                        <option value="pakistani">Pakistani Products</option>
                        <option value="kenyan">Kenyan Products</option>
                    </select>
                </div>

                <div className=" mx-6   justify-end space-x-4  mt-7 flex-wrap">
                    <button className="active:scale-95 rounded-lg bg-green-800 px-8 py-2 font-medium text-white outline-none focus:ring hover:opacity-90">Search</button>
                    <button className="active:scale-95 rounded-lg  bg-red-800 px-8 py-2 font-medium text-white outline-none focus:ring hover:opacity-90">Reset</button>
                </div>
            </div>
        </div>

    )
}

export default FilterTwo
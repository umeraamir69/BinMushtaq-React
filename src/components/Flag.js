import React from 'react'
import { Link } from "react-router-dom";
const Flag = (props) => {
    return (
        <>
            <Link to={`/Product/${props.link}`} className={`${props.animate ? props.aim : ""} mx-2`} >
                <div className="block">
                    <img
                        alt="Signage"
                        src={props.img}
                        className="  h-52 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72   hover:opacity-75  hover:scale-95"
                    />
                </div>
            </Link>


        </>
    )
}

export default Flag
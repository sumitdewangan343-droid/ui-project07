import React from "react";
import 'remixicon/fonts/remixicon.css';
 
const Card=(props)=>{
    return(
        <div className="h-full w-[47vh]  rounded-4xl overflow-hidden relative">
    <img className="h-full  w-full object-cover" src={props.Image} alt="" />
    <div className="h-full w-full absolute top-0 left-0  flex flex-col justify-between p-8">
<h1 className="bg-gray-300 rounded-full h-10 w-10 flex justify-center items-center text-1xl">1</h1>
<div  >
    <p className="text-lg text-white leading-normal">
        The rule book of life is enjoy every moment life is too short for chores we face ,life is not meant for worrying.
    </p>
    <div className="flex justify-between"> 
        <button className="bg-blue-600 text-white font-semibold px-7 py-2 rounded-full">Satisfying</button>
        <button className="bg-blue-600 text-white p-4 items-center rounded-full font-bold">
            <i className="ri-arrow-right-line"></i>
        </button>
    </div>
</div>

    </div>
        </div>
    )
}
export default Card;
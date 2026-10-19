import React from "react";
import Card from "./righCard.jsx";
import { FunctionSquare } from "lucide-react";
const RightContent=(props)=>{
    return(
    <div className="flex overflow-x-auto h-full w-[160vh] flex-nowrap p-5 gap-10">
  {props.users.map(function(elem){
    return<Card Image={elem.Image}/>
 })}
    </div>
         )
}

export default RightContent;
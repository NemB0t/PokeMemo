import React from "react";

export default function Cards(props){
    return(
        <div onClick={()=>{props.handleClick(props.id)}} className="border-black border-x border-y shadow-2xl w-40 h-48 flex justify-center items-center flex-col gap-4 rounded-md hover:scale-110">
            <img src={props.image} alt="Error: load failed from API"/>
            <div>
                {props.name}
            </div>
        </div>
    )
}
import React from "react";
import { TbPokeball } from "react-icons/tb";

export default function Divider(){
    return(
        <div className="h-2 md:h-4 lg:h-6 bg-stone-900 relative">
            .
            <div className="rounded-full left-1/2 -top-1 bg-black text-white text-lg md:text-2xl lg:text-6xl absolute md:-top-1 lg:-top-4">
            <TbPokeball/>
            </div>
        </div>
    )
}
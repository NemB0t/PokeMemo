import React from "react";
import { TbPokeball } from "react-icons/tb";

export default function Header(){
    return(
        <div className="flex justify-center items-center bg-red-600 text-white h-40 text-9xl">
            <TbPokeball/>
            <h1>Poke Memo</h1>
        </div>
        // <div className="bg-stone-600 h-40 flex justify-center items-center text-9xl text-stone-100 text-bo">
        //     Poke Memo
        // </div>
    )
}
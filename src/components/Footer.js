import React from "react";
import { AiFillGithub } from 'react-icons/ai';

export default function Footer(){
    return(
        <div className="bg-slate-500 h-10 flex justify-center items-center gap-1">
            Copyright © 2022 nembot <a href="https://github.com/NemB0t"><AiFillGithub/></a> 
        </div>
    )
}
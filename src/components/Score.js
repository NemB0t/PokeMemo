import React from "react";

export default function Score(props){
    return(
        <div className="flex justify-center items-center gap-4">
            <div className="bg-red-300 p-2 rounded-md">
                currentScore: {props.currentScore}
            </div>
            <div className="bg-green-300  p-2 rounded-md">
                highScore: {props.highScore}
            </div>
        </div>
    )
}
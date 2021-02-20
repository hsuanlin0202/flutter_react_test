
import React from "react";
type Props = {
    title:string;
    color:string;
};
export default function DriverTitle({title,color}:Props) {
    const textColor = "text-"+color;
    return( 
        <div className={"w-full px-6 my-5 text-xl font-bold "+ textColor}>{title}</div>
    );
}

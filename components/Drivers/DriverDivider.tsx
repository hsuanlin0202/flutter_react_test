
import React from "react";
type Props={
    color:string;
}
export default function Divider({color}:Props) {
    const bgColor="bg-"+color;
    return( 
        <div className="w-full px-6">
            <div className={"divider " + bgColor}></div>
            <div className="w-full h-1"></div>
            <style jsx>{`
                .divider{
                    width:3rem;
                    height:0.15rem;
                }
                `}
            </style>
        </div>
    );
}

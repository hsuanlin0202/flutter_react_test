
import React, { ReactNode } from "react";
type Props = {
  children?: ReactNode;
  color:string;
  onClick:Function;
};
export default function Button({ children,color,onClick }: Props) {
    const bgColor=" bg-"+color;
    const hoverTextColor=" hover:text-"+color;
    const hoverTextBorderColor=" hover:border-"+color;
    const focusRingColor = " focus:ring-"+color;

    function handleClick() {
        onClick();
      }

    return( 
        <button onClick={handleClick} className={"w-full py-5 text-white text-lg tracking-wider font-bold rounded-lg border hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2"+bgColor+hoverTextColor+hoverTextBorderColor+focusRingColor}>
                {children} 
        </button>
    );
}

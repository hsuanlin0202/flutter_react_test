
import React from "react";
type Item = {
    title?: string;
    content?: string;
    color:string;
};
export default function  ArticleBox({ title,content,color }: Item) {
    const textColor="text-"+color;
    return( 
        <div className="w-full px-6 my-2">
                <div className={"text-lg font-bold "+textColor}>{title}</div>
                <p className="text-justify text-gray-800">{content}</p>
        </div>
    );
}


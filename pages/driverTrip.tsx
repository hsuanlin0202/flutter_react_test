import React from "react";
import LayoutMobile from '../components/LayoutMobile';
import Button from '../components/Drivers/DriverButton';
import DriverContent from '../components/Drivers/DriverContent';

export default function DriverCare() {
    const color="yellow-700";
    return (
        <LayoutMobile  title="旅遊專車">
            <DriverContent 
            video="https://www.youtube.com/embed/A6wyT4teWM8" 
            title="旅遊專車、旅遊專車"
            content={{
            items: [
                {
                    title:"服務介紹：" ,
                    content:"有鑑於台灣社會漸趨高齡化，以及身障人士在外交通上的不便利，格上專車因此投入長照專車及無障礙接送服務。期望以自身在交通運輸上的投入，滿足所有人事在行動出遊的需求。提供專業駕駛及合格福祉車輛，並做好車內完整清潔消毒，讓消費者輕鬆上車、外出更安全。"
                },
                {
                    title:"服務介紹：" ,
                    content:"有鑑於台灣社會漸趨高齡化，以及身障人士在外交通上的不便利，格上專車因此投入長照專車及無障礙接送服務。期望以自身在交通運輸上的投入，滿足所有人事在行動出遊的需求。提供專業駕駛及合格福祉車輛，並做好車內完整清潔消毒，讓消費者輕鬆上車、外出更安全。"
                },
                {
                    title:"服務介紹：" ,
                    content:"有鑑於台灣社會漸趨高齡化，以及身障人士在外交通上的不便利，格上專車因此投入長照專車及無障礙接送服務。期望以自身在交通運輸上的投入，滿足所有人事在行動出遊的需求。提供專業駕駛及合格福祉車輛，並做好車內完整清潔消毒，讓消費者輕鬆上車、外出更安全。"
                },
              ],}}
              color={color}/>

            <Button color={color}>立即預約</Button>
       
        </LayoutMobile>
    
    );
  }
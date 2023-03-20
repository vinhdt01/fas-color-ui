import React from 'react'
import { IoClose } from "@react-icons/all-files/io5/IoClose";
const Notification:React.FC = ({functionHanleShow}) => {
    return (
        <div className="w-full h-[400px] bg-[#fff] absolute -top-[405px] right-0 animate-[popup_0.1s_linear]">
            <div className="fixed  right-4 p-4" >
            <button
                  onClick={functionHanleShow}
                  aria-label="Close panel"
                  className=
                    "fixed z-10 inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#e0dada] shadow text-gray-600 transition duration-200 focus:outline-none focus:text-gray-800 focus:shadow-md hover:text-gray-800 hover:shadow-md"
                  
                >
                  <IoClose className="text-xl" />
                </button>
            </div>
            
            <div className="mt-8 px-2">Hello</div>
        </div>
    )
}
export default Notification;
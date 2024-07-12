import { useState } from "react";

export function Sidebar() {

    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className={`h-full bg-gray-950 text-white overflow-y-auto flex ${ collapsed ? "w-10" : "w-64" } flex-col justify-between text-left font-mono`}>
            <div className="flex flex-col items-start w-full">
            <div className="relative w-full">
                <img src="v882-kul-40.jpg" className="w-full"></img>
                <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
                <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center space-y-2">
                    <div className="h-24 w-24 rounded-full overflow-hidden">
                        <img src="./IMG_8678.jpg" className=" grayscale h-full w-full rounded-full object-cover object-center transform scale-150 translate-y-[15%]"></img>
                    </div>
                    {/* <span className="text-white bg-gradient-to-r from-black to-black-opacity-25 px-2 py-1 rounded-full inline-block whitespace-nowrap">Gaurav Kulhare</span> */}
                </div>
            </div>
                <ul className="p-4 space-y-2 w-full">
                    <li className="w-full pb-2 border-b border-gray-500 border-opacity-40">
                    <a href="#" className="hover:text-gray-400 text-green-400 px-4 py-2 w-full justify-self-start">Home</a>
                    </li >
                    <li className="w-full pb-2 border-b border-gray-500 border-opacity-40">
                    <a href="#" className="hover:text-gray-400 text-green-400 px-4 py-2 rounded-md justify-self-start">Resume</a>
                    </li>
                    <li className="w-full pb-2 border-b border-gray-500 border-opacity-40">
                    <a href="#" className="hover:text-gray-400 text-green-400 px-4 py-2 rounded-md justify-self-start">Blog</a>
                    </li>
                </ul>
            </div>
            {/* <div className="flex items-center px-4 py-2 space-x-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none">Logout</button>
            <a href="#" className="text-gray-400 hover:text-gray-300">Settings</a>
            </div> */}
        </div>
      
    );
}
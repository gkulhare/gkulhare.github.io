import { useState } from "react";
import { faBlog, faFileArrowDown, faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import resume from "../assets/files/Gaurav_Kulhare_Resume.pdf"

export function Sidebar() {

    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className={`h-full bg-gray-950 text-white overflow-y-auto flex ${ collapsed ? "w-10" : "w-64" } flex-col justify-between text-left font-mono`}>
            <div className="flex flex-col items-start w-full">
            <div className="relative w-full">
                <img src="v882-kul-40.jpg" className="w-full"></img>
                <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
                <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center space-y-2">
                    <div className="h-28 w-28 rounded-full overflow-hidden">
                        <img src="./src/assets/photos/pf.JPG" className=" grayscale h-full w-full rounded-full object-cover object-center transform scale-150 translate-y-[15%] translate-x-[7%] -rotate-6"></img>
                    </div>
                    {/* <span className="text-white bg-gradient-to-r from-black to-black-opacity-25 px-2 py-1 rounded-full inline-block whitespace-nowrap">Gaurav Kulhare</span> */}
                </div>
            </div>
                <ul className="p-4 space-y-2 w-full">

                    {/* Home side-bar */}
                    <li className="flex w-full pb-2 border-b border-gray-500 border-opacity-40">
                    <a href="#" className="hover:text-indigo-400 text-green-400 px-2 py-2 rounded-md justify-self-start"><FontAwesomeIcon icon={faHouseChimney} className="w-5 text-lg text-white pr-2"/>Home</a>
                    </li>

                    {/* Resume side-bar */}
                    <li className="flex w-full pb-2 border-b border-gray-500 border-opacity-40">
                    <a href="../assets/files/Gaurav_Kulhare_Resume.pdf" download="Gaurav_Kulhare_Resume.pdf" className="hover:text-indigo-400 text-green-400 px-2 py-2 rounded-md justify-self-start"> <FontAwesomeIcon icon={faFileArrowDown} className="w-5 text-lg text-white -translate-x-0.5 pr-1.5"/>Resume</a>
                    </li>

                    {/* Blog side-bar */}
                    <li className="flex w-full pb-2 border-b border-gray-500 border-opacity-40">
                    <a href="#" className="hover:text-indigo-400 text-green-400 px-2 py-2 rounded-md justify-self-start"><FontAwesomeIcon icon={faBlog} className="h-5 text-lg text-white pr-2"/>Blog</a>
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
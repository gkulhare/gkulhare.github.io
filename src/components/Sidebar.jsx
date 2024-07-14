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
                    <div className="h-28 w-28 rounded-full overflow-hidden">
                        <img src="./src/assets/photos/pf.JPG" className=" grayscale h-full w-full rounded-full object-cover object-center transform scale-150 translate-y-[15%]"></img>
                    </div>
                    {/* <span className="text-white bg-gradient-to-r from-black to-black-opacity-25 px-2 py-1 rounded-full inline-block whitespace-nowrap">Gaurav Kulhare</span> */}
                </div>
            </div>
                <ul className="p-4 space-y-2 w-full">

                    {/* Home side-bar */}
                    <li className="flex w-full pb-2 border-b border-gray-500 border-opacity-40">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mt-2 ml-2 size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <a href="#" className="hover:text-indigo-400 text-green-400 px-2 py-2 w-full justify-self-start">Home</a>
                    </li>

                    {/* Resume side-bar */}
                    <li className="flex w-full pb-2 border-b border-gray-500 border-opacity-40">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mt-2 ml-2 size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    <a href="#" className=" hover:text-indigo-400 text-green-400 px-2 py-2 rounded-md justify-self-start">Resume</a>
                    </li>

                    {/* Blog side-bar */}
                    <li className="flex w-full pb-2 border-b border-gray-500 border-opacity-40">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mt-2 ml-2 size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                    <a href="#" className="hover:text-indigo-400 text-green-400 px-2 py-2 rounded-md justify-self-start">Blog</a>
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
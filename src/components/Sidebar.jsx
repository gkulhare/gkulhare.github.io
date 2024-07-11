import { useState } from "react";

export function Sidebar() {

    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className={`h-full bg-black text-white overflow-y-auto flex ${ collapsed ? "w-10" : "w-64" } flex-col justify-between text-left`}>
            <div className="flex flex-col items-start py-4">
                <h1 className="text-xl font-bold mb-4 ml-4" 
                onClick={()=>{
                    setCollapsed(!collapsed);
                }}>Gaurav Kulhare</h1>
                <ul className="space-y-2">
                    <li>
                    <a href="#" className="hover:text-gray-400 px-4 py-2 rounded-md justify-self-start">Home</a>
                    </li>
                    <li>
                    <a href="#" className="hover:text-gray-400 px-4 py-2 rounded-md justify-self-start">Resume</a>
                    </li>
                    <li>
                    <a href="#" className="hover:text-gray-400 px-4 py-2 rounded-md justify-self-start">Blog</a>
                    </li>
                </ul>
            </div>
            <div className="flex items-center px-4 py-2 space-x-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none">Logout</button>
            <a href="#" className="text-gray-400 hover:text-gray-300">Settings</a>
            </div>
        </div>
      
    );
}
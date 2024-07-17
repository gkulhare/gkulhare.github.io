import { faListCheck } from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const items = [
    {
        item: "Developing a Rust Module for Proactive Secret Key Distribution",
        status: "active",
    },
    {
        item: "Researching horizontal scaling of LLM SaaS",
        status: "passive",
    },
    {
        item: "Creating a key-value store using axum and tokio in Rust",
        status: "active",
    },
    {
        item: "Catching up on OSDI '24 accepted papers",
        status: "passive",
    },
]

export default function Status(){
    return (
        <div className="h-full w-full items-center flex flex-col justify-between">
            <div className="w-full flex-1 flex flex-col items-center justify-start">
                <div className="flex w-full items-center justify-center bg-gray-950 p-2">
                    <FontAwesomeIcon icon={faListCheck} className="text-green-400 text-lg"/>
                    <div className="px-2 text-base"> Status </div>
                </div>
                {items.map((item)=>(
                    <div className="odd:bg-slate-800 flex flex-row justify-between w-full px-4 py-2  items-center text-sm space-x-4">
                    <span class="relative flex h-2 w-2">
                     <span class={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75`} style={{backgroundColor: `${item.status=="active" ? "#66bb6a" : "#ffee58"}`}}></span>
                     <span class={`relative inline-flex rounded-full h-2 w-2 `} style={{backgroundColor: `${item.status=="active" ? "#66bb6a" : "#ffee58"}`}}></span>
                     </span>
                    <div>{item.item}</div> 
                 </div>
                ))}
            </div>
        </div>
    )
}
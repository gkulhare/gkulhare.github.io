import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import background from "/assets/photos/terminal_screen.jpg"

const jobs = ["Scaling microservices", "Borrowing in Rust", "Composing Riffs", "Balancing Server Load", "Multi-threading in Go", "Reading Dostoevsky", "Deploying Containers", "Scripting in Python", "Awaiting Silk Song", ]

export default function Terminal(){
    const [typingIndex, setTypingIndex] = useState(0);
    const [index, setIndex] = useState(0);

    useEffect(()=> {

        const interval = setInterval(()=>{
            setIndex(prevIndex => (prevIndex+1)%jobs.length);
            setTypingIndex(0);
        }, 3000); 

        const interval2 = setInterval(()=>{
                setTypingIndex(prevIndex => 
                    prevIndex+1);
        }, 100);

        return () => {
            clearInterval(interval);
            clearInterval(interval2);
        }
    }, [index]);

    function printJob(title){
        const paddedJob = title.padEnd(30, '\u00A0');

        return paddedJob;
    } 

    return (
        <div className="flex flex-col h-full w-full">
            <div className="relative text-md pt-4 h-[20%] w-full items-center">
                    <div className="h-full w-full bg-cover bg-center absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>
                    {/* <div className="absolute right-1/2 translate-x-1/2 text-base pb-4 text-nowrap"><span className="text-indigo-400 text-lg">Machines </span> don't speak your language?<span className="text-green-400 text-lg"> I got you</span>  covered.</div> */}
                </div>
            <div className="relative w-full flex-grow items-center overflow-hidden">
                    <div className="h-full w-full bg-cover bg-center  absolute inset-0 scale-125" style={{ backgroundImage : `url(${background})`, opacity: 0.5,}}></div>
                    <div className="w-full absolute inset-0 flex flex-col text-sm md:text-xs p-4">
                        <p className="text-nowrap text-sm md:text-xs pr-2 text-left">admin<span className="text-indigo-400">@gkulhare</span>:</p>
                        <div className={`text-green-400 text-sm md:text-xs text-nowrap`}>
                            {printJob(`${jobs[index].slice(0,(typingIndex>= jobs[index].length ? jobs[index].length : typingIndex) )}${(typingIndex % 10<5 )==0 ? "|" : ""}`)}
                        </div>
                    </div>
                    {/* <div>Hi</div> */}
                </div>
                <div className="relative text-md pt-4 h-[20%] w-full items-center">
                    <div className="h-full w-full bg-cover bg-center absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>
                    {/* <div className="absolute right-1/2 translate-x-1/2 text-base pb-4 text-nowrap"><span className="text-indigo-400 text-lg">Machines </span> don't speak your language?<span className="text-green-400 text-lg"> I got you</span>  covered.</div> */}
                </div>
        </div>
    )
}
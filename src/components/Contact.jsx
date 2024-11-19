import { useEffect, useState } from "react";
import React from "react";
import background from "/assets/photos/terminal_screen.jpg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCopy, faClipboard } from "@fortawesome/free-solid-svg-icons";

const jobs = ["Scaling microservices", "Borrowing in Rust", "Composing Riffs", "Balancing Server Load", "Multi-threading in Go", "Reading Dostoevsky", "Deploying Docker Containers", "Scripting in Python", "Awaiting Silk Song", ];
const tech  = [
    {
        src:"cpp",
        att:""
    },   
    {
        src:"docker",
        att:""
    },
    {
        src:"go",
        att:""
    },
    {
        src:"java",
        att:""
    },
    {
        src:"jenkins",
        att:""
    },
    {
        src:"k8",
        att:""
    },
    {
        src:"linux",
        att:""
    },
    {
        src:"node",
        att:""
    },
    {
        src:"css",
        att:"scale-[65%] -translate-y-2"
    },
    {
        src:"postgresql",
        att:"pb-2 -translate-y-3 scale-[125%]"
    },
    {
        src:"python",
        att:" scale-125"
    },
    {
        src:"react2",
        att:"scale-[80%] translate-y-3"
    },
    {
        src:"rust",
        att:"pb-2"
    },
    {
        src:"tailwind",
        att:""
    },
    {
        src:"airflow",
        att:"scale-75"
    },
    {
        src:"aws",
        att:""
    },
    {
        src:"html",
        att:"pt-4"
    },
    {
        src:"hibernate",
        att:"scale-75"
    },
    {
        src:"spring2",
        att:"translate-y-2"
    },
    {
        src:"js",
        att:"translate-y-4"
    },
];

export default function Contact(){

    const [active, setActive] = useState("none");
    const [typingIndex, setTypingIndex] = useState(0);
    const [index, setIndex] = useState(1);
    const [scroll, setScroll] = useState({
        s1: 0,
        s2: 3,
        s3: 0,
        s4: 3,
        s5: 0,
    });

    function copyToClipboard(text){
        navigator.clipboard.writeText(text).then(() => {
          setActive(`${active}Copied`);
        }).catch(err => {
          console.error('Failed to copy: ', err);
        });
      };

    useEffect(()=>{
        async function onNext(){
            setScroll(prevScroll =>({
                ...prevScroll,
                s1: (prevScroll.s1+1)%4,
            }));
    
            setTimeout(() => {
                setScroll(prevScroll =>({
                    ...prevScroll,
                    s2: prevScroll.s2>0 ? (prevScroll.s2-1)%4 : 3,
                }));
            },0);
    
            setTimeout(() => {
                setScroll(prevScroll =>({
                    ...prevScroll,
                    s3: (prevScroll.s3+1)%4,
                }));
            },0);
    
            setTimeout(() => {
                setScroll(prevScroll =>({
                    ...prevScroll,
                    s4: prevScroll.s4>0 ? (prevScroll.s4-1)%4 : 3,
                }));
            },0);
    
            setTimeout(() => {
                setScroll(prevScroll =>({
                    ...prevScroll,
                    s5: (prevScroll.s5+1)%4,
                }));
            },0);
        }

        const interval = setInterval(()=>{
            setIndex(prevIndex => (prevIndex+1)%jobs.length);
            setTypingIndex(0);
        }, 5000);    

        const interval2 = setInterval(()=>{    
           onNext();
        }, 2500);

        return ()=> {
            clearInterval(interval);
            clearInterval(interval2);
        }
    }, []);

    useEffect(()=> {
        const interval = setInterval(()=>{
            setTypingIndex(prevIndex => prevIndex+1);
        }, 100);

        return () => clearInterval(interval);
    }, []);

    function printJob(title){
        const paddedJob = title.padEnd(30, '\u00A0');

        return paddedJob;
    } 

    return (
        <div className="relative h-64 md:h-full md:w-full overflow-hidden">
            {/* <div className="h-full w-full bg-cover bg-center absolute inset-0 bg-black opacity-50"></div> */}
            <div className="flex flex-col justify-between w-full h-full items-center">
                <div className="relative flex flex-row justify-center space-x-6 full w-full overflow-hidden bg-gray-800 opacity-30">
                    <div className="h-full w-full bg-cover bg-center absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>
                    <div className={`flex flex-col justify-between w-24 space-y-2`} style={{ animationPlayState: "running", overflow: "visible",
  animation: "animateContainer1 5s linear forwards infinite"}}>
                        {tech.slice(4,8).map((icon)=>(
                            <div className="snap-center flex-shrink-0 w-full">
                                <img src={`/assets/photos/${icon.src}.png`} className={`w-24 ${icon.att}`}></img>
                            </div>
                        ))}
                        {tech.slice(4,8).map((icon)=>(
                            <div className="snap-center flex-shrink-0 w-full">
                                <img src={`/assets/photos/${icon.src}.png`} className={`w-24 ${icon.att}`}></img>
                            </div>
                        ))}
                    </div>
                    <div className={`flex flex-col justify-between w-24 space-y-2`} style={{ animationPlayState: "running", overflow: "visible",
  animation: "animateContainer2 5s linear forwards infinite"}}>
                        {tech.slice(0,4).map((icon)=>(
                            <div  className="snap-center flex-shrink-0 w-full">
                                <img src={`/assets/photos/${icon.src}.png`} className={`w-24 ${icon.att}`}></img>
                            </div>
                        ))}
                        {tech.slice(0,4).map((icon)=>(
                            <div  className="snap-center flex-shrink-0 w-full">
                                <img src={`/assets/photos/${icon.src}.png`} className={`w-24 ${icon.att}`}></img>
                            </div>
                        ))}
                    </div>
                    <div className={`flex flex-col justify-between w-24 space-y-2`} style={{ animationPlayState: "running", overflow: "visible",
  animation: "animateContainer3 5s linear forwards infinite"}}>
                        {tech.slice(8,12).map((icon)=>(
                            <div  className="snap-center flex-shrink-0 w-full">
                                <img src={`/assets/photos/${icon.src}.png`} className={`w-24 ${icon.att}`}></img>
                            </div>
                        ))}
                        {tech.slice(8,12).map((icon)=>(
                            <div  className="snap-center flex-shrink-0 w-full">
                                <img src={`/assets/photos/${icon.src}.png`} className={`w-24 ${icon.att}`}></img>
                            </div>
                        ))}
                    </div>
                    <div className={`flex flex-col justify-between w-24 space-y-2`} style={{ animationPlayState: "running", overflow: "visible",
  animation: "animateContainer4 5s linear forwards infinite"}}>
                        {tech.slice(12,16).map((icon)=>(
                            <div  className="snap-center flex-shrink-0 w-full">
                                <img src={`/assets/photos/${icon.src}.png`} className={`w-24 ${icon.att}`}></img>
                            </div>
                        ))}
                        {tech.slice(12,16).map((icon)=>(
                            <div  className="snap-center flex-shrink-0 w-full">
                                <img src={`/assets/photos/${icon.src}.png`} className={`w-24 ${icon.att}`}></img>
                            </div>
                        ))}
                    </div>
                    <div className={`flex flex-col justify-between w-24 space-y-2`} style={{ animationPlayState: "running", overflow: "visible",
  animation: "animateContainer5 5s linear forwards infinite"}}>
                        {tech.slice(16).map((icon)=>(
                            <div  className="snap-center flex-shrink-0 w-full">
                                <img src={`/assets/photos/${icon.src}.png`} className={`w-24 ${icon.att}`}></img>
                            </div>
                        ))}
                        {tech.slice(16).map((icon)=>(
                            <div  className="snap-center flex-shrink-0 w-full">
                                <img src={`/assets/photos/${icon.src}.png`} className={`w-24 ${icon.att}`}></img>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="absolute top-0 left-0 inset-0 object-cover rounded-xl bg-gradient-to-t from-black via-transparent to-black opacity-50 overflow-hidden"></div>
            <div className="absolute top-0 left-0 text-lg px-4 py-2 text-white"><span className="text-indigo-400">Machines </span>don't speak your language? <span className="text-green-400">I got you.</span></div>
            <div class="absolute right-0 bottom-0 flex lg:flex-row flex-col justify-between w-full space-x-4 px-4 py-2">
            <div className="group relative flex items-end">
                <a href="https://github.com/gkulhare" target="_blank" rel="noopener noreferrer" class="text-white hover:text-slate-700">
                    <FontAwesomeIcon icon={faSquareGithub} className="fa-2x"/>
                </a> 
                <span onMouseEnter={()=>{setActive("github");}} onMouseLeave={()=>{ setActive("none");}} onClick={()=>{copyToClipboard("https://github.com/gkulhare")}} className="text-xs pl-2 hover:text-green-400 cursor-pointer">
                    github.com/gkulhare
                </span>
                {(active=="github" || active=="githubCopied") && 
                (<span className="absolute px-2 py-1 top-0 right-1/2 translate-x-[50%] -translate-y-[50%] bg-gray-700 rounded-lg shadow-md bg-opacity-60">
                <span  className="text-nowrap text-xs rounded-md">
                <FontAwesomeIcon icon={active=="github" ? faCopy : faClipboard} className="pr-2"/>{active=="github" ? "Copy" : "Copied"}
                </span>
            </span>)}
            </div> 
                {/* <span className="text-xs">github.com/gkulhare</span> */}
            <div className="group relative flex items-end">
                <a href="https://www.linkedin.com/in/gkulhare" target="_blank" rel="noopener noreferrer" class="text-white hover:text-indigo-500">
                    <FontAwesomeIcon icon={faLinkedin} className="fa-2x -ml-4 md:ml-0"/>
                </a> 
                <span onMouseEnter={()=>{setActive("linkedin");}} onMouseLeave={()=>{ setActive("none");}} onClick={()=>{copyToClipboard("https://www.linkedin.com/in/gkulhare")}} className="text-xs pl-2 hover:text-green-400 cursor-pointer">
                    linkedin.com/gkulhare
                </span>
                {(active=="linkedin" || active=="linkedinCopied") && 
                (<span className="absolute px-2 py-1 top-0 right-1/2 translate-x-[50%] -translate-y-[50%] bg-gray-700 rounded-lg shadow-md bg-opacity-60">
                <span  className="text-nowrap text-xs rounded-md">
                <FontAwesomeIcon icon={active=="linkedin" ? faCopy : faClipboard} className="pr-2"/>{active=="linkedin" ? "Copy" : "Copied"}
                </span>
            </span>)}
            </div>
                {/* <span className="text-xs">linkedin.com/in/gkulhare</span> */}
            <div className="group relative flex items-end">
                <a href="mailto:gkulhare@cs.stonybrook.edu" class="text-white hover:text-red-400">
                    <FontAwesomeIcon icon={faEnvelope} className="fa-2x -ml-4 md:ml-0"/> 
                </a> 
                <span onMouseEnter={()=>{setActive("mail");}} onMouseLeave={()=>{ setActive("none");}} onClick={()=>{copyToClipboard("gkulhare@cs.stonybrook.edu")}} className="hover:text-green-400 cursor-pointer translate-y-0.5">
                    <span className="pl-2 text-xs">
                        gkulhare@cs.stonybrook.edu
                    </span>
                </span>
                {(active=="mail" || active=="mailCopied") && 
                (<span className="absolute px-2 py-1 top-0 right-1/2 translate-x-[50%] -translate-y-[50%] bg-gray-700 rounded-lg shadow-md bg-opacity-60">
                <span  className="text-nowrap text-xs rounded-md" onClick>
                <FontAwesomeIcon icon={active=="mail" ? faCopy : faClipboard} className="pr-2"/>{active=="mail" ? "Copy" : "Copied"}
                </span>
            </span>)}
            </div>
            </div>
            </div>
    );
}
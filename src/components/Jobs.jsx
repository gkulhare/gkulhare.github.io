import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft, faAngleRight, faArrowLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";

export default function Jobs({jobs}) {

    const [hover, setHover] = useState(-1);
    const [index, setIndex] = useState(0);
    const [scroll, setScroll] = useState(true);
    const [animateState, setAnimateState] = useState(false);

    async function onPrev(){
        setIndex(index==0 ? jobs.length-1 : index-1);
        setAnimateState(true);

        setTimeout(() => {
            setAnimateState(false);
        },100)
    }
    
    async function onNext(){
        setIndex((index+1)%jobs.length);
        setAnimateState(true);

        setTimeout(() => {
            setAnimateState(false);
        },100)
    }

    useEffect(()=> {
        const interval = setInterval(scroll && onNext, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [index, scroll, animateState]);

    return(
        <div className="relative flex flex-col h-full w-full justify-between overflow-hidden" onMouseEnter={() => {setScroll(false);}} onMouseLeave={() => {setScroll(true);}}>
            <div className="w-full text-center p-2 bg-gray-950">
                <div className="text-base">
                    <FontAwesomeIcon icon={faBriefcase} className="text-green-400"/> Work Experience
                </div>
            </div>
        {hover>=0 && (
            <div className="relative flex flex-col h-32 w-full flex-grow justify-between ">
                <div className="absolute top-0 left-0 cursor-pointer px-2 py-2 hover:text-indigo-400 opacity-70 hover:opacity-100" onClick={()=>{setHover(-1)}}><FontAwesomeIcon icon={faArrowLeft} className="text-lg px-2 translate-y-0.5"/></div>
                <div className="flex flex-col justify-start items-center overflow-hidden">
                    <div className="px-4 pt-2 text-indigo-400 text-center">{jobs[hover].title}</div>
                    <div className="px-4 text-sm text-green-400 pb-2">{`@${jobs[hover].company}`}</div>
                    <div className="scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-gray-700 px-4 overflow-y-scroll">
                        {jobs[hover].desc.map((item)=>(
                            <div className="text-sm pb-2 first:pt-2 last:pb-6">
                                <FontAwesomeIcon icon={faCaretRight} className="pr-2"/>{item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )}
        { hover<0 &&(<div className="group relative flex flex-col flex-grow w-full h-1 justify-between">           
            {jobs.map((job, idx)=> (
                <div className="cursor-pointer flex justify-center h-1/3 items-center overflow-hidden group-hover:opacity-30 group-hover:hover:opacity-100" onClick={()=>{setHover(idx)}}>
                        <img src={job.src} className={`${job.display}`}></img>
                </div>
            ))}
        </div>)}
        <div className="absolute bottom-0 flex-none w-full text-xs text-center bg-slate-600">CLICK ON INSTITUTE TO LEARN MORE</div>
        </div>
    );
}
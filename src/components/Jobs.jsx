import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Jobs({jobs}) {

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
        <div className="flex flex-col h-full w-full justify-between" onMouseEnter={() => {setScroll(false);}} onMouseLeave={() => {setScroll(true);}}>
            <div className="w-full text-center p-2 bg-gray-950">
                <div className="text-base">
                    <FontAwesomeIcon icon={faBriefcase} className="text-green-400"/> Work Experience
                </div>
            </div>
        
        <div className="group relative flex flex-col flex-grow w-full h-1 justify-between">           
            {jobs.map((job)=> (
                <div className="flex justify-center h-1/3 items-center overflow-hidden group-hover:opacity-30 group-hover:hover:opacity-100">
                        <img src={job.src} className={`${job.display}`}></img>
                </div>
            ))}
        </div>
        <div className="w-full text-xs text-center bg-slate-600">CLICK ON INSTITUTE TO LEARN MORE</div>
        </div>
    );
}
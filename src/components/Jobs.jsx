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
        
        <div className="group relative flex flex-col flex-grow w-full h-full justify-between px-4 py-2">           
            <div key={index} className={`transition-transform duration-500 ease-out ${animateState ? "translate-x-[-150%]" : "translate-x-0"}`}>
                <div className="flex flex-col justify-between text-center">
                <div className="text-indigo-400 text-base">
                    {jobs[index].title}
                </div>
                <div className="">
                    {jobs[index].company}
                </div>
                </div>
                <div className="text-sm">
                    <ul className="list-disc p-4">
                    { jobs[index].desc.map((point) => (
                    <li>
                        {point}
                    </li>
                ))}
                    </ul>
                </div>
            </div>
            <div></div>
            <button className="carousel-button left-0 group-hover:bg-gradient-to-r" onClick={onPrev}>
                <FontAwesomeIcon icon={faAngleLeft}/>
            </button>
            <button className="carousel-button right-0 group-hover:bg-gradient-to-l" onClick={onNext}>
                <FontAwesomeIcon icon={faAngleRight}/>
            </button>
        </div>
        </div>
    );
}
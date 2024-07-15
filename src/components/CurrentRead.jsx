import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { useState, useEffect } from "react";
import { faArrowUpRightFromSquare, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function CurrentRead({papers}){

    const [index, setIndex] = useState(0);
    const [scroll, setScroll] = useState(true);
    const [animateState, setAnimateState] = useState(false);

    async function onPrev(){
        setIndex(index==0 ? papers.length-1 : index-1);
        setAnimateState(true);

        setTimeout(() => {
            setAnimateState(false);
        },100)
    }
    
    async function onNext(){
        setIndex((index+1)%papers.length);
        setAnimateState(true);

        setTimeout(() => {
            setAnimateState(false);
        },100)
    }

    useEffect(()=> {
        const interval = setInterval(scroll && onNext, 4500);

        return () => {
            clearInterval(interval);
        };
    }, [index, scroll, animateState]);

    return(
        <div className="relative flex flex-col h-full w-full justify-between" onMouseEnter={() => {setScroll(false);}} onMouseLeave={() => {setScroll(true);}}>
        
        <div className="group relative flex flex-col flex-grow w-full h-full justify-between px-4 py-2">           
            <div key={index} className={`transition-transform duration-500 ease-out ${animateState ? "translate-x-[-150%]" : "translate-x-0"}`}>
                <div className="flex flex-row justify-between">
                <div className="text-white text-sm pb-2 ">
                    {papers[index].title}
                </div>
                <div className="flex">
                    <a href={papers[index].link} className="text-white hover:text-indigo-400"><FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a>
                </div>
                </div>
                <div className="text-sm text-indigo-400 text-right">
                    {papers[index].authors}
                </div>
            </div>
            <button className="carousel-button-sm left-0 group-hover:bg-gradient-to-r" onClick={onPrev}>
                <FontAwesomeIcon icon={faAngleLeft}/>
            </button>
            <button className="carousel-button-sm right-0 group-hover:bg-gradient-to-l" onClick={onNext}>
                <FontAwesomeIcon icon={faAngleRight}/>
            </button>
        </div>
            <div className="absolute bottom-0 w-full text-center p-2 bg-gray-950">
                <div className="text-base">
                    <FontAwesomeIcon icon={faBookOpen} className="text-green-400"/> Current Reads
                </div>
            </div>
        </div>
    );
    
}
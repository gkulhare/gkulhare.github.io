import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCode, faC } from "@fortawesome/free-solid-svg-icons";
import { faGolang, faPython, faRust, faDocker } from "@fortawesome/free-brands-svg-icons";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function getIcon(iconName){
    switch(iconName){
        case "faC":
            return faC;
        case "faPython":
            return faPython;
        case "faGolang":
            return faGolang;
        case "faRust":
            return faRust;
        case "faDocker":
            return faDocker;
        default:
            return null;
    }
}

export default function Projects({projects}) {

    const [index, setIndex] = useState(0);

    function onPrev(){
        setIndex(index==0 ? projects.length-1 : index-1);
    }
    
    function onNext(){
        setIndex((index+1)%projects.length);
    }

    useEffect(()=> {
        const interval = setInterval(onNext, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [index]);

    return(
        <div className="flex flex-col h-full w-full justify-between">
            <div className="w-full text-center p-2 bg-gray-950">
                <div className="text-base">
                    <FontAwesomeIcon icon={faCode} className="text-green-400"/> Projects
                </div>
            </div>
        <div className="group relative flex flex-col flex-grow w-full h-full justify-between px-4 py-2 transition-transform duration-500 ease-in-out">            
            <div key={index}>
                <div className="text-indigo-400 text-lg">
                    {projects[index].title}
                </div>
                <div className="text-sm">
                    {projects[index].desc}
                </div>
            </div>
            <div className="flex">
                { projects[index].techIcons.map((icon) => (
                    <div>
                        <FontAwesomeIcon icon={getIcon(icon)} className="first:pl-0 px-2 fa-xl text-green-400" />
                    </div>
                ))}
            </div>
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
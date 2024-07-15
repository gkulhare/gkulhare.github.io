import { useEffect, useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const jobs = ["{Back-end}", "{Systems}", "{Front-end}"]
const tech = [
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
        att:"scale-75"
    },
    {
        src:"htmljscss",
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
        src:"postgresql",
        att:""
    },
    {
        src:"python",
        att:""
    },
    {
        src:"react",
        att:"scale-125"
    },
    {
        src:"rust",
        att:""
    },
    {
        src:"tailwind",
        att:"scale-75"
    },
]

export default function IntroCard(){

    const [index, setIndex] = useState(1);
    const [scroll, setScroll] = useState({
        s1: 0,
        s2: 0,
        s3: 0,
    });

    async function onNext(){
        setScroll(prevScroll =>({
            ...prevScroll,
            s1: (prevScroll.s1+1)%4,
        }));

        setTimeout(() => {
            setScroll(prevScroll =>({
                ...prevScroll,
                s2: (prevScroll.s2+1)%5,
            }));
        },100);

        setTimeout(() => {
            setScroll(prevScroll =>({
                ...prevScroll,
                s3: (prevScroll.s3+1)%5,
            }));
        },200);
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            setIndex((index+1)%3);
        }, 1000);    

        const interval2 = setInterval(()=>{    
           onNext();
        }, 1000);

        return ()=> {
            clearInterval(interval);
            clearInterval(interval2);
        }
    }, [index,scroll]);

    return (
        <div className="flex h-full justify-between">
                    <div className="flex flex-col justify-between">
                        <div className="text-md">
                            <p>Machines don't speak your language? I got you covered.</p>
                            <p>Hello, I'm Gaurav.</p>
                            <p >Software developer <span key={index} className="text-green-400 animate-fade ml-2">{jobs[index]}</span> </p>
                        </div>
                        <div class="flex space-x-4">
                            <a href="https://linkedin.com/in/yourprofile" class="text-white hover:text-indigo-500">
                                <FontAwesomeIcon icon={faSquareGithub} className="fa-2x"/>
                            </a>
                            <a href="https://linkedin.com/in/yourprofile" class="text-white hover:text-indigo-500">
                                <FontAwesomeIcon icon={faLinkedin} className="fa-2x"/>
                            </a>
                            <a href="https://linkedin.com/in/yourprofile" class="text-white hover:text-indigo-500">
                                <FontAwesomeIcon icon={faEnvelope} className="fa-2x"/>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2 w-28 overflow-hidden">
                        <div className={`flex h-24 snap-x snap-mandatory transition ease-out duration-2000 `} style={{ transform: `translateX(-${scroll.s1 * 100}%)`}}>
                            {tech.slice(5,9).map((icon)=>(
                                <div className="snap-center flex-shrink-0 w-full">
                                    <img src={`./src/assets/photos/${icon.src}.png`} className={`h-20 ${icon.att}`}></img>
                                </div>
                            ))}
                        </div>
                        <div className={`flex h-24 snap-x snap-mandatory transition ease-out duration-2000 `} style={{ transform: `translateX(-${scroll.s2 * 100}%)`}}>
                            {tech.slice(0,5).map((icon)=>(
                                <div  className="snap-center flex-shrink-0 w-full">
                                    <img src={`./src/assets/photos/${icon.src}.png`} className={`h-20 ${icon.att}`}></img>
                                </div>
                            ))}
                        </div>
                        <div className={`flex h-24 snap-x snap-mandatory transition ease-out duration-2000 `} style={{ transform: `translateX(-${scroll.s3 * 100}%)`}}>
                            {tech.slice(9).map((icon)=>(
                                <div  className="snap-center flex-shrink-0 w-full">
                                    <img src={`./src/assets/photos/${icon.src}.png`} className={`h-20 ${icon.att}`}></img>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
    );
}
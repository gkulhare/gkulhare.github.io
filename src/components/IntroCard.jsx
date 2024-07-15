import { useEffect, useState } from "react";

const jobs = ["{Back-end}", "{Systems}", "{Front-end}"]
const tech = [
    {
        src:"cpp",
        att:"pt-2"
    },   
    {
        src:"docker",
        att:"pb-2 -translate-y-2"
    },
    {
        src:"go",
        att:"pb-4 -translate-y-2"
    },
    {
        src:"java",
        att:"-translate-y-4"
    },
    {
        src:"jenkins",
        att:"pb-4"
    },
    {
        src:"k8",
        att:"pb-2"
    },
    {
        src:"linux",
        att:""
    },
    {
        src:"node",
        att:"pt-6"
    },
    {
        src:"css",
        att:"scale-[65%] -translate-y-1"
    },
    {
        src:"postgresql",
        att:"pb-2 -translate-y-3 scale-[125%]"
    },
    {
        src:"python",
        att:"-translate-y-3 scale-125"
    },
    {
        src:"react2",
        att:"scale-[80%] -translate-y-2"
    },
    {
        src:"rust",
        att:"translate-y-3"
    },
    {
        src:"tailwind",
        att:"translate-y-6"
    },
    {
        src:"airflow",
        att:"translate-y-8 scale-75"
    },
    {
        src:"aws",
        att:"translate-y-8"
    },
    {
        src:"html",
        att:""
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
]

export default function IntroCard(){

    const [index, setIndex] = useState(1);
    const [scroll, setScroll] = useState({
        s1: 0,
        s2: 3,
        s3: 0,
        s4: 3,
        s5: 0,
    });

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
        },800);

        setTimeout(() => {
            setScroll(prevScroll =>({
                ...prevScroll,
                s3: (prevScroll.s3+1)%4,
            }));
        },600);

        setTimeout(() => {
            setScroll(prevScroll =>({
                ...prevScroll,
                s4: prevScroll.s4>0 ? (prevScroll.s4-1)%4 : 3,
            }));
        },400);

        setTimeout(() => {
            setScroll(prevScroll =>({
                ...prevScroll,
                s5: (prevScroll.s5+1)%4,
            }));
        },1000);
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
            <div className="flex flex-col justify-between w-full">
                <div className="text-md">
                    <p>Machines don't speak your language? I got you covered.</p>
                    <p>Hello, I'm Gaurav.</p>
                    <p >Software developer <span key={index} className="text-green-400 animate-fade ml-2">{jobs[index]}</span> </p>
                </div>
                <div className="relative flex flex-row flex-between w-full">
                    <div className="absolute right-0 bottom-0 flex flex-row space-x-2 h-20 overflow-hidden">
                        <div className={`flex flex-col w-24 snap-y snap-mandatory transition ease-out duration-[1500ms] space-y-2`} style={{ transform: `translateY(-${scroll.s1 * 100}%)`}}>
                            {tech.slice(4,8).map((icon)=>(
                                <div className="snap-center flex-shrink-0 w-full">
                                    <img src={`./src/assets/photos/${icon.src}.png`} className={`w-16 ${icon.att}`}></img>
                                </div>
                            ))}
                        </div>
                        <div className={`flex flex-col w-24 snap-y snap-mandatory transition ease-out duration-[1500ms] space-y-6 tr`} style={{ transform: `translateY(-${scroll.s2 * 100}%)`}}>
                            {tech.slice(0,4).map((icon)=>(
                                <div  className="snap-center flex-shrink-0 w-full">
                                    <img src={`./src/assets/photos/${icon.src}.png`} className={`w-16 ${icon.att}`}></img>
                                </div>
                            ))}
                        </div>
                        <div className={`flex flex-col w-24 snap-y snap-mandatory transition ease-out duration-[1500ms] space-y-4`} style={{ transform: `translateY(-${scroll.s3 * 100}%)`}}>
                            {tech.slice(8,12).map((icon)=>(
                                <div  className="snap-center flex-shrink-0 w-full">
                                    <img src={`./src/assets/photos/${icon.src}.png`} className={`w-16 ${icon.att}`}></img>
                                </div>
                            ))}
                        </div>
                        <div className={`flex flex-col w-24 snap-y snap-mandatory transition ease-out duration-[1500ms] space-y-4`} style={{ transform: `translateY(-${scroll.s4 * 100}%)`}}>
                            {tech.slice(12,16).map((icon)=>(
                                <div  className="snap-center flex-shrink-0 w-full">
                                    <img src={`./src/assets/photos/${icon.src}.png`} className={`w-16 ${icon.att}`}></img>
                                </div>
                            ))}
                        </div>
                        <div className={`flex flex-col w-24 snap-y snap-mandatory transition ease-out duration-[1500ms] space-y-4`} style={{ transform: `translateY(-${scroll.s5 * 100}%)`}}>
                            {tech.slice(16).map((icon)=>(
                                <div  className="snap-center flex-shrink-0 w-full">
                                    <img src={`./src/assets/photos/${icon.src}.png`} className={`w-16 ${icon.att}`}></img>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
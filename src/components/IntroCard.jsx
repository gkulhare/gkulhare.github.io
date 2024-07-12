import { useEffect, useState } from "react";

const jobs = ["{Back-end}", "{Systems}", "{Front-end}"]

export default function IntroCard(){

    const [index, setIndex] = useState(1);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setIndex((index+1)%3);
        }, 1000);

        return ()=> clearInterval(interval);
    }, [index]);

    return (
        <div className="flex h-full justify-between">
                    <div className="flex flex-col justify-between">
                        <div className="text-md">
                            <p>Machines don't speak your language? I got you covered.</p>
                            <p>Hello, I'm Gaurav.</p>
                            <p >Software developer <span key={index} className="text-green-400 animate-fade ml-2">{jobs[index]}</span> </p>
                        </div>
                        <div>
                            Reach out to me
                        </div>
                    </div>
                    <div>Profile Picture</div>
                </div>
    );
}
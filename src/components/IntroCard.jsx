import { useEffect, useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
                    <div>Profile Picture</div>
                </div>
    );
}
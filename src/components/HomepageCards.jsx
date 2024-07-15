import IntroCard from "./IntroCard";
import ReadMe from "./ReadME";
import Quote from "./Quote";
import Projects from "./Projects";
import { projects } from "../data/projects";
import { jobs } from "../data/jobs";
import { papers } from "../data/papers";
import Jobs from "./Jobs";
import Status from "./Status";
import CurrentRead from "./CurrentRead";

export default function HomepageCards(){
    return(
        <div className="container mx-auto p-3 auto-rows-fr w-full grid grid-cols-4 rounded-lg gap-4 font-mono">
            <div className="col-span-3 row-span-4 bg-gray-900 rounded-xl shadow-lg border-2 border-transparent hover:border-green-400 p-4">

                <IntroCard/>

            </div>
            <div className="col-span-1 row-span-6 bg-gray-900 rounded-xl shadow-lg border-2 border-transparent hover:border-green-400 p-4 overflow-y-auto">

                <ReadMe/>

            </div>
            <div className="col-span-1 row-span-2 bg-gray-900 rounded-xl shadow-lg border-2 border-transparent hover:border-green-400 overflow-hidden">
                <Status/>
            </div>
            <div className="col-span-1 row-span-4 bg-gray-900 rounded-xl shadow-lg border-2 border-transparent hover:border-green-400 overflow-hidden">
                <Jobs jobs={jobs}/>
            </div>
            <div className="col-span-1 row-span-4 bg-gray-900 rounded-xl shadow-lg border-2 border-transparent hover:border-green-400 overflow-hidden">

                <Projects projects={projects}/>

            </div>
            <div className="col-span-1 row-span-2 bg-gray-900 rounded-xl shadow-lg border-2 border-transparent hover:border-green-400 overflow-hidden">
                <CurrentRead papers={papers}/>
            </div>
            <div className="col-span-1 row-span-2 bg-gray-900 p-4 rounded-xl shadow-lg border-2 border-transparent hover:border-green-400">
                
                <Quote/>
            </div>
        </div>
          
    );
}
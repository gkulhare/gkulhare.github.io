// import IntroCard from "./IntroCard";
import ReadMe from "./ReadME";
import Terminal from "./Terminal";
import Projects from "./Projects";
import { projects } from "../data/projects";
import { jobs } from "../data/jobs";
import { papers } from "../data/papers";
import Jobs from "./Jobs";
import Status from "./Status";
import CurrentRead from "./CurrentRead";
import Contact from "./Contact";

export default function HomepageCards(){
    return(
        <div className="container mx-auto p-3 lg:auto-rows-fr w-full grid lg:grid-cols-4 grid-cols-1 rounded-lg gap-4 font-mono">
            <div className="col-span-1 lg:row-span-6 row-span-2 bg-gray-900 rounded-xl shadow-lg  p-4 overflow-y-auto">
                <ReadMe/>
            </div>
            <div className="col-span-1 lg:row-span-6 row-span-2 bg-gray-900 rounded-xl shadow-lg  overflow-hidden">
                <Jobs jobs={jobs}/>
            </div>
            <div className="col-span-1 lg:row-span-6 row-span-2 bg-gray-900 rounded-xl shadow-lg  overflow-hidden">

                <Projects projects={projects}/>

            </div>
            <div className="col-span-1 lg:row-span-4 row-span-1 bg-gray-900 rounded-xl shadow-lg  overflow-hidden">

                <CurrentRead papers={papers}/>

            </div>
            <div className="col-span-1 lg:row-span-4 row-span-1 bg-gray-900 rounded-xl shadow-lg  overflow-hidden">
                <Status/>
            </div>
            <div className="col-span-1 lg:row-span-2 row-span-1 bg-gray-900 rounded-xl shadow-lg  overflow-hidden min-h-32">
                
                <Terminal/>
            </div>
            <div className="lg:col-span-2 col-span-1 lg:row-span-2 row-span-1 bg-gray-900 rounded-xl shadow-lg ">

                <Contact/>

            </div>
        </div>
          
    );
}
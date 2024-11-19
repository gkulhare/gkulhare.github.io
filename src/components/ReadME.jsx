import { Fragment } from "react";

export default function ReadMe(){
    return (
        <Fragment>
        <p className="text-lg font-bold pb-2">
                    Read<b className="text-green-400">ME</b>
        </p>
        <p className="h-[90%] text-sm text-pretty scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-gray-700 px-4 overflow-y-scroll">
            I'm Gaurav Kulhare, a software engineer and CS grad student at SUNY Stony Brook University, residing on Long Island, NY.
            <p className="mt-4">
            I work at the <a href="https://www.fsl.cs.sunysb.edu/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-indigo-400">File Systems and Storage Lab</a> under Prof. Erez Zadok where I am developing a containerized distributed service for proactive and verifiable secret sharing in Rust at the moment.  
            </p>
            <p className="text-sm mt-4">
                My areas of interest include back-end development, systems programming and clean front-end designs. 
            </p>
            <p className="mt-4 text-sm">
                Recommend me a song, book, movie/show, place to visit.<br/> I am open to all genres!
            </p>
        </p>
        </Fragment>
    );
}
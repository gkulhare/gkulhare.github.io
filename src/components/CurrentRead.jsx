import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { useState, useEffect } from "react";
import { faArrowUpRightFromSquare, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function CurrentRead({papers}){

    return(
        <div className="flex flex-col h-full w-full justify-between">     
            <div className="w-full text-center p-2 bg-gray-950">
                <div className="text-base">
                    <FontAwesomeIcon icon={faBookOpen} className="text-green-400"/> Current Reads
                </div>
            </div>
        <div className="group relative flex flex-col flex-grow w-full h-full justify-between overflow-y-auto">
            {papers.map((paper)=>
                (<div className="relative px-4 py-2 h-28 even:bg-gray-800">
                    <div className="flex flex-row justify-between">
                    <div className="text-white text-sm pb-2 ">
                        {paper.title}
                    </div>
                    <div className="flex">
                        <a href={paper.link} className="text-white hover:text-indigo-400"><FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a>
                    </div>
                    </div>
                    <div className="absolute bottom-0 right-0 text-sm text-indigo-400 text-right p-2">
                        {paper.authors}
                    </div>
                </div>)
            )}           
        </div>
        </div>
    );
    
}
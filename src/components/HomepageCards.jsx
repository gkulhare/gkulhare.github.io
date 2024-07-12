import IntroCard from "./IntroCard";

export default function HomepageCards(){
    return(
        <div className="container mx-auto p-3 auto-rows-fr w-full grid grid-cols-4 rounded-lg gap-4 font-mono">
            <div className="col-span-3 row-span-4 bg-gray-900 rounded-xl shadow-lg border-2 border-transparent hover:border-green-400 p-4">

                <IntroCard/>

            </div>
            <div className="col-span-1 row-span-6 bg-gray-900 rounded-xl shadow-lg border-2 border-transparent hover:border-green-400 p-4">
                
                <p className="text-lg font-bold pb-2">
                    Read<b className="text-green-400">ME</b>
                </p>
                <p className="text-sm">
                    I'm Gaurav Kulhare, a software engineer and CS grad student at SUNY Stony Brook University.
                    <p className="mt-2">
                    I work in the File Systems and Storage Lab under Prof. Erez Zadok where I am developing a containerized distributed service for proactive and verifiable secret sharing in Rust at the moment.  
                    </p>
                </p>

            </div>
            <div className="col-span-1 row-span-2 bg-gray-900 p-4 rounded-xl shadow-lg border-2 border-transparent hover:border-green-400">
                Status
            </div>
            <div className="col-span-1 row-span-4 bg-gray-900 p-4 rounded-xl shadow-lg border-2 border-transparent hover:border-green-400">
                Tech Stack
            </div>
            <div className="col-span-1 row-span-4 bg-gray-900 p-4 rounded-xl shadow-lg border-2 border-transparent hover:border-green-400">
                Projects
            </div>
            <div className="col-span-1 row-span-2 bg-gray-900 p-4 rounded-xl shadow-lg border-2 border-transparent hover:border-green-400">
                Current Read
            </div>
            <div className="col-span-1 row-span-2 bg-gray-900 p-4 rounded-xl shadow-lg border-2 border-transparent hover:border-green-400">
                Quote
            </div>
        </div>
          
    );
}
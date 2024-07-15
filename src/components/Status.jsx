export default function Status(){
    return (
        <div className="h-full w-full items-center flex flex-col justify-between ">
            <div className="w-full flex-1 flex items-center justify-between px-4 ">
                <div className="text-sm p-2">
                    Developing a Rust Module for Proactive Secret Key Distribution
                </div>
                <div className="flex flex-col items-center">
                    <div className="pb-2">
                    <span class="relative flex h-3 w-3">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    </div>
                </div>
            </div>
            <div className="w-full flex-1 flex items-center justify-between px-4 bg-gray-500 bg-opacity-20 ">
            <div className="text-sm p-2">
                    Looking into distributed horizontal scaling of LLM SaaS
                </div>
                <div className="flex flex-col items-center">
                    <div className="pb-2">
                    <span class="relative flex h-3 w-3">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                    </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
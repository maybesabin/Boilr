import { useTimelineContext } from "@/context/timeline-context"

const Timeline = () => {
    const { activeIndex } = useTimelineContext();

    return (
        <div className="mt-12 w-full flex items-center justify-center">
            <div className="md:p-6 p-4 border rounded-md flex items-center">
                <div
                    className="flex flex-col items-center gap-2">

                    {/* Circle */}
                    <div className="flex items-center">
                        <div className="ml-10 flex items-center">
                            <div
                                className="bg-yellow-400 md:h-10 md:w-10 h-8 w-8 rounded-full flex items-center justify-center">
                                <div className="bg-white md:h-4 md:w-4 h-3 w-3 rounded-full"></div>
                            </div>
                            <div className={`md:w-56 w-20 h-1 ${activeIndex == 1 || activeIndex == 2 || activeIndex == 3 ? "bg-yellow-400" : "bg-gray-300 dark:bg-gray-400"}`}></div>
                        </div>
                        <div className="flex items-center">
                            <div
                                className={`${activeIndex == 1 || activeIndex == 2 ? "bg-yellow-400" : "bg-gray-300 dark:bg-gray-500"} md:h-10 md:w-10 h-8 w-8 rounded-full flex items-center justify-center`}>
                                <div className="bg-white md:w-4 h-3 w-3 rounded-full"></div>
                            </div>
                            <div className={`md:w-56 w-20 h-1 ${activeIndex == 2 ? "bg-yellow-400" : "bg-gray-300 dark:bg-gray-400"}`}></div>
                        </div>
                        <div
                            className={`${activeIndex == 2 ? "bg-yellow-400" : "dark:bg-gray-500 bg-gray-300"} md:h-10 md:w-10 h-8 w-8 mr-10 rounded-full flex items-center justify-center`}>
                            <div className="bg-white md:w-4 h-3 w-3 rounded-full"></div>
                        </div>
                    </div>

                    {/* Texts */}
                    <div className="md:ml-0 ml-3 text-center flex items-center justify-between w-full">
                        <h4
                            className="text-yellow-500 md:text-base text-sm font-medium">
                            Project Details
                        </h4>
                        <h4
                            className={`${activeIndex == 1 || activeIndex == 2 ? "text-yellow-500" : "text-gray-300"} md:text-base text-sm  font-medium`}>
                            Customer Features
                        </h4>
                        <h4
                            className={`${activeIndex == 2 ? "text-yellow-500" : "text-gray-300"} md:text-base text-sm  font-medium`}>
                            Generate Projects
                        </h4>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Timeline
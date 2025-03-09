import { useTimelineContext } from "@/context/timeline-context"

const Timeline = () => {
    const { activeIndex } = useTimelineContext();

    return (
        <div className="mt-12 w-full flex items-center justify-center">
            <div className="p-6 border rounded-md flex items-center">
                <div
                    className="flex flex-col items-center gap-2">

                    {/* Circle */}
                    <div className="flex items-center">
                        <div className="ml-10 flex items-center">
                            <div
                                className="bg-yellow-400  h-10 w-10 rounded-full flex items-center justify-center">
                                <div className="bg-white h-4 w-4 rounded-full"></div>
                            </div>
                            <div className={`w-56 h-1 ${activeIndex == 1 || activeIndex == 2 || activeIndex == 3 ? "bg-yellow-400" : "bg-gray-300 dark:bg-gray-400"}`}></div>
                        </div>
                        <div className="flex items-center">
                            <div
                                className={`${activeIndex == 1 || activeIndex == 2 ? "bg-yellow-400" : "bg-gray-300 dark:bg-gray-500"} h-10 w-10 rounded-full flex items-center justify-center`}>
                                <div className="bg-white h-4 w-4 rounded-full"></div>
                            </div>
                            <div className={`w-56 h-1 ${activeIndex == 2 ? "bg-yellow-400" : "bg-gray-300 dark:bg-gray-400"}`}></div>
                        </div>
                        <div
                            className={`${activeIndex == 2 ? "bg-yellow-400" : "dark:bg-gray-500 bg-gray-300"} h-10 w-10 mr-10 rounded-full flex items-center justify-center`}>
                            <div className="bg-white h-4 w-4 rounded-full"></div>
                        </div>
                    </div>

                    {/* Texts */}
                    <div className="flex items-center justify-between w-full">
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
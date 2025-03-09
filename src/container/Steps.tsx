import Step1 from "@/components/Step1"
import Step2 from "@/components/Step2";
import Step3 from "@/components/Step3";
import { Button } from "@/components/ui/button";
import { useTimelineContext } from "@/context/timeline-context"
import { ChevronLeft, ChevronRight } from "lucide-react";

const Steps = () => {
    const { activeIndex, setActiveIndex } = useTimelineContext();
    return (
        <div className="w-1/3 p-6">
            {activeIndex == 0 ? <Step1 /> :
                activeIndex == 1 ? <Step2 /> :
                    activeIndex == 2 ? <Step3 /> :
                        <Step1 />
            }

            {/* Next/Previous */}
            <div className="w-full flex items-center justify-between mt-20">
                <Button
                    onClick={() => {
                        if (activeIndex > 0) setActiveIndex(activeIndex - 1);
                    }}
                    className={`
                    ${activeIndex == 0 ? "opacity-50 hover:cursor-not-allowed" : "opacity-100"}
                    cursor-pointer transition-all bg-yellow-400 hover:bg-yellow-400 text-black font-medium`}>
                    <ChevronLeft />
                    Previous
                </Button>

                <Button
                    onClick={() => {
                        if (activeIndex < 2) setActiveIndex(activeIndex + 1);
                    }}
                    className={`
                        ${activeIndex == 2 ? "opacity-50 hover:cursor-not-allowed" : "opacity-100"}
                        cursor-pointer transition-all bg-yellow-400 hover:bg-yellow-400 text-black font-medium`}>
                    Next
                    <ChevronRight />
                </Button>
            </div>
        </div>
    )
}

export default Steps
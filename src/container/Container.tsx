import Preview from "@/components/Preview"
import Timeline from "@/components/Timeline"
import Steps from "./Steps"

const Container = () => {
    return (
        <div className="w-full">
            <Timeline />
            <div className="w-full flex items-start pt-20">
                <Steps />
                <Preview />
            </div>
        </div>
    )
}

export default Container
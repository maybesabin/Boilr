import Preview from "@/components/Preview"
import Timeline from "@/components/Timeline"
import Steps from "./Steps"
import { useState } from "react";

const Container = () => {
    const [capitalize, setCapitalize] = useState(false);
    return (
        <div className="w-full">
            <Timeline />
            <div className="w-full flex md:flex-row flex-col md:gap-6 gap-12 items-start pt-20">
                <Steps
                    capitalize={capitalize}
                    setCapitalize={setCapitalize}
                />
                <Preview
                    capitalize={capitalize}
                />
            </div>
        </div>
    )
}

export default Container
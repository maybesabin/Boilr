import { useGlobalContext } from "@/context/global-context"


const Step3 = () => {
    const { name, title, fontFamily, primaryColor, borderRadius } = useGlobalContext()
    return (
        <div className="w-full flex flex-col items-start gap-6">
            <h2 className="md:text-base text-sm text-zinc-800 dark:text-neutral-200">
                <span className="font-bold">Step 3: &nbsp;</span>
                Finalize your selections and create your tailored boilerplate.
            </h2>

            {/* Project Overview */}
            <div className="flex flex-col items-start gap-2.5 w-full">
                <h3 className="font-medium md:text-base text-sm">
                    Project Overview
                </h3>
                <div className="border rounded-lg p-4 flex flex-col items-start gap-4 w-full">
                    <h4 className="md:text-sm text-xs">
                        <span className="md:text-base text-sm font-semibold">
                            Project Name:&nbsp;&nbsp;
                        </span>
                        {name}
                    </h4>
                    <h4 className="md:text-sm text-xs">
                        <span className="md:text-base text-sm font-semibold">
                            Title:&nbsp;&nbsp;
                        </span>
                        {title}
                    </h4>
                </div>
            </div>

            {/* UI Preview*/}
            <div className="flex flex-col items-start gap-2.5 w-full">
                <h3 className="font-medium md:text-base text-sm">
                    UI Preview
                </h3>
                <div className="border rounded-lg p-4 flex flex-col items-start gap-4 w-full">
                    <h4 className="md:text-sm text-xs">
                        <span className="md:text-base text-sm font-semibold">
                            Border Radius:&nbsp;&nbsp;
                        </span>
                        {borderRadius}px
                    </h4>
                    <h4 className="md:text-sm text-xs">
                        <span className="md:text-base text-sm font-semibold">
                            Font Famiily:&nbsp;&nbsp;
                        </span>
                        {fontFamily ? fontFamily : "Poppins"}
                    </h4>
                    <h4 className="md:text-sm text-xs flex items-end">
                        <span className="md:text-base text-sm font-semibold">
                            Primary Color:&nbsp;&nbsp;
                        </span>
                        <div className="flex items-end gap-2">
                            <div
                                style={{ backgroundColor: primaryColor }}
                                className="h-7 w-8 rounded-md">
                            </div>
                            {primaryColor}
                        </div>
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Step3
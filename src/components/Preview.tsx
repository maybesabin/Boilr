import { useGlobalContext } from "@/context/global-context"
import { Zap } from "lucide-react";

const Preview = ({
    capitalize,
}: {
    capitalize: boolean;
}) => {
    const { name, title, description } = useGlobalContext();
    return (
        <div className="md:w-2/3 w-full border rounded-lg md:p-6 p-4">
            <div className="w-full flex gap-4 items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="bg-yellow-400 flex justify-center items-center md:w-10 md:h-10 w-10 h-10 rounded-lg">
                        <Zap color="black" />
                    </div>
                    <h1 className="font-bold md:text-3xl text-base">
                        {
                            name ? name : "Your Website"
                        }
                    </h1>
                </div>
                <button
                    className="px-4 py-2.5 md:text-base text-sm font-semibold text-black bg-yellow-400 hover:bg-yellow-300 transition-all rounded-lg cursor-pointer"
                >
                    Dashboard
                </button>
            </div>

            <div className="flex flex-col items-center gap-6 mt-20">
                <h1 className={`${capitalize && "capitalize"} lg:text-5xl md:text-3xl text-2xl font-bold text-center xl:w-[75%] lg:w-[90%] w-full break-words`}>
                    {
                        title ? title :
                            <>
                                The Ultimate Platform For Your Digital Transformation
                            </>
                    }
                </h1>
                <p className="lg:text-base md:text-sm text-xs dark:text-neutral-400 text-neutral-700 md:w-[80%] text-center">
                    {
                        description ? description :
                            "Step into the future with us, where technology meets creativity. Our cutting-edge solutions are designed to revolutionize the way you work, connect, and grow. Elevate your digital experience and stay ahead."
                    }
                </p>
                <button
                    className="px-4 py-2.5 md:text-base text-sm font-semibold text-black bg-yellow-400 hover:bg-yellow-300 transition-all rounded-lg cursor-pointer"
                >
                    Explore Now
                </button>
            </div>
        </div>
    )
}

export default Preview
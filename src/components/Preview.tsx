import { useGlobalContext } from "@/context/global-context"

const Preview = () => {
    const { name } = useGlobalContext();
    return (
        <div className="md:w-2/3 w-fit border rounded-lg md:p-6 p-4">
            {name}
        </div>
    )
}

export default Preview
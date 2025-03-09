import { useGlobalContext } from "@/context/global-context"

const Preview = () => {
    const { name } = useGlobalContext();
    return (
        <div className="w-2/3 border rounded-lg p-6">
            {name}
        </div>
    )
}

export default Preview
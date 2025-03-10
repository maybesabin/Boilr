import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useGlobalContext } from "@/context/global-context"
import { SetStateAction } from "react"
import { ArrowBigUpDash } from "lucide-react"

const Step1 = ({
    capitalize,
    setCapitalize
}: {
    capitalize: boolean;
    setCapitalize: React.Dispatch<SetStateAction<boolean>>
}) => {
    const { title, setTitle, name, setName, description, setDescription } = useGlobalContext()

    return (
        <div className="w-full flex flex-col items-start gap-6">
            <h2 className="md:text-base text-sm text-zinc-800 dark:text-neutral-200">
                <span className="font-bold">Step 1: &nbsp;</span>
                Enter basic information for your project setup.
            </h2>

            {/* Website Name */}
            <div className="flex flex-col items-start gap-2 w-full mt-6">
                <Label htmlFor="project-name">Project Name</Label>
                <Input
                    maxLength={15}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="project-name"
                    className="py-5"
                />
            </div>

            {/* Title */}
            <div className="flex flex-col items-start gap-2 w-full">
                <Label htmlFor="title">Title</Label>
                <div className="w-full flex items-center gap-2">
                    <Input
                        maxLength={65}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        name="title"
                        className="py-5"
                    />
                    <ArrowBigUpDash
                        onClick={() => {
                            setCapitalize(!capitalize)
                        }}
                        className="border dark:hover:bg-zinc-800 hover:bg-zinc-100 rounded-md p-1 size-[40px]"
                    />
                </div>
            </div>

            {/* Description */}
            <div className="flex flex-col items-start gap-2 w-full">
                <Label htmlFor="description">Description</Label>
                <Textarea
                    required
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    maxLength={200}
                    className="min-h-24"
                    style={{ resize: "none" }}
                    name="description"
                />
            </div>
            <h3 className="md:text-sm text-xs dark:text-neutral-200 text-neutral-700">
                {description.length}/200 characters
            </h3>
        </div>
    )
}

export default Step1
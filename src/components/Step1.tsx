import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useGlobalContext } from "@/context/global-context"

const Step1 = () => {
    const { name, setName, description, setDescription } = useGlobalContext()
    return (
        <div className="w-full flex flex-col items-start gap-6">
            <h2 className="md:text-base text-sm text-zinc-800 dark:text-neutral-200">
                <span className="font-bold">Step 1: &nbsp;</span>
                Enter basic information for your project setup.
            </h2>

            <div className="flex flex-col items-start gap-2 w-full mt-6">
                <Label htmlFor="project-name">Project Name</Label>
                <Input
                    maxLength={50}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="project-name"
                    className="py-5"
                />
            </div>

            <div className="flex flex-col items-start gap-2 w-full">
                <Label htmlFor="project-name">Project Description</Label>
                <Textarea
                    required
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    maxLength={200}
                    className="min-h-24"
                    style={{ resize: "none" }}
                    name="project-name"
                />
            </div>
            <h3 className="md:text-sm text-xs dark:text-neutral-200 text-neutral-700">
                {description.length}/200 characters
            </h3>
        </div>
    )
}

export default Step1
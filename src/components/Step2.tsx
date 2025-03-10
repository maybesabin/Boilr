import { Label } from "@/components/ui/label"
import { useGlobalContext } from "@/context/global-context"
import { Slider } from "@/components/ui/slider"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const Step2 = () => {
    const { borderRadius, setBorderRadius, primaryColor, setPrimaryColor } = useGlobalContext()
    return (
        <div className="w-full flex flex-col items-start gap-6">
            <h2 className="md:text-base text-sm text-zinc-800 dark:text-neutral-200">
                <span className="font-bold">Step 2: &nbsp;</span>
                Configure essential styling and functionality options.
            </h2>

            {/* Border Radius */}
            <div className="flex flex-col items-start gap-2 w-full mt-6">
                <Label htmlFor="borderRadius" className="font-medium md:text-base text-sm">Border Radius</Label>
                <p className="md:text-sm text-xs dark:text-neutral-200 text-neutral-800">
                    Set the border radius for elements like buttons and inputs. A common value is 8px.
                </p>
                <div className="flex items-center gap-2 w-full">
                    <Slider
                        name="borderRadius"
                        onValueChange={(value) => setBorderRadius(value[0])}
                        value={[borderRadius]}
                        defaultValue={[borderRadius]}
                        min={0}
                        max={32}
                        step={1}
                    />
                    <h3 className="md:text-sm text-xs">
                        {borderRadius}px
                    </h3>
                </div>
            </div>

            {/* Font Family */}
            <div className="flex flex-col items-start gap-2 w-full">
                <Label htmlFor="borderRadius" className="font-medium md:text-base text-sm">Font Family</Label>
                <p className="md:text-sm text-xs dark:text-neutral-200 text-neutral-800">
                    Select the primary font for your website or app. You can choose any font from Google Fonts.
                </p>
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Poppins" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="system">System</SelectItem>
                        <SelectItem value="poppins">Poppins</SelectItem>
                        <SelectItem value="montserrat">Montserrat</SelectItem>
                        <SelectItem value="robotoMono">Roboto Mono</SelectItem>
                        <SelectItem value="openSans">Open Sans</SelectItem>
                        <SelectItem value="roboto">Roboto</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Primary Color */}
            <div className="flex flex-col items-start gap-2 w-full">
                <Label htmlFor="borderRadius" className="font-medium md:text-base text-sm">Primary Color</Label>
                <p className="md:text-sm text-xs dark:text-neutral-200 text-neutral-800">
                    This color serves as the primary action color. Typically used for buttons and links. It should align with your brand's color palette.
                </p>
                <div className="w-full border rounded-lg flex items-center gap-4 p-2">
                    <input
                        className="h-10 w-15 outline-none border-none"
                        type="color"
                        onChange={(e) => setPrimaryColor(e.target.value)}
                        value={primaryColor}
                    />
                    <h4 className="font-medium md:text-sm text-xs">
                        {primaryColor}
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Step2
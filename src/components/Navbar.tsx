import { Rocket } from "lucide-react"
import { ModeToggle } from "./mode-toggle"

const Navbar = () => {
    return (
        <div className="w-full flex items-center justify-between">
            <div className="flex items-end gap-2">
                <div className="bg-yellow-400 flex justify-center items-center w-10 h-10 rounded-lg">
                    <Rocket color="black" />
                </div>
                <h1 className="font-bold text-3xl">Boilr</h1>
            </div>
            <ModeToggle />
        </div>
    )
}

export default Navbar
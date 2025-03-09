import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative"
        >
            <Sun
                className="h-[1.2rem] w-[1.2rem] transition-all transform dark:-rotate-90 dark:scale-0"
            />
            <Moon
                className="absolute h-[1.2rem] w-[1.2rem] transition-all transform rotate-90 scale-0 dark:rotate-0 dark:scale-100"
            />
        </Button>
    );
}

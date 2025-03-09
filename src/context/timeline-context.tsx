import { createContext, SetStateAction, useContext, useState } from "react";

interface TimelineProps {
    activeIndex: number,
    setActiveIndex: React.Dispatch<SetStateAction<number>>;
}

//create context
const TimelineContext = createContext<TimelineProps | undefined>(undefined);

//create provider
export const TimelineProvider = ({ children }: { children: React.ReactNode }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <TimelineContext.Provider value={{ activeIndex, setActiveIndex }}>
            {children}
        </TimelineContext.Provider>
    );
}

//custom hook
export const useTimelineContext = () => {
    const context = useContext(TimelineContext);
    if (!context) {
        throw new Error('useTimelineContext must be used within a TimelineProvider')
    }
    return context;
}
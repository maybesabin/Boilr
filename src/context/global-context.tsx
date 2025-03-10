import { createContext, SetStateAction, useContext, useState } from "react";

interface GlobalProps {
    title: string;
    name: string;
    description: string;
    borderRadius: number;
    fontFamily: string;
    primaryColor: string;
    setName: React.Dispatch<SetStateAction<string>>;
    setTitle: React.Dispatch<SetStateAction<string>>;
    setDescription: React.Dispatch<SetStateAction<string>>;
    setBorderRadius: React.Dispatch<SetStateAction<number>>;
    setFontFamily: React.Dispatch<SetStateAction<string>>;
    setPrimaryColor: React.Dispatch<SetStateAction<string>>;
}

//create context
const GlobalContext = createContext<GlobalProps | undefined>(undefined);

//create provider
export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
    const [title, setTitle] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("")
    const [borderRadius, setBorderRadius] = useState(8)
    const [fontFamily, setFontFamily] = useState("");
    const [primaryColor, setPrimaryColor] = useState("#fdc700")
    return (
        <GlobalContext.Provider value={{
            name, setName,
            title, setTitle,
            description, setDescription,
            borderRadius, setBorderRadius,
            fontFamily, setFontFamily,
            primaryColor, setPrimaryColor
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

//custom hook
export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error('useGlobalProvider must be used within a GlobalProvider')
    }
    return context;
}
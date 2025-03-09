import { createContext, SetStateAction, useContext, useState } from "react";

interface GlobalProps {
    name: string;
    description: string;
    borderRadius: string;
    fontFamily: string;
    primaryColor: string;
    setName: React.Dispatch<SetStateAction<string>>;
    setDescription: React.Dispatch<SetStateAction<string>>;
    setBorderRadius: React.Dispatch<SetStateAction<string>>;
    setFontFamily: React.Dispatch<SetStateAction<string>>;
    setPrimaryColor: React.Dispatch<SetStateAction<string>>;
}

//create context
const GlobalContext = createContext<GlobalProps | undefined>(undefined);

//create provider
export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("")
    const [borderRadius, setBorderRadius] = useState("")
    const [fontFamily, setFontFamily] = useState("");
    const [primaryColor, setPrimaryColor] = useState("")
    return (
        <GlobalContext.Provider value={{
            name, setName,
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
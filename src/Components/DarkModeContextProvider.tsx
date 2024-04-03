import {ReactNode, useState} from "react";
import DarkModeContext from "../Contexts/DarkModeContext";

interface DarkModeContextProviderProps {
    children: ReactNode;
}

function DarkModeContextProvider(props: DarkModeContextProviderProps) {
    const [darkMode, setDarkMode] = useState(true);
    const darkModeContextValue = { darkMode, setDarkMode};

    return <DarkModeContext.Provider value={darkModeContextValue}>
        {props.children}
    </DarkModeContext.Provider>
}
export default DarkModeContextProvider;
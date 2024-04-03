import {useContext, useEffect} from "react";
import DarkModeContext from "../Contexts/DarkModeContext";

function ThemeBackground() {
    const {darkMode} = useContext(DarkModeContext);

    useEffect(() => {
        document.body.style.background = darkMode ? '#606060' : '#c5c5c5';
    }, [darkMode]);

    return null
}
export default ThemeBackground
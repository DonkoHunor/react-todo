import React, {useContext} from "react";
import darkModeContext from "../Contexts/DarkModeContext";

function ToolBar() {
    const {darkMode, setDarkMode} = useContext(darkModeContext);
    return (
        <div className="ToolBar">
            <label>DarkMode: </label>
            <input className="Checkbox" type="checkbox" onChange={() => setDarkMode(!darkMode)} checked={darkMode}/>
        </div>)
}

export default ToolBar;
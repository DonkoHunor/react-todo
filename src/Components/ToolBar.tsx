import React, {useContext} from "react";
import darkModeContext from "../Contexts/DarkModeContext";

interface ToolBarProps {
    toggleState: boolean
    toggle: () => void;
}

function ToolBar(props: ToolBarProps) {
    const {darkMode, setDarkMode} = useContext(darkModeContext);
    return (
        <div className="ToolBar">
            <label>Background Theme: </label>
            <input className="Checkbox" type="checkbox" onChange={props.toggle} checked={props.toggleState}/>
            <label>DarkMode: </label>
            <input className="Checkbox" type="checkbox" onChange={() => setDarkMode(!darkMode)} checked={darkMode}/>
        </div>)
}

export default ToolBar;
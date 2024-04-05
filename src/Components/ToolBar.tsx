import React, {useContext, useEffect, useRef, useState} from "react";
import darkModeContext from "../Contexts/DarkModeContext";

interface ToolBarProps {
    toggleState: boolean
    toggle: () => void;
}

function ToolBar(props: ToolBarProps) {
    const {darkMode, setDarkMode} = useContext(darkModeContext);
    const [time, setTime] = useState(new Date(Date.now()).toISOString())
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date(Date.now()).toISOString());
            console.log('tick');
        }, 1000)

        return () => {
            clearInterval(interval);
        }
    }, []);

    useEffect(() => {
        inputRef.current!.focus();
    }, []);

    return (
        <div className="ToolBar">
            <input type="text" ref={inputRef}/>
            <label style={{marginLeft: '20px'}}>Background Theme: </label>
            <input className="Checkbox" type="checkbox" onChange={props.toggle} checked={props.toggleState}/>
            <label>DarkMode: </label>
            <input className="Checkbox" type="checkbox" onChange={() => setDarkMode(!darkMode)} checked={darkMode}/>
            {props.toggleState && <p style={{color: "white"}}>{time.substring(11,19)}</p>}
        </div>)
}

export default ToolBar;
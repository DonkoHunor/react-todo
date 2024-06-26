import React, {useState} from 'react';
import './App.css';
import {Todo} from "./Todo";
import TodoList from "./Components/TodoList";
import ToolBar from "./Components/ToolBar";
import DarkModeContextProvider from "./Components/DarkModeContextProvider";
import Card from "./Components/Card";
import SplitPanel from "./Components/SplitPanel";
import ThemeBackground from "./Components/ThemeBackground";
import Products from "./Components/Products";
import CanvasDemo from "./Components/CanvasDemo";
import Input from "./Components/Input";

const initialTodoList: Todo[] = [
    {id: '1', text: 'Teszt szöveg 1'},
    {id: '2', text: 'Teszt szöveg 2'},
    {id: '3', text: 'Teszt szöveg 3'},
    {id: '4', text: 'Teszt szöveg 4'},
]


function App() {

    const [theme, setTheme] = useState(true);
    const [value, setValue] = useState('alma');

    function toggleTheme() {
        setTheme(!theme);
    }

    return (
        <div>
            <DarkModeContextProvider>
                {theme && <ThemeBackground/>}
                <ToolBar toggleState={theme} toggle={toggleTheme}/>
                <div style={{textAlign: 'center', width: '100vw'}}>
                    <Input value={value} setValue={setValue}/>
                    <p style={{fontSize: 40}}>{value.length}</p>
                </div>
            </DarkModeContextProvider>
        </div>
    );
}

export default App;

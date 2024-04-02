import React, {useState} from 'react';
import './App.css';
import {Todo} from "./Todo";
import TodoList from "./Components/TodoList";
import ToolBar from "./Components/ToolBar";
import DarkModeContextProvider from "./Components/DarkModeContextProvider";

const initialTodoList: Todo[] = [
    {id: '1', text: 'Teszt szöveg 1'},
    {id: '2', text: 'Teszt szöveg 2'},
    {id: '3', text: 'Teszt szöveg 3'},
    {id: '4', text: 'Teszt szöveg 4'},
]

function App() {
    return (
        <div>
            <DarkModeContextProvider>
                <ToolBar/>
                <TodoList list={initialTodoList}/>
            </DarkModeContextProvider>
        </div>
    );
}

export default App;

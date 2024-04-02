import ListItem from "./ListItem";
import React from "react";
import {Todo} from "../Todo";

interface TodoListProps {
    list: Todo[];
}
function TodoList(props: TodoListProps){
    return (
        <ul>
            {props.list.map((todo) =>
                <ListItem text={todo.text}/>
            )}
        </ul>
    )
}
export default TodoList
import {useContext} from "react";
import DarkModeContext from "../Contexts/DarkModeContext";

interface ListItemProps{
    text: string
}
function ListItem(props: ListItemProps){
    const {darkMode} = useContext(DarkModeContext);

    return (
    <li className={darkMode ? 'todoListItem--dark' : 'todoListItem--light'}>
        {props.text}
    </li>)
}
export default ListItem
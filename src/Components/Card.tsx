import {HTMLAttributes, PropsWithChildren, useContext} from "react";
import DarkModeContext from "../Contexts/DarkModeContext";

interface CardProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {}
function Card(props: CardProps) {
    const {darkMode} = useContext(DarkModeContext);

    return <div {...props} className={`card ${darkMode ? 'card card--dark' : 'card card--light'} ${props.className || ''}`}>
    </div>
}
export default Card
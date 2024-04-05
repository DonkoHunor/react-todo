import {useContext, useEffect, useRef} from "react";
import DarkModeContext from "../Contexts/DarkModeContext";

function CanvasDemo(){
    const canvas = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const ctx = canvas.current!.getContext("2d")!;
        ctx.beginPath()
        ctx.moveTo(0,0);
        ctx.lineTo(100,100);
        ctx.moveTo(0,100);
        ctx.lineTo(100,0);
        ctx.stroke();
    }, []);

    return <>
        <canvas height={100} width={100} style={{marginTop: '20px'}} ref={canvas}/>
    </>
}
export default CanvasDemo
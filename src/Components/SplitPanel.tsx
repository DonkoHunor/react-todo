import {HTMLAttributes, PropsWithChildren, ReactNode} from "react";

interface SplitPanelProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
    leftChildren: ReactNode,
    rightChildren: ReactNode,
}

function SplitPanel(props: SplitPanelProps) {
    return <div className="splitpanel--container">
        <div className="splitpanel">
            {props.leftChildren}
        </div>
        <div>
            {props.rightChildren}
        </div>
    </div>
}
export default SplitPanel
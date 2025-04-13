"use-client"
import styles from "./index.module.scss"
import clsx from "clsx"

interface SButtonTypes {
    click:()=>void,
    design:string,
    title:string,
}

const SButton = ({click,design,title}:SButtonTypes) => {
    return (
        <div onClick={click} className={clsx(styles.container, design)}>
            {title}
        </div>
    )
}

export default SButton;
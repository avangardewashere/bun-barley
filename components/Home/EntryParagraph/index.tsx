"use client"
import styles from "./index.module.scss"
import clsx from "clsx"
import SButton from "@/components/client/button";

const EntryParagraph = () => {
    const action = ()=>{

    }
    return (
        <div className={clsx(styles.container)}>
            <h3>OFFICIAL DISTRIBUTOR OF SALVEO BARLEY</h3>
            <p><span>Salveo Barley Grass </span>is a high-quality premium barley grass grown in pollution free environment. Proven and tested by thousands of users in the Philippines. It's the best and premium barley grass brand you'll ever find!</p>
            <SButton click={action} title="SHOP NOW" design={styles.Sbutton}/>
        </div>
    )
}

export default EntryParagraph;
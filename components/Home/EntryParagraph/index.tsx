"use client"
import styles from "./index.module.scss"
import clsx from "clsx"
import SButton from "@/components/client/button";
import Image from "next/image";
import Card from "@/components/client/card";

const EntryParagraph = () => {
    const action = () => {

    }
    return (
        <div className={clsx(styles.container)}>
            <h3>OFFICIAL DISTRIBUTOR OF SALVEO BARLEY</h3>
            <p><span>Salveo Barley Grass </span>is a high-quality premium barley grass grown in pollution free environment. Proven and tested by thousands of users in the Philippines. It's the best and premium barley grass brand you'll ever find!</p>
            <SButton click={action} title="SHOP NOW" design={styles.Sbutton} />
            <h2>OUR PRODUCTS</h2>
            <p><span>Salveo Barley Grass is Certified:</span> <br /><br /> Gluten Free. 100% Natural & Organic. FDA Approved. Halal Approved.</p>


            <div className={clsx(styles.prodList)}>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <SButton click={action} title="View all" design={styles.Sbutton} />
        </div>
    )
}

export default EntryParagraph;
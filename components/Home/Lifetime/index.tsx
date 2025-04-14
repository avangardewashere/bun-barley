"use client"
import styles from "./index.module.scss"
import clsx from "clsx"
import SButton from "@/components/client/button";
import Card from "@/components/client/card";

const Lifetime = () => {
    const action = () => {

    }
    return (
        <div className={clsx(styles.container)}>
   
            <p>         <h3>Get Lifetime Discounts!!</h3>
            Be a member and get discounts as much as 50% FOREVER.</p>
       

            <div className={clsx(styles.prodList)}>
                <Card/>
                <Card />
                <Card />
                <Card />
            </div>
            <div className={clsx(styles.button)}>
                <SButton click={action} title="View all" design={styles.Sbutton} />
            </div>
        </div>
    )
}

export default Lifetime;
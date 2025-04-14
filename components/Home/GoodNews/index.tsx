"use client"
import styles from "./index.module.scss"
import clsx from "clsx"
import SButton from "@/components/client/button";

const GoodNews = () => {
    const action = () => {

    }
    return (
        <div className={clsx(styles.container)}>
            <h3>Good News!!!</h3>
            <p>Salveo Barley is also available on <u>Shopee</u>  and <u>Lazada</u> store.
                <br />
                Visit our online stores here: </p>
            <div className={clsx(styles.button)}>
                <SButton click={action} title="SHOPPEE" design={styles.Sbutton} />
                <SButton click={action} title="LAZADA" design={styles.Sbutton} />
            </div>
        </div>
    )
}

export default GoodNews;
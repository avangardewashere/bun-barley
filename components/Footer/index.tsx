"use client"
import styles from "./index.module.scss"
import clsx from "clsx"
import SButton from "@/components/client/button";

const Footer = () => {
    const action = () => {

    }
    return (
        <div className={clsx(styles.container)}>
            <div className={styles.groupBox}>
                <div className={clsx(styles.group)}>
                    <div className={styles.topic}>Main Menu</div>
                    <div className={styles.item}>
                        Home
                    </div>
                    <div className={styles.item}>
                        Products
                    </div>
                    <div className={styles.item}>
                        Membership
                    </div>
                    <div className={styles.item}>
                        FAQs
                    </div>
                </div>
            </div>
            <div></div>
            <hr style={{color:"#00000050" ,opacity:.5 }}/>
            <br />
            <div className={styles.copyright}>© 2025, Salveo Barley PH Powered by Shopify</div>
        </div>
    )
}

export default Footer;
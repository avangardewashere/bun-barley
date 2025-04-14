"use client"
import styles from "./index.module.scss"
import clsx from "clsx"
import SButton from "@/components/client/button";
import Image from "next/image";

const Card = () => {
    const action = () => {

    }
    return (
        <div className={clsx(styles.prodCard)}>
            <div className={clsx(styles.imgBox)}>
                <Image src="/assets/images/pictures/home/prod1.webp" fill alt="prod1" />

            </div>
            <div className={clsx(styles.details)}>
                <p>Salveo Barley Grass Powder in Trial Pack (80grams)</p>
                <p className={clsx(styles.amount)}>
                    <del>{Number(1200).toLocaleString() + "PHP"}</del>
                    <span>{Number(975).toLocaleString() + "PHP"}</span>
                </p>
                <SButton click={action} title="Add to cart" design={styles.Sbutton} />
            </div>
        </div>
    )
}
export default Card;
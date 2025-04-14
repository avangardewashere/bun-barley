"use client"
import styles from "./index.module.scss"
import clsx from "clsx"
import SButton from "@/components/client/button";

const Disclaimer = () => {
    const action = () => {

    }
    return (
        <div className={clsx(styles.container)}>
            <h3>DISCLAIMER</h3>
            <p>Salveo Barley Grass is not a medicine. It is a natural and a whole food supplement that provides vitamins, minerals, amino acids, enzymes and other essential nutrients to the body. Any information here is not intended to diagnose any illness and is for educational purposes only. Expected results may vary depending on age, diet, body type, condition, habits & overall lifestyle of the user.</p>

            <p>Testimonials here are genuine and voluntarily given by the users. These are personal experiences as a result of their use of the product and should not be taken as a medical advice nor be treated as a scientific evidence. If symptoms persist, consult your physician.</p>
       
        </div>
    )
}

export default Disclaimer;
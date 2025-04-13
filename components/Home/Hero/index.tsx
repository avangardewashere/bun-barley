import Image from "next/image";
import styles from "./index.module.scss"
import clsx from "clsx"
 const Hero = () => {
    return (
        <div className={clsx(styles.hero)}>
            <div className={clsx(styles.imageContainer)}>
                <Image fill src={"/assets/images/pictures/hero.webp"} alt="hero"   />
            </div>
        </div>
    )
 }

 export default Hero;
import Image from "next/image";
import styles from "./index.module.scss"
import clsx from "clsx";
import NavLinks from "./navlinks";
const Navbar = () => {


  return (
    <div className={clsx(styles.container,"flex flex-col")}>

      <div className={clsx(styles.logoBox)}>
        <Image className={clsx(styles.logo)} width={40} height={40} alt="logo" src="/assets/images/icons/SBG_LOGO_FINAL.webp" />
        <div className={styles.actions}>
          <Image src={"/assets/images/icons/shopping-bag.png"} alt="bag" width={20} height={20} />
          <Image src={"/assets/images/icons/shopping-bag.png"} alt="bag" width={20} height={20} />
        </div>
      </div>

      {/* Navlinks */}
      <NavLinks />
    </div>
  );
};

export default Navbar;

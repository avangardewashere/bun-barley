import Image from "next/image";
import styles from "./index.module.scss"
import clsx from "clsx";
const Navbar = () => {
  return (
    <div className={clsx(styles.container,"flex flex-col")}>
      <div>
        <Image className={clsx(styles.logo)} width={40} height={40} alt="logo" src="/assets/images/icons/SBG_LOGO_FINAL.webp" />
      </div>
      {/* Navlinks */}
      <nav className={clsx(styles.navlinks)}>
        <div>Home</div>
        <div>Products</div>
        <div>Membership</div>
        <div>FAQs</div>
      </nav>
    </div>
  );
};

export default Navbar;

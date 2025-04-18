"use client";
import styles from "./index.module.scss";
import clsx from "clsx";
 
import Image from "next/image";

const TestCard = () => {
 
  return (
    <div className={clsx(styles.container)}>
      <Image
        src="/assets/images/pictures/home/prod1.webp"
        alt="test"
        width={75}
        height={75}
      />
      <h3>Bukol sa dibdib | Paulina Policarpio </h3>
      <p>
        "Pagkaraan ng tatlong buwan na tuloy-tuloy kong pag-inom ng Salveo ay
        nawala ung mga bukol nanakakapa ko sa aking breast. Nakakatuwa, ang
        galing ni Salveo kaya tinuloy-tuloy ko ang pag-inom hanggang ngayon.
        Malakas ang katawan ko, di ako dinadapuan ng ubo at sipon."{" "}
      </p>
    </div>
  );
};

export default TestCard;

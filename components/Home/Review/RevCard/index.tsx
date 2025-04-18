"use client";
import styles from "./index.module.scss";
import clsx from "clsx";

import Image from "next/image";
import { FaStar } from "react-icons/fa";

const RevCard = () => {
  return (
    <div className={clsx(styles.container)}>
      <Image
        src="/assets/images/pictures/home/prod1.webp"
        alt="test"
        width={75}
        height={75}
      />
      <div>
        <div className={clsx(styles.rating)}>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>

        <p>
          It is my first time to order. So far the product is good and for sure
          I'm going to order again.
        </p>
        <p>
          Lolito Nel Depalco <br />
          <u>Silver Regular Pack</u>
        </p>
      </div>
    </div>
  );
};

export default RevCard;

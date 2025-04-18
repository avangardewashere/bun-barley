"use client";
import styles from "./index.module.scss";
import clsx from "clsx";
 
import { FaStar } from "react-icons/fa";
import RevCard from "./RevCard";
import { Swiper } from "antd-mobile";
const TestCard = () => {
  return (
    <div className={clsx(styles.container)}>
      <h3>Let customers speak for us</h3>
      <div className={styles.rating}>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <p>from 17 reviews</p>
       
       {/* Swiper */}
       <div>
        <Swiper>
            <Swiper.Item>
                <RevCard />
            </Swiper.Item>
            <Swiper.Item>
                <RevCard />
            </Swiper.Item>
            <Swiper.Item>
                <RevCard />
            </Swiper.Item>
            
            
        </Swiper>
     
       </div>
    </div>
  );
};

export default TestCard;

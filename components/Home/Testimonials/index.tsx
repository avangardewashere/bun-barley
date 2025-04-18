"use client";
import styles from "./index.module.scss";
import clsx from "clsx";
import SButton from "@/components/client/button";
import TestCard from "./testCard";

const Testimonials = () => {
  const action = () => {};
  return (
    <div className={clsx(styles.container)}>
      <h3>TESTIMONIALS</h3>
      <p><b> Real PEOPLE, Real STORIES</b></p>
      <div className={clsx(styles.testContainer)}>
        <TestCard />
        <TestCard />
        <TestCard />
        <TestCard />
      </div>
    </div>
  );
};

export default Testimonials;

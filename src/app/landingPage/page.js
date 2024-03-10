import React from "react";
import styles from "./landingPage.module.css";
import Image from "next/image";
import img1 from "../images/food1.jpg";
import Indicator from "../components/indicator";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className={styles.outer_div}>
      <div className={styles.div1}>
        <p className={styles.title}>FoodFlow</p>
        <p className={styles.tagline}>Saving food, saving lives</p>
        <p className={styles.conc}>
          At Foodflow, we are passionate about reducing food waste and creating
          a more sustainable food ecosystem. Our mission is to connect food
          vendors across the entire value chain, from large-scale distributors
          to small-scale producers, through digital and online tools.
        </p>
        <Link href="./aboutUs" className={styles.join}>
          join community
        </Link>
      </div>
      <div className={styles.div2}>
        <Image src={img1} className={styles.img1}></Image>
      </div>
    </div>
  );
}

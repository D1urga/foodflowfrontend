import React from "react";
import styles from "./contactUs.module.css";
import img1 from "../images/anpic2.jpeg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import Image from "next/image";

export default function ContactUs() {
  return (
    <div className={styles.outer_div}>
      <div className={styles.title}>
        <p>Our Team</p>
      </div>
      <div className={styles.div1}>
        <Image src={img1} className={styles.img}></Image>
        <div className={styles.info}>
          <p className={styles.p1}>Anoop kumar chaudhary</p>
          <p className={styles.p2}>
            Competitive coder full stack Ios Android and web developer
          </p>
          <p className={styles.p2}>4 times Hackathon Winner</p>
          <button className={styles.btn}>linkedIn</button>
        </div>
      </div>
      <div className={styles.div2}>
        <Image src={img5} className={styles.img}></Image>
        <div className={styles.info}>
          <p className={styles.p1}>Dinesh K</p>
          <p className={styles.p2}>
            Artificial Intelligence and Machine Learning developer
          </p>
          <p className={styles.p2}>Hackathon Winner</p>
          <button className={styles.btn}>linkedIn</button>
        </div>
      </div>
      <div className={styles.div1}>
        <Image src={img4} className={styles.img}></Image>
        <div className={styles.info}>
          <p className={styles.p1}>Kelavath Balaji Naik</p>
          <p className={styles.p2}>
            Enthusiastic Computer Science student specializing in Artificial
            Intelligence and Machine Learning, with a keen interest in Full
            Stack Web Development.
          </p>

          <button className={styles.btn}>linkedIn</button>
        </div>
      </div>
    </div>
  );
}

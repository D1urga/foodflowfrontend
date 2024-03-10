import React from "react";
import styles from "./styles/footer.module.css";
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={styles.outer_div}>
      <div className={styles.title_div}>
        <p className={styles.p1}>FoodFlow :</p>
        <p className={styles.p2}>Saving food, saving lives.</p>
      </div>
      <div className={styles.inner_div1}>
        <div className={styles.div1}>
          <p className={styles.topic}>Food-Bank</p>
          <p className={styles.data}>
            Food banks play a vital role in food reuse by collecting surplus
            food from various sources and redistributing it to those in need
            through emergency food assistance agencies
          </p>
        </div>
        <div className={styles.div2}>
          <p className={styles.topic}>Donor</p>
          <p className={styles.data}>
            Donors in food reuse are individuals, businesses, and organizations
            that contribute surplus food to help those in need and reduce food
            waste. These donors play a crucial role in diverting food from
            landfills and providing meals for people facing hunger.
          </p>
        </div>
        <div className={styles.div3}>
          <p className={styles.topic}>About us</p>
          <p className={styles.data}>support</p>
          <p className={styles.data}>bussiness</p>
          <p className={styles.data}>help</p>
        </div>
        <div className={styles.div4}>
          <p className={styles.topic}>contact us</p>
          <p className={styles.data}>+91-6396937375</p>
          <p className={styles.data}>+91-8303759462</p>
          <p className={styles.data}>anupchaudhary1021@gmail.com</p>
          <p className={styles.data}>dineshvit@gmail.com</p>
          <p className={styles.data}>vit universty</p>
          <p className={styles.data}>vijayawada</p>
        </div>
      </div>
      <hr style={{ margin: "20px 0" }} />
      <div className={styles.icons_outer_div}>
        <div className={styles.icons_div}>
          <FaGoogle className={styles.icon} />
          <FaInstagram className={styles.icon} />
          <FaFacebook className={styles.icon} />
          <FaTwitter className={styles.icon} />
        </div>
        <p>connect with and follow us on</p>
      </div>
      <hr style={{ margin: "20px 0" }} />
      <div className={styles.intro}>
        <p>Developed by anoop chaudhary</p>
      </div>
    </div>
  );
}

"use client";
import React, { useState, useEffect } from "react";
import styles from "./reciever.module.css";

export default function Reciever() {
  const [data, setData] = useState([]);

  const fetchInfo = async () => {
    const res = await fetch(
      "https://foodflow.onrender.com/api/v1/donor/getDonation",
      {
        credentials: "include",
      }
    );
    const d = await res.json();
    return setData(d.data);
  };
  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <div className={styles.outer_div}>
      <div className={styles.div1}>
        <p className={styles.p1}>Reciever</p>
        <p className={styles.p2}>
          please choose the donation if you need the food
        </p>
        <p className={styles.p5}>
          please choose wisely , When food is wasted, all the resources that
          went into producing it are also wasted.
        </p>
      </div>
      <div className={styles.div2}>
        <div className={styles.donateData}>
          {data &&
            data.map((data, index) => (
              <div key={index} className={styles.data_div}>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    marginLeft: "5px",
                  }}
                >
                  donation no {index + 1}
                </p>
                <div className={styles.donor_details}>
                  <p className={styles.p3}>donor:</p>
                  <p className={styles.p4}>{data.DonorDetails}</p>
                </div>
                <div className={styles.donor_details}>
                  <p className={styles.p3}>items:</p>
                  <p className={styles.p4}>{data.items}</p>
                </div>
                <div className={styles.donor_details}>
                  <p className={styles.p3}>address:</p>
                  <p className={styles.p4}>{data.address}</p>
                </div>
                <div className={styles.donor_details}>
                  <button className={styles.btn1}>accept</button>
                  <button className={styles.btn2}>decline</button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

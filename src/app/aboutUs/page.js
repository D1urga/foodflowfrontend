"use client";
import React, { useState } from "react";
import styles from "./aboutUs.module.css";
import { FaTimes, FaUserCircle } from "react-icons/fa";

export default function AboutUs({ address }) {
  const [isJoinCommunityShowing, setIsJoinCommunityShowing] = useState(false);
  const [com, setCom] = useState({
    CommunityType: "",
    name: "",
    address: "",
    description: "",
  });
  const [donor, setDonor] = useState({
    items: "",
    address: "",
  });
  const handleInputChange = (event) => {
    setCom({
      ...com,
      [event.target.name]: event.target.value,
    });
  };
  const handleChange = (event) => {
    setDonor({
      ...donor,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // setIsUploading(true);
    const response = await fetch(
      "https://foodflow.onrender.com/api/v1/community/join",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(com),
      }
    );
    // setIsUploading(false);
    // const data = await response.json();
  };
  const handleDonorSubmit = async (event) => {
    event.preventDefault();
    // setIsUploading(true);
    const response = await fetch(
      "https://foodflow.onrender.com/api/v1/donor/comdonate",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(donor),
      }
    );
    // setIsUploading(false);
    // const data = await response.json();
  };
  return (
    <div className={styles.outer_div}>
      <div className={styles.div1}>
        <FaUserCircle className={styles.icon1} />
      </div>
      <div className={styles.div2}>
        <form onSubmit={handleDonorSubmit}>
          <p className={styles.p1}>Donate Here</p>
          <p className={styles.p2}>items</p>
          <textarea
            name="items"
            value={donor.items}
            onChange={handleChange}
            className={styles.inputs}
            placeholder="ex .. rice 200kg"
          ></textarea>
          <p className={styles.p2}>address</p>
          <textarea
            name="address"
            value={donor.address}
            onChange={handleChange}
            className={styles.inputs}
            placeholder="ex .. vit university"
          ></textarea>
          <br />
          <button className={styles.btn2} type="submit">
            submit
          </button>{" "}
          <br />
        </form>
        <button
          className={styles.btn}
          onClick={() => {
            setIsJoinCommunityShowing(!isJoinCommunityShowing);
          }}
        >
          {" "}
          join a community
        </button>
      </div>
      {isJoinCommunityShowing ? (
        <div className={styles.join_comm}>
          <FaTimes
            className={styles.close}
            onClick={() => {
              setIsJoinCommunityShowing(!isJoinCommunityShowing);
            }}
          />
          <form onSubmit={handleSubmit}>
            <p className={styles.p1}>Join Here</p>
            <p className={styles.p2}>CommunityType</p>
            <textarea
              name="CommunityType"
              onChange={handleInputChange}
              value={com.CommunityType}
              className={styles.inputs}
              placeholder="ex .. donor/reciever"
            ></textarea>
            <p className={styles.p2}>name</p>
            <textarea
              name="name"
              onChange={handleInputChange}
              value={com.name}
              className={styles.inputs}
              placeholder="ex .. indiana restaurant"
            ></textarea>
            <p className={styles.p2}>address</p>
            <textarea
              name="address"
              onChange={handleInputChange}
              value={com.address}
              className={styles.inputs}
              placeholder="ex .. vit ap university"
            ></textarea>
            <p className={styles.p2}>description</p>
            <textarea
              name="description"
              onChange={handleInputChange}
              value={com.description}
              className={styles.inputs}
              placeholder="ex .. description"
            ></textarea>
            <button className={styles.btn2} type="submit">
              join
            </button>{" "}
            <br />
            <br />
          </form>
        </div>
      ) : null}
    </div>
  );
}

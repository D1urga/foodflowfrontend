"use client";
import React, { useState } from "react";
import styles from "./styles/navbar.module.css";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
    email: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // setCurrentValue(false);
    const response = await fetch(
      "https://errornf.onrender.com/api/v1/users/logout",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await response.json();
    // setData(data.data);
    localStorage.clear();
    router.push("/");
    // setCurrentValue(true);
  };

  return (
    <div className={styles.outer_div}>
      <div className={styles.title}>
        <FaBars
          className={styles.menubar}
          onClick={() => {
            setIsNavbarOpen(!isNavbarOpen);
          }}
        />
        <p>FoodFlow</p>
      </div>
      <ul className={isNavbarOpen ? styles.list1 : styles.list}>
        <li>
          <Link href="/landingPage">home</Link>
        </li>
        <li>
          <Link href="/reciever">reciever</Link>
        </li>
        {/* <li>
          <Link href="">donate</Link>
        </li> */}
        <li>
          <Link href="./indivisualDonation">indivisual-donation</Link>
        </li>
        <li>
          <Link href="./aboutUs">join-community</Link>
        </li>
        <li>
          <Link href="./contactUs">about us</Link>
        </li>
        <li>
          <Link href="./liveChat">live-chat</Link>
        </li>
      </ul>
      <form onSubmit={handleSubmit}>
        <button className={styles.contribute} type="submit">
          log-out
        </button>
      </form>
    </div>
  );
}

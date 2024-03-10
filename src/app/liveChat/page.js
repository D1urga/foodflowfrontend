"use client";
import React, { useState, useEffect } from "react";
import styles from "./liveChat.module.css";
import { FaChevronCircleRight, FaUser, FaUserCircle } from "react-icons/fa";

export default function LiveChat() {
  const [mess, setMess] = useState({ message: "sadasd" });
  const [data, setData] = useState([]);
  const [chatData, setChatData] = useState([]);

  const handleInputChange = (event) => {
    setMess({
      ...mess,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // setIsUploading(true);
    const response = await fetch(
      `https://foodflow.onrender.com/api/v1/message/chat/${localStorage.getItem(
        "currentUser"
      )}`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mess),
      }
    );
    // setIsUploading(false);
    // const data = await response.json();
  };

  const fetchInfo = async () => {
    const res = await fetch(
      "https://foodflow.onrender.com/api/v1/users/allusers",
      {
        credentials: "include",
      }
    );
    const d = await res.json();
    return setData(d.data);
  };
  const fetchChat = async () => {
    const res = await fetch(
      "https://foodflow.onrender.com/api/v1/message/getallchat",
      {
        credentials: "include",
      }
    );
    const d = await res.json();
    return setChatData(d.data);
  };
  useEffect(() => {
    fetchInfo();
    fetchChat();
  }, []);
  return (
    <div className={styles.outer_div}>
      <div className={styles.div1}>
        <p className={styles.title}>All Users</p>
        <div className={styles.all_users}>
          {data.map((data, index) => (
            <div key={index} className={styles.userdata_outer_div}>
              <FaUserCircle className={styles.icon} />
              <div className={styles.userdata}>
                <p className={styles.p1}>{data.username}</p>
                <p className={styles.p2}>{data.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.div2}>
        <p style={{ fontSize: "14px", color: "blue", fontWeight: "600" }}>
          live chat
        </p>
        <div className={styles.chat_div}>
          {chatData &&
            chatData.map((value, index) => (
              <p
                key={index}
                className={
                  String(value.owner) ==
                  String(localStorage.getItem("currentUser"))
                    ? styles.chatting
                    : styles.chatting1
                }
              >
                {value.message}
              </p>
            ))}
        </div>
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              className={styles.inputs}
              name="message"
              value={mess.message}
              onChange={handleInputChange}
              placeholder="type here..."
            ></input>
            <button type="submit" className={styles.submit_btn}>
              send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

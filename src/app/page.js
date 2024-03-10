"use client";
import Image from "next/image";
import styles from "./page.module.css";
import LandingPage from "./landingPage/page.js";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [data, setData] = useState([]);
  const [currentValue, setCurrentValue] = useState(true);
  const [user, setUser] = useState();
  const [currentuser, setCurrentUser] = useState();
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
    email: "",
  });
  const [register, setRegister] = useState({
    fullName: "",
    email: "",
    password: "",
    username: "",
  });
  const handleregisterInputChange = (event) => {
    setRegister({
      ...register,
      [event.target.name]: event.target.value,
    });
  };
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    // setIsUploading(true);
    const response = await fetch(
      "http://localhost:3000/api/v1/users/register",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(register),
      }
    );
    // setIsUploading(false);
    // const data = await response.json();
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setCurrentValue(false);
    const response = await fetch(
      "https://errornf.onrender.com/api/v1/users/login",
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
    setData(data.data);
    localStorage.setItem("user", data.data);
    localStorage.setItem("currentUser", data.data.user._id);
    setCurrentValue(true);
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    const getcurrentuser = localStorage.getItem("currentUser");
    if (loggedInUser) {
      const foundUser = JSON.stringify(loggedInUser);
      setUser(foundUser);
      setCurrentUser(getcurrentuser);
      router.push("/landingPage");
    }
  }, [data]);

  return (
    <div className={styles.main_div}>
      {isLogin ? (
        <form onSubmit={handleSubmit}>
          <div className={styles.outer_div}>
            <div className={styles.div1}>
              <div className={styles.title}>
                <p className={styles.p5}>FoodFlow :</p>
                <p className={styles.p6}>Saving food, saving lives</p>
              </div>
              <p className={styles.p2}>fullName</p>
              <div>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={styles.inputs}
                  placeholder="ex..anoop chaudhary"
                ></input>
              </div>
              <p className={styles.p2}>username</p>
              <div>
                {" "}
                <input
                  name="username"
                  onChange={handleInputChange}
                  value={formData.username}
                  className={styles.inputs}
                  placeholder="ex..anoop_369"
                ></input>
              </div>
              <p className={styles.p2}>email</p>
              <div>
                <input
                  name="email"
                  onChange={handleInputChange}
                  value={formData.email}
                  className={styles.inputs}
                  placeholder="ex..anoop@gmail.com"
                ></input>
              </div>
              <p className={styles.p2}>password</p>
              <div>
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={styles.inputs}
                  placeholder="ex..password1"
                ></input>
              </div>
              <br />
              <button className={styles.btn} type="submit">
                login
              </button>
              <p
                className={styles.signin}
                onClick={() => {
                  setIsLogin(!isLogin);
                }}
              >
                dont have an accout ? signIn
              </p>
            </div>
            <div className={styles.div2}></div>
          </div>
        </form>
      ) : (
        <form onSubmit={handleRegisterSubmit}>
          <div className={styles.outer_div}>
            <div className={styles.div1}>
              <div className={styles.title}>
                <p className={styles.p5}>FoodFlow :</p>
                <p className={styles.p6}>Saving food, saving lives</p>
              </div>
              <p className={styles.p2}>fullName</p>
              <div>
                <input
                  name="fullName"
                  value={register.fullName}
                  onChange={handleregisterInputChange}
                  className={styles.inputs}
                  placeholder="ex..anoop chaudhary"
                ></input>
              </div>
              <p className={styles.p2}>username</p>
              <div>
                <input
                  name="username"
                  value={register.username}
                  onChange={handleregisterInputChange}
                  className={styles.inputs}
                  placeholder="ex..anoop_369"
                ></input>
              </div>
              <p className={styles.p2}>email</p>
              <div>
                <input
                  name="email"
                  value={register.email}
                  className={styles.inputs}
                  onChange={handleregisterInputChange}
                  placeholder="ex..anoop@gmail.com"
                ></input>
              </div>
              <p className={styles.p2}>password</p>
              <div>
                <input
                  name="password"
                  value={register.password}
                  className={styles.inputs}
                  placeholder="ex..password1"
                  onChange={handleregisterInputChange}
                ></input>
              </div>
              <br />
              <button className={styles.btn} type="submit">
                sign in
              </button>
              <p
                className={styles.signin}
                onClick={() => {
                  setIsLogin(!isLogin);
                }}
              >
                go back to login
              </p>
            </div>

            <div className={styles.div2}></div>
          </div>
        </form>
      )}
    </div>
  );
}

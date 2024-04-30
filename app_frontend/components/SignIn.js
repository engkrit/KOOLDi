import React, { useState } from "react";
import styles from "@/styles/SignIn.module.css";
import { useRouter } from "next/router";

export default function SigninPage() {
  const router = useRouter();
  // สร้าง state เพื่อเก็บข้อมูลจากฟอร์ม
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  // ฟังก์ชันเมื่อมีการเปลี่ยนแปลงในฟอร์ม
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // ฟังก์ชันสำหรับการ submit ฟอร์ม
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:3342/api/token/", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Your username/password are incorrect!");
      }
      const data = await response.json();
      localStorage.setItem("jwt_access", data.access);
      router.push("/");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.text1}>Sign-in</h1>
      <form onSubmit={handleSubmit} className={styles.formSignup}>
        <div className={styles.content1}>
          <label className={styles.label1}>Username :</label>
          <input
            name="username"
            className={styles.input1}
            type="text"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.content2}>
          <label className={styles.label2}>Password</label>
          <input
            type="password"
            name="password"
            className={styles.input2}
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.bt}>
          SIGN IN
        </button>
      </form>
      <br></br>
      <form className={styles.formSignup}>
        <button className={styles.bt} onClick={() => router.push("/signup")}>
          SIGN UP
        </button>
      </form>
      <br></br>
      <form className={styles.formSignup}>
        <button className={styles.bt} onClick={() => router.push("/admin")}>
          SIGN IN FOR ADMIN
        </button>
      </form>
    </div>
  );
}

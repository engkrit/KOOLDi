// signup.js
import React, { useState } from "react";
import styles from "@/styles/SignIn.module.css";
import { Container } from "postcss";
import { useRouter } from 'next/router';
import Link from "next/link";

export default function SigninPage() {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const router = useRouter();


  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/');
    console.log("Form submitted with data:", formData);
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    router.push('/admin');
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className={styles.container}>
      
      <h1 className={styles.text1}>SIGN-IN</h1>

      <form onSubmit={handleSubmit} className={styles.formSignup}>

        <div className={styles.content}>
          <label className={styles.label1}>Username</label>
          <input
            type="text"
            name="username"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className={styles.content}> 
          <label className={styles.label2}>Password</label>
          <input 
            type="password"
            name="password"
            className={styles.input}
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.btcontainer}>
          <button type="submit" className={styles.bt} onClick={handleSubmit}>SIGN IN</button>
          <button type="submit" className={styles.bt1} onClick={handleSubmit1}>SIGN IN FOR ADMIN</button>
          <Link href="/signup" className={styles.signInLink}>SIGN UP</Link>
        </div>
      </form>
    </div>
  );
};




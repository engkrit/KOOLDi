// signup.js
import React, { useState } from "react";
import styles from "@/styles/SignUp.module.css";
import { Container } from "postcss";
import { useRouter } from 'next/router';
import Link from "next/link";



export default function SignupPage() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    address:"",
    province:"",
    district:"",
    subdistrict:"",
    phone:"",
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

  const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(file);
        }
    };


  return (
    <div className={styles.container}>
      <h1 className={styles.text1}>SIGN-UP</h1>
      <form onSubmit={handleSubmit} className={styles.formSignup}>

        <div className={styles.content}>
          <label className={styles.label}>Username</label>
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
          <label className={styles.label}>Password</label>
          <input 
            type="password"
            name="password"
            className={styles.input}
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.content}>
            <label className={styles.label}>First Name</label>
            <input
                type="text"
                name="firstName"
                className={styles.input}
                value={formData.firstName}
                onChange={handleChange}
                required
            />
        </div>

        <div className={styles.content}>
            <label className={styles.label}>Last Name</label>
            <input
                type="text"
                name="lastName"
                className={styles.input}
                value={formData.lastName}
                onChange={handleChange}
                required
            />
        </div>

        <div className={styles.content}>
            <label className={styles.label}>Address</label>
            <input
                type="text"
                name="address"
                className={styles.input}
                value={formData.address}
                onChange={handleChange}
                required
            />
        </div>

        <div className={styles.content}>
            <label className={styles.label}>Subdistrict</label>
            <input
                type="text"
                name="subdistrict"
                className={styles.input}
                value={formData.address}
                onChange={handleChange}
                required
            />
        </div>

        <div className={styles.content}>
            <label className={styles.label}>District</label>
            <input
                type="text"
                name="district"
                className={styles.input}
                value={formData.address}
                onChange={handleChange}
                required
            />
        </div>

        <div className={styles.content}>
            <label className={styles.label}>Province</label>
            <input
                type="text"
                name="province"
                className={styles.input}
                value={formData.address}
                onChange={handleChange}
                required
            />
        </div>

        <div className={styles.content}>
            <label className={styles.label}>Phone</label>
            <input
                type="tel"
                name="phone"
                className={styles.input}
                value={formData.phone}
                onChange={handleChange}
                required
            />
        </div>

        <div className={styles.cardcontent}>
        <label className={styles.titlecard}>Upload ID Card</label>
        <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className={styles.inputcard}
        />
        {image && (
            <div className={styles.imageContainer}>
            <img src={image} alt="ID Card" className={styles.image} />
            </div>
        )}
        </div>
        <div className={styles.btcontainer}>
          <button type="submit" className={styles.bt}>Upload ID Card</button>
          <button type="submit" className={styles.bt1}>SIGN UP</button>
        </div>
      </form>
    </div>
  );
};




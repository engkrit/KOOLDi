import React, { useState } from "react";
import styles from "@/styles/SignUp.module.css";
import { useRouter } from "next/router";

export default function SignupPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    address: "",
    subdistrict: "",
    district: "",
    province: "",
    phone: "",
    email: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleImageUpload = async () => {
    try {
      const imageForm = new FormData();
      imageForm.append("file", formData.image);

      const imageResponse = await fetch("http://127.0.0.1:3342/api/aiforthai", {
        method: "POST",
        body: imageForm,
      });

      if (!imageResponse.ok) {
        throw new Error("Failed to upload image");
      }

      const imageData = await imageResponse.json();

      // แก้ไขส่วนนี้เพื่อนำข้อมูล JSON มาแสดงในฟอร์ม
      setFormData((prevData) => ({
        ...prevData,
        firstname: imageData.en_fname,
        lastname: imageData.en_lname,
        address: imageData.home_address,
        subdistrict: imageData.sub_district,
        district: imageData.district,
        province: imageData.province,
      }));
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while uploading image. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const registerResponse = await fetch(
        "http://127.0.0.1:3342/api/register",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!registerResponse.ok) {
        throw new Error("Failed to register user");
      }

      router.push("/signin");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while registering user. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.text1}>SIGN UP</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.content1}>
          <label className={styles.label1}>Username</label>
          <input
            type="text"
            name="username"
            className={styles.input1}
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.content1}>
          <label className={styles.label1}>Password</label>
          <input
            type="password"
            name="password"
            className={styles.input1}
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.content1}>
          <label className={styles.label1}>First Name</label>
          <input
            type="text"
            name="firstname"
            className={styles.input1}
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.content1}>
          <label className={styles.label1}>Last Name</label>
          <input
            type="text"
            name="lastname"
            className={styles.input1}
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.content1}>
          <label className={styles.label1}>Address</label>
          <input
            type="text"
            name="address"
            className={styles.input1}
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.content1}>
          <label className={styles.label1}>Subdistrict</label>
          <input
            type="text"
            name="subdistrict"
            className={styles.input1}
            value={formData.subdistrict}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.content1}>
          <label className={styles.label1}>District</label>
          <input
            type="text"
            name="district"
            className={styles.input1}
            value={formData.district}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.content1}>
          <label className={styles.label1}>Province</label>
          <input
            type="text"
            name="province"
            className={styles.input1}
            value={formData.province}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.content1}>
          <label className={styles.label1}>Phone</label>
          <input
            type="text"
            name="phone"
            className={styles.input1}
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <h1 className={styles.text1}>Upload ID Card</h1>
          <input
            type="file"
            name="image"
            className={styles.input1}
            accept="image/*"
            onChange={handleFileChange}
            required
          />
          <br></br>
          <div className={styles.formSignup}>
          <button
            className={styles.bt2}
            type="button"
            onClick={handleImageUpload}
          >
            Upload ID Card
          </button>
          </div>
        </div>
        <br></br>
        <div className={styles.formSignup}>
          <button type="submit"className={styles.btSignup}>
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
}

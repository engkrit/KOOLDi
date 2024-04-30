import Image from "next/image";
import styles from "@/styles/DetailOrder.module.css";
import Link from "next/link";
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Check_Login from "@/components/core";


export default function Cart() {
  const router = useRouter();
  const [profile, setProfile] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // เพิ่มสถานะของการล็อกอิน
  const [products, setProducts] = useState([]);
  Check_Login();

  useEffect(() => {
    let token = localStorage.getItem("jwt_access");
    if (token) {
      // ถ้ามี token ใน localStorage แสดงว่าผู้ใช้ล็อกอินแล้ว
      setIsLoggedIn(true);
      fetchUserInfo(token); // เรียกฟังก์ชันเพื่อเรียกข้อมูลผู้ใช้
    }
  }, []);

  const fetchUserInfo = (token) => {
    fetch(`http://127.0.0.1:3342/api/myinfo`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
      });
  };

  useEffect(() => {
    // สร้างฟังก์ชัน fetchData เพื่อดึงข้อมูลสินค้าจาก API
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:3341/api/maincartprice?q=${profile?.data?.user}`);
        const data = await response.json();
        // เซ็ตข้อมูลสินค้าใน state
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
      // เรียกใช้งานฟังก์ชัน fetchData เมื่อ component โหลดครั้งแรก
      fetchData();    
  }, [profile]);

  if (!products.length) return <p>Loading...</p>;

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
          integrity="sha384-KyZXEAg3QhqLMpG8r+6/jtWnj2Iy4L6S40sMzCGZKhR8+O4JacR3f3EdfcC4JwJ6"
          crossOrigin="anonymous"
        />
      </Head>
      {products.map(product => (

      <div className={styles.container}>
        <div className={styles.content1}>Order Summary</div>
        <div className={styles.content2}>ยอดรวม {product.quantity} บาท</div>
        <div className={styles.content3}>ค่าจัดส่ง 50 บาท</div>
        <hr className={styles.divider}/>
        <div className={styles.content4}>รวม {product.quantity+50} บาท</div>
        <div className={styles.content5}>
            <Link href="/cartsummary" >
                <Image src="/sendbuy.png" width={450} height={50} alt="allbutton"/>
            </Link>
        </div>
      </div>
      ))}

    </>
    
  );
}




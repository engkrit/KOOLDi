import Image from "next/image";
import styles from "@/styles/Address.module.css";
import Link from "next/link";
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Check_Login from "@/components/core";


export default function Address() {
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

  
  const onConfirm = async (e) => {
    try {
        // ตรวจสอบว่า e มีค่าและไม่ใช่ค่าว่าง
        if (!e) {
            console.error('Error: Invalid ID');
            return;
        }
        // แปลงค่า ID เป็นสตริงก่อนส่งไปยังเซิร์ฟเวอร์
        const idString = e.toString();
        const response = await fetch(`http://127.0.0.1:3341/api/confirm_all/?ouser=${idString}`, {
            method: 'GET',
        });
        if (response.ok) {
            const data = await response.json();
            window.location.href = `/thankyou`;
            // Do something with the data if needed
        } else {
            console.error('Error:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

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
      <div className={styles.container}>
        <div className={styles.content1}>Shipping Address</div>
        <div className={styles.content2}>
          <div className={styles.roundedInputContaine}>
            <input type="text" name="nname" placeholder="ชื่อ" className={styles.roundedInput} value={profile?.data?.firstname} />
            <input type="text" name="surname" placeholder="นามสกุล" className={styles.roundedInput} value={profile?.data?.lastname} />
          </div>
          <div className={styles.roundedInputContaine}>
            <input type="text" name="address" placeholder="ที่อยู่" className={styles.roundedInput} value={profile?.data?.address} />
          </div>
          <div className={styles.roundedInputContaine}>
            <input type="text" name="province" placeholder="จังหวัด" className={styles.roundedInput} value={profile?.data?.province} />
            <input type="text" name="district" placeholder="อำเภอ" className={styles.roundedInput} value={profile?.data?.district} />

          </div>
          <div className={styles.roundedInputContaine}>
            <input type="text" name="sub-district" placeholder="ตำบล" className={styles.roundedInput} value={profile?.data?.subdistrict} />
            <input type="text" name="tel" placeholder="เบอร์โทร" className={styles.roundedInput} value={profile?.data?.tel} />
          </div>
          <div className={styles.roundedInputContaine}>
            <input type="text" name="p-number" placeholder="อีเมล์" className={styles.roundedInput}  />
          </div>
        </div>
        <hr className={styles.divider} />

        {products.map(product => (

          <div className={styles.container}>
            <div className={styles.content6}>Order Summary</div>
            <div className={styles.content7}>ยอดรวม {product.quantity} บาท</div>
            <div className={styles.content8}>ค่าจัดส่ง 50 บาท</div>
            <hr className={styles.divider} />
            <div className={styles.content6}>รวม {product.quantity + 50} บาท</div>
            <div className={styles.content9}>
            <Image onClick={() => onConfirm(profile?.data?.user)} src="/sendbuy.png" width={450} height={50} alt={profile?.data?.user} />

              {/* <Link href="/thankyou" >
                  <Image src="/sendbuy.png" width={450} height={50} alt="allbutton" />
              </Link> */}

            </div>
          </div>
        ))}

      </div>
    </>

  );
}




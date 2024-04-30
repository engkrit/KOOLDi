import Image from "next/image";
import styles from "@/styles/Product.module.css";
import Link from "next/link";
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Check_Login from "@/components/core";
import { useRouter } from 'next/router';

export default function ProductList() {
    Check_Login();

    const router = useRouter();
    const [profile, setProfile] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // เพิ่มสถานะของการล็อกอิน
    const [products, setProducts] = useState([]);
    const [quantities, setQuantities] = useState({});


    useEffect(() => {
        let token = localStorage.getItem("jwt_access");
        if (token) {
            // ถ้ามี token ใน localStorage แสดงว่าผู้ใช้ล็อกอินแล้ว
            setIsLoggedIn(true);
            fetchUserInfo(token); // เรียกฟังก์ชันเพื่อเรียกข้อมูลผู้ใช้
        }
    }, []);

    useEffect(() => {
        // สร้างฟังก์ชัน fetchData เพื่อดึงข้อมูลสินค้าจาก API
        const fetchData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:3341/api/maincart/?q=${profile?.data?.user}`);
                const data = await response.json();
                // เซ็ตข้อมูลสินค้าใน state
                setProducts(data);
                // เริ่มต้นปริมาณสินค้าทั้งหมดให้มีค่าตามฐานข้อมูล
                const initialQuantities = {};
                data.forEach(product => {
                    initialQuantities[product.oid] = product.quantity || 1; // หากไม่มีค่าจำนวนในฐานข้อมูล ให้ใช้ค่าเริ่มต้นเป็น 1
                });
                setQuantities(initialQuantities);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        // เรียกใช้งานฟังก์ชัน fetchData เมื่อ component โหลดครั้งแรก
        fetchData();
    }, [profile]); // แก้ไขนี้เพื่อให้ useEffect รีเรนเดอร์เมื่อค่า profile เปลี่ยนแปลง

    const fetchUserInfo = (token) => {
        fetch(`http://127.0.0.1:3342/api/myinfo`, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((res) => res.json())
            .then((data) => {
                setProfile(data);
            });
    };

    if (!products.length) return <p>Loading...</p>;

    const onDelete = async (e) => {
        try {
            // ตรวจสอบว่า e มีค่าและไม่ใช่ค่าว่าง
            if (!e) {
                console.error('Error: Invalid ID');
                return;
            }
            // แปลงค่า ID เป็นสตริงก่อนส่งไปยังเซิร์ฟเวอร์
            const idString = e.toString();
            const response = await fetch(`http://127.0.0.1:3341/api/orderdelete?oid=${idString}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                const data = await response.json();
                // Do something with the data if needed
                window.location.reload();
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }


    const increaseQuantity = (productId) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: (prevQuantities[productId] || 0) + 1
        }));
    };

    const decreaseQuantity = (productId) => {
        if (quantities[productId] > 1) {
            setQuantities(prevQuantities => ({
                ...prevQuantities,
                [productId]: prevQuantities[productId] - 1
            }));
        }
    };

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
                <div className={`${styles.container} row`} key={product.id}>
                    <div className="col-sm-3">
                        <Image src={product.img_url} width={150} height={150} alt="-" />
                    </div>
                    <div className="col-sm-8">
                        <div className={styles.content1}>{product.pname}</div>
                        <div className={styles.content2}>{product.price}</div>
                        <div key={product.oid} className={`${styles.quantityContainer} input-group mb-3 d-flex align-items-center`}>
                            <div className="input-group-prepend">
                                <button className="btn btn-outline-[007C1B] decrease" type="button" onClick={() => decreaseQuantity(product.oid)}>−</button>
                            </div>
                            <input type="text" name={`quantity_${product.oid}`} className="form-control text-center quantity-amount" value={quantities[product.oid] || 1} placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" readOnly />
                            <div className="input-group-append">
                                <button className="btn btn-outline-[007C1B] increase" type="button" onClick={() => increaseQuantity(product.oid)}>+</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1">
                        <Image onClick={() => onDelete(product.oid)} src="/delete.png" width={25} height={25} alt={`${product.oid}`} />
                    </div>
                </div>
            ))}
        </>
    );
}

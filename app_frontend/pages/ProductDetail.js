import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from "@/styles/Detail.module.css";
import Link from "next/link";
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Check_Login from "@/components/core";

export default function ProductDetail() {
  Check_Login();
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState([]);
  const [formData, setFormData] = useState(new FormData());
  const [profile, setProfile] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // เพิ่มสถานะของการล็อกอิน

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


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  }
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:3341/api/product_id/${id}`);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setError('ไม่สามารถโหลดข้อมูลสินค้าได้');
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (loading) {
    return <div>กำลังโหลด...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>ไม่พบสินค้า</div>;
  }


  async function onPlus(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    // Convert FormData to JSON
    const jsonData = {};
    for (const [key, value] of formData.entries()) {
      jsonData[key] = value;
    }
    // Convert JSON data to string
    const jsonString = JSON.stringify(jsonData);
    // Now you can use the JSON string as needed
    console.log(jsonString);
    const response = await fetch('http://127.0.0.1:3341/api/addorder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsonString,
      // body: JSON.stringify(formData),
    });
    try {
      if (response.ok) {
        // Handle successful response
        const data = await response.json();
        alert("การสั่งซื้อเสร็จสิ้น!");
        window.location.href = `/${(product.category).toLowerCase()}`;
        // ดำเนินการเพิ่มเติมตามผลลัพธ์ของการกระทำ
      } else {
        // Handle error response
        alert("เกิดข้อผิดพลาดในการสั่งซื้อ!");
        // ดำเนินการเพิ่มเติมตามผลลัพธ์ของการกระทำ
      }
    } catch (error) {
      // Handle network error or JSON parsing error
      console.error('เกิดข้อผิดพลาดในการดำเนินการ:', error);
      alert("เกิดข้อผิดพลาดในการดำเนินการ!");
    }
  }

  // const onBuy = async () => {
  //   console.log("Image clicked!");
  //   try {
  //     const response = await fetch('http://127.0.0.1:3341/api/addbuy', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       // Do something with the data if needed
  //     } else {
  //       console.error('Error:', response.statusText);
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // }


  return (
    <>
      <div>
        <Header />
        <Head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
            integrity="sha384-KyZXEAg3QhqLMpG8r+6/jtWnj2Iy4L6S40sMzCGZKhR8+O4JacR3f3EdfcC4JwJ6"
            crossOrigin="anonymous"
          />
        </Head>
        <div className={styles.container}>

          <div className={styles.content}>
            <div className={`${styles.allcontent} row `}>
              <div className={`${styles.product} col-sm-6 mb-5 mb-lg-0 `}>
                <Image src={product.img_url} width={500} height={600} alt={product.pname} />
              </div>
              <div className={`${styles.content0} col-sm-6 mb-5 mb-lg-0 `}>
                {/* <div className={`${styles.content3} row `}>{product.category}</div> */}
                <div className={`${styles.content2} row `}>{product.pname}</div>
                <div className={`${styles.content3} row `}>{product.price}</div>
                <form onSubmit={onPlus}>
                <input type="hidden" name="id" value={`${product.id}`} />
                  <div className={`${styles.content4} row `}>จำนวน</div>
                  <div className={`${styles.quantityContainer} input-group mb-3 d-flex align-items-center`}>
                    <div className="input-group-prepend">
                      <button className="btn btn-outline-[007C1B] decrease" type="button" onClick={decreaseQuantity}>−</button>
                    </div>
                    <input type="text" name="quantity" className="form-control text-center quantity-amount" value={quantity} placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" readOnly />
                    <div className="input-group-append">
                      <button className="btn btn-outline-[007C1B] increase" type="button" onClick={increaseQuantity}>+</button>
                    </div>
                  </div>

                  <div className={styles.content5} >
                    <div><input type="hidden" name="oproduct" value={`${product.id}`} /></div>
                    <div><input type="hidden" name="ouser" value={`${profile?.data?.user}`} /></div>
                    <input type="hidden" name="example" value="" onChange={handleChange} />

                    <button type="submit" style={{ backgroundColor: 'transparent', border: 'none', color: 'white', boxShadow: 'none' }}>
                      <Image src="/plus.png" width={200} height={50} alt="allbutton" />
                    </button>


                    {/* <Link href={`/${product.category}`}>
                        <Image  src="/plus.png" width={200} height={50} alt="allbutton"/>
                    </Link> */}
                    {/* <Link href={`/${product.category}`} >
                        <Image src="/buy.png" width={200} height={50} alt="allbutton"/>
                    </Link> */}
                    {/* <img src="/buy.png" alt="Click me" onClick={onBuy} /> */}

                  </div>
                </form>
                <hr className={styles.divider} />
                <div className={`${styles.content6} row `}>รายละเอียดสินค้า</div>
                <div className={`${styles.content7} row `}>ประเภท: {product.category}</div>
                <div className={`${styles.content8} row `}>ศิลปิน: {product.pgroup}</div>
                <div className={`${styles.content9} row `}>ค่าย: {product.ent}</div>

              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Header from "@/components/Header"
import Footer from "@/components/Footer"



export default function AllProduct() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // สร้างฟังก์ชัน fetchData เพื่อดึงข้อมูลสินค้าจาก API
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3341/api/bestsellerlimit');
        const data = await response.json();
        // เซ็ตข้อมูลสินค้าใน state
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
      // เรียกใช้งานฟังก์ชัน fetchData เมื่อ component โหลดครั้งแรก
      fetchData();    
  }, []);
  
  const [products1, setProducts1] = useState([]);
  useEffect(() => {
    // สร้างฟังก์ชัน fetchData เพื่อดึงข้อมูลสินค้าจาก API
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3341/api/bestsellerlimit/?q=Album');
        const data = await response.json();
        // เซ็ตข้อมูลสินค้าใน state
        setProducts1(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
      // เรียกใช้งานฟังก์ชัน fetchData เมื่อ component โหลดครั้งแรก
      fetchData();    
  }, []);
  
  const [products2, setProducts2] = useState([]);
  useEffect(() => {
    // สร้างฟังก์ชัน fetchData เพื่อดึงข้อมูลสินค้าจาก API
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3341/api/bestsellerlimit/?q=LightStick');
        const data = await response.json();
        // เซ็ตข้อมูลสินค้าใน state
        setProducts2(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
      // เรียกใช้งานฟังก์ชัน fetchData เมื่อ component โหลดครั้งแรก
      fetchData();    
  }, []);

  return (
    <>
      <Header/>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
          integrity="sha384-KyZXEAg3QhqLMpG8r+6/jtWnj2Iy4L6S40sMzCGZKhR8+O4JacR3f3EdfcC4JwJ6"
          crossOrigin="anonymous"
        />
      </Head>
      <div className={styles.container}>

        <div className={styles.head1}>
          <div className={styles.imageContainer}>
            <Image src="/logo1.png" width={250} height={244} alt="logo" />
            <h1 className={styles.title}>K-POP MERCHANDISE</h1>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.logoContainer}> 
            <Image src="/logo.png" width={100} height={30} alt="logo"/>
            <Image src="/logo.png" width={100} height={30} alt="logo"/>
            <Image src="/logo.png" width={100} height={30} alt="logo"/>
            <Image src="/logo.png" width={100} height={30} alt="logo"/>
            <Image src="/logo.png" width={100} height={30} alt="logo"/>
            <Image src="/logo.png" width={100} height={30} alt="logo"/>
            <Image src="/logo.png" width={100} height={30} alt="logo"/>
          </div>
        </div>


        <div className={styles.content1}>
          <div class="row"> 
            <div class="col-md-2">
						  <h2 class="mb-4 section-title" >BEST SELLER</h2>
						  <p class="mb-4">สินค้าขายดี</p>
              <Link href="/bestseller">
                <Image src="/allbutton.png" width={100} height={30} alt="allbutton"/>
              </Link>
					  </div>

            <div class="col-md-10">
            <div className="row d-flex justify-content-center">

            {products.map(product => (
              <div key={product.id} className="col-md-4">
                <div className="card mb-4 shadow-sm">
                <Link href={`/ProductDetail?id=${product.id}`}>
                  <Image src={product.img_url} className="card-img-top" width={221} height={177} alt={product.pname} />
                  </Link>

                  <div className="card-body" style={{ height: '9rem' }}>
                    <h5 className={styles.productname}>{product.pname}</h5>
                    <p className={styles.productprice}>Price: {product.price}</p>
                    {/* <p className="card-text">Stock: {product.stock}</p> */}
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
</div>
</div>


        <hr className={styles.divider}/>


        <div className={styles.content1}>
          <div className="row"> 
            <div class="col-md-2">
              <h2 class="mb-4 section-title">ALBUM</h2>
						  <p class="mb-4 color-text">สินค้าประเภทอัลบั้ม</p>
						  <Link href="/album">
                <Image src="/allbutton.png" width={100} height={30} alt="allbutton"/>
              </Link>
					  </div>

            <div class="col-md-10">
            <div className="row d-flex justify-content-center">

            {products1.map(product => (
              <div key={product.id} className="col-md-4">
                <div className="card mb-4 shadow-sm">
                <Link href={`/ProductDetail?id=${product.id}`}>
                  <Image src={product.img_url} className="card-img-top" width={221} height={177} alt={product.pname} />
                  </Link>

                  <div className="card-body" style={{ height: '9rem' }}>
                    <h5 className={styles.productname}>{product.pname}</h5>
                    <p className={styles.productprice}>Price: {product.price}</p>
                    {/* <p className="card-text">Stock: {product.stock}</p> */}
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
      </div>


        <hr className={styles.divider}/>


        <div className={styles.content1}>
          <div className="row"> 
            <div class="col-md-2">
              <h2 class="mb-4 section-title">LIGHT STICK</h2>
						  <p class="mb-4">สินค้าประเภทแท่งไฟ</p>
						  <Link href="/lightstick">
                <Image src="/allbutton.png" width={100} height={30} alt="allbutton"/>
              </Link>
					  </div>
            <div class="col-md-10">
            <div className="row d-flex justify-content-center">

            {products2.map(product => (
              <div key={product.id} className="col-md-4">
                <div className="card mb-4 shadow-sm">
                <Link href={`/ProductDetail?id=${product.id}`}>
                  <Image src={product.img_url} className="card-img-top" width={221} height={177} alt={product.pname} />
                  </Link>

                  <div className="card-body" style={{ height: '9rem' }}>
                    <h5 className={styles.productname}>{product.pname}</h5>
                    <p className={styles.productprice}>Price: {product.price}</p>
                    {/* <p className="card-text">Stock: {product.stock}</p> */}
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

          </div>
        </div>

      
    </div>
    <Footer />

    
    </>
    
  );
}




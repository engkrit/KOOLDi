import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Album.module.css";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Album() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // สร้างฟังก์ชัน fetchData เพื่อดึงข้อมูลสินค้าจาก API
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:3341/api/product");
        const data = await response.json();
        // เซ็ตข้อมูลสินค้าใน state
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    // เรียกใช้งานฟังก์ชัน fetchData เมื่อ component โหลดครั้งแรก
    fetchData();
  }, []);

  if (!products.length) return <p>Loading...</p>;

  // กลุ่มสินค้าตามหมวดหมู่
  const categories = {};
  products.forEach((product) => {
    if (!categories[product.category]) {
      categories[product.category] = [];
    }
    if (product.category == "LightStick") {
      categories[product.category].push(product);
    }
  });

  return (
    <>
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
        <div className={styles.head1}>
          <h1 className={styles.title}>LightStick</h1>

          <div className={`${styles.title2} row justify-content-center`}>
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0 d-flex justify-content-center">
              <a className={styles.product1} href="/bestseller">
                <Image
                  className={styles.pic1}
                  src="/bestseller.png"
                  width={104}
                  height={113}
                />
              </a>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0 d-flex justify-content-center">
              <a className={styles.product2} href="/album">
                <Image
                  className={styles.pic2}
                  src="/album.png"
                  width={80}
                  height={113}
                />
              </a>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0 d-flex justify-content-center">
              <a className={styles.product3} href="/lightstick">
                <Image
                  className={styles.pic3}
                  src="/lightstick.png"
                  width={101}
                  height={113}
                />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.logoContainer}>
            <Image src="/logo.png" width={100} height={30} alt="logo" />
            <Image src="/logo.png" width={100} height={30} alt="logo" />
            <Image src="/logo.png" width={100} height={30} alt="logo" />
            <Image src="/logo.png" width={100} height={30} alt="logo" />
            <Image src="/logo.png" width={100} height={30} alt="logo" />
            <Image src="/logo.png" width={100} height={30} alt="logo" />
            <Image src="/logo.png" width={100} height={30} alt="logo" />
          </div>
        </div>

        <div className={styles.content1}>
          <div className="row d-flex justify-content-center">
            {/* แสดงสินค้าตามหมวดหมู่ */}
            {Object.entries(categories).map(
              ([category, productsInCategory]) => (
                <div key={category} className={styles.category}>
                  <h2 className={styles.categoryTitle}></h2>
                  <div className="row">
                    {productsInCategory.map((product) => (
                      <div key={product.id} className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                          <Link href={`/ProductDetail?id=${product.id}`}>
                            <Image
                              src={product.img_url}
                              className="card-img-top"
                              width={221}
                              height={177}
                              alt={product.pname}
                            />
                          </Link>
                          <div className="card-body" style={{ height: "9rem" }}>
                            <h5 className="card-title">{product.pname}</h5>
                            <p className="card-text">Price: {product.price}</p>
                            {/* <p className="card-text">Stock: {product.stock}</p> */}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

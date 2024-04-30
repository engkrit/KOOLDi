import styles from "@/styles/DetailOrder.module.css";
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router';

  
export default function DetailOrder() {
  const router = useRouter();

  const handleOrderClick = () => {
    router.push('/cartsummary');
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
      <div className={styles.container}>
        <div className={styles.content1}>Order Summary</div>
        <div className={styles.content2}>ยอดรวม 3000 ฿</div>
        <div className={styles.content3}>ค่าจัดส่ง 50 ฿</div>
        <hr className={styles.divider}/>
        <div className={styles.content4}>รวม 3150 ฿</div>
        <div className={styles.content5}>
          <button className={styles.button} onClick={handleOrderClick}>สั่งซื้อสินค้า</button>
        </div>
      </div>
    </>
    
  );
}




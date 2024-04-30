import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/styles/ThankYou.module.css";
import Image from "next/image";
import { useRouter } from 'next/router';

export default function ThankYou() {
    const router = useRouter();

    const handleOrderClick = () => {
        router.push('/');
     };

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.head1}>
          <div className={styles.imageContainer}>
            <Image src="/logo1.png" width={250} height={244} alt="logo" />
          </div>
        </div>

        <div className={styles.thaktext}>
            <h1>ขอบคุณสำหรับคำสั่งซื้อ</h1>
            <p>เราขอขอบคุณที่ทำการสั่งซื้อสินค้ากับเรา</p>
        </div>
        <button className={styles.button} onClick={handleOrderClick}>กลับหน้าหลัก</button>
      </main>
      <Footer />
    </div>
  );
}



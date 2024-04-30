import Image from "next/image";
import styles from "@/styles/Address.module.css";
import Link from "next/link";
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router';


export default function Address() {
  const router = useRouter();

  const handleOrderClick = () => {
    router.push('/thankyou');
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
        <div className={styles.content1}>Shipping Address</div>
        <div className={styles.content2}>
          <div className={styles.roundedInputContaine}>
            <input type="text" name="nname" placeholder="ชื่อ" className={styles.roundedInput} />
            <input type="text" name="surname" placeholder="นามสกุล" className={styles.roundedInput} />
          </div>
          <div className={styles.roundedInputContaine}>
            <input type="text" name="address" placeholder="ที่อยู่" className={styles.roundedInput} />
          </div>
          <div className={styles.roundedInputContaine}>
            <input type="text" name="province" placeholder="จังหวัด" className={styles.roundedInput} />
            <input type="text" name="district" placeholder="อำเภอ" className={styles.roundedInput} />
            <input type="text" name="sub-district" placeholder="ตำบล" className={styles.roundedInput} />
          </div>
          <div className={styles.roundedInputContaine}>
            <input type="text" name="tel" placeholder="เบอร์โทร" className={styles.roundedInput} />
            <input type="text" name="p-number" placeholder="อีเมล์" className={styles.roundedInput} />
          </div>
        </div>
        <hr className={styles.divider}/>
        <div className={styles.content6}>Order Summary</div>
        <div className={styles.content7}>ยอดรวม 3000 ฿</div>
        <div className={styles.content8}>ค่าจัดส่ง 50 ฿</div>
        <hr className={styles.divider}/>
        <div className={styles.content9}>รวม 3150 ฿</div>
        <div className={styles.content10}>
            <button className={styles.button} onClick={handleOrderClick}>ยืนยันคำสั่งซิ้อ</button>
        </div>
      </div>
    </>
    
  );
}




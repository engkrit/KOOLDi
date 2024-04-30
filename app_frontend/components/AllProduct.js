import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router';


export default function AllProduct() {
  const router = useRouter();

  const handleOrderClick = () => {
    router.push('/bestseller');
  };

  const handleOrderClick1 = () => {
    router.push('/album');
  };

  const handleOrderClick2 = () => {
    router.push('/lightstick');
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

      <div className={styles.allcontent}>
        <div className={styles.content1}>
          <div className="row"> 
            <div class="col-md-12 col-lg-3 mb-5 mb-lg-0">
						  <h2 class="mb-4 section-title" >BEST SELLER</h2>
						  <p class="mb-4">สินค้าขายดี</p>
              <button className={styles.btallpd} onClick={handleOrderClick}>ALL PRODUCT</button>
					  </div>

            <div id="1" className={`${styles.product1} col-12 col-md-4 col-lg-3 mb-5 mb-md-0`}>
              <Link href="/ProductDetail?id=1">
                <Image className={styles.album1} src="/TW.png" width={221} height={177} />
              </Link>
              <p className={styles.productname}>TWICE - 13th Mini Album [With YOU-th]</p>
              <p className={styles.productprice}>฿ 725.81</p>
            </div>

            <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <Link href="/ProductDetail?id=16">
                <Image className={styles.stick2} src="/TW1.png" width={221} height={177} alt="icon" />
              </Link>
              <p className={styles.productname}>TWICE - Official Light Stick INFINITY [CANDYBONG ∞]</p>
              <p className={styles.productprice}>฿ 2,303.93</p>
            </div>

            <div id="3" className={`${styles.product3} col-12 col-md-4 col-lg-3 mb-5 mb-md-0`}>
              <Link href="/ProductDetail?id=3">
                <Image className={styles.album3} src="/NCT.png" width={221} height={177} alt="icon" />
              </Link>
              <p className={styles.productname}>NCT - Golden Age The 4th Album (Collecting Ver.)</p>
              <p className={styles.productprice}>฿ 383.99</p>
            </div>
          </div>
        </div>


        <hr className={styles.divider}/>


        <div className={styles.content2}>
          <div className="row"> 
            <div class="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 class="mb-4 section-title">ALBUM</h2>
						  <p class="mb-4 color-text">สินค้าประเภทอัลบั้ม</p>
						  <button className={styles.btallpd} onClick={handleOrderClick1}>ALL PRODUCT</button>
					  </div>

            <div id="1" className={`${styles.product1} col-12 col-md-4 col-lg-3 mb-5 mb-md-0`}>
              <Link href="/ProductDetail?id=1">
                <Image className={styles.album1} src="/TW.png" width={221} height={177} />
              </Link>
              <p className={styles.productname}>TWICE - 13th Mini Album [With YOU-th]</p>
              <p className={styles.productprice}>฿ 725.81</p>
            </div>

            <div id="2" className={`${styles.product2} col-12 col-md-4 col-lg-3 mb-5 mb-md-0`}>
              <Link href="/ProductDetail?id=2">
                <Image className={styles.album2} src="/7teen.png" width={221} height={177} alt="icon" />
              </Link>
              <p className={styles.productname}>SEVENTEEN - SEVENTEENTH HEAVEN 11th Mini Album (CARAT Ver.)</p>
              <p className={styles.productprice}>฿ 575.98</p>
            </div>

            <div id="3" className={`${styles.product3} col-12 col-md-4 col-lg-3 mb-5 mb-md-0`}>
              <Link href="/ProductDetail?id=3">
                <Image className={styles.album3} src="/NCT.png" width={221} height={177} alt="icon" />
              </Link>
              <p className={styles.productname}>NCT - Golden Age The 4th Album (Collecting Ver.)</p>
              <p className={styles.productprice}>฿ 383.99</p>
            </div>
          </div>
        </div>


        <hr className={styles.divider}/>


        <div className={styles.content3}>
          <div className="row"> 
            <div class="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 class="mb-4 section-title">LIGHT STICK</h2>
						  <p class="mb-4 color-text">สินค้าประเภทแท่งไฟ</p>
						  <button className={styles.btallpd} onClick={handleOrderClick2}>ALL PRODUCT</button>
					  </div>

            <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <Link href="/ProductDetail?id=17">
                <Image className={styles.stick2} src="/IU1.png" width={221} height={177} alt="icon" />
              </Link>
              <p className={styles.productname}>IU - Official Light Stick ver.3 [I-KE 3]</p>
              <p className={styles.productprice}>฿ 2,265.53</p>
            </div>

            <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <Link href="/ProductDetail?id=18">
                <Image className={styles.stick2} src="/SK_8.png" width={221} height={177} alt="icon" />
              </Link>
              <p className={styles.productname}>Stray Kids - Official Light Stick Ver. 2</p>
              <p className={styles.productprice}>฿ 2,188.73</p>
            </div>

            <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <Link href="/ProductDetail?id=19">
                <Image className={styles.stick2} src="/NJ1.png" width={221} height={177} alt="icon" />
              </Link>
              <p className={styles.productname}>NewJeans - Official Light Stick</p>
              <p className={styles.productprice}>฿ 2,380.72</p>
            </div>
          </div>
        </div>
      </div>
        

      
    </div>
    </>
    
  );
}



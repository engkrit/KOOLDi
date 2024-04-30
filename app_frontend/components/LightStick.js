import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/LightStick.module.css";
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function LightStick() {
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
          <h1 className={styles.title}>ALL</h1>

          <div className={`${styles.title2} row justify-content-center`}>
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0 d-flex justify-content-center">
              <a className={styles.product1} href="/bestseller">
                <Image className={styles.pic1} src="/bestseller.png" width={104} height={113}/>
						  </a>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0 d-flex justify-content-center">
              <a className={styles.product2} href="/album">
                <Image className={styles.pic2} src="/album.png" width={80} height={113}/>
						  </a>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0 d-flex justify-content-center">
              <a className={styles.product3} href="/lightstick">
                <Image className={styles.pic3} src="/lightstick1.png" width={101} height={113}/>
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

            <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <Link href="/ProductDetail?id=13">
                <Image className={styles.a1} src="/NCT1.png" width={221} height={177} />
              </Link>
              <p className={styles.productname}>NCT DREAM - Official Fanlight</p>
              <p className={styles.productprice}>฿ 2,111.93</p>
            </div>

            <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <Link href="/ProductDetail?id=14">
                <Image className={styles.a2} src="/TXT1.png" width={221} height={177} alt="icon" />
              </Link>
              <p className={styles.productname}>TXT (TOMORROW X TOGETHER) - Official Light Stick Ver. 2</p>
              <p className={styles.productprice}>฿ 2,380.72</p>
            </div>

            <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <Link href="/ProductDetail?id=15">
                <Image className={styles.a2} src="/PL.png" width={221} height={177} alt="icon" />
              </Link>
              <p className={styles.productname}>PLAVE - Official Light Stick</p>
              <p className={styles.productprice}>฿ 2,111.93</p>
            </div>
          </div>
        </div>

        <div className={styles.content2}>

          <div className="row d-flex justify-content-center">

            <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <Link href="/ProductDetail?id=16">
                <Image className={styles.stick2} src="/TW1.png" width={221} height={177} alt="icon" />
              </Link>
              <p className={styles.productname}>TWICE - Official Light Stick INFINITY [CANDYBONG ∞]</p>
              <p className={styles.productprice}>฿ 2,303.93</p>
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
          </div>
        </div>


        <div className={styles.content3}>

          <div className="row d-flex justify-content-center">

          <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <Link href="/ProductDetail?id=19">
                <Image className={styles.stick2} src="/NJ1.png" width={221} height={177} alt="icon" />
              </Link>
              <p className={styles.productname}>NewJeans - Official Light Stick</p>
              <p className={styles.productprice}>฿ 2,380.72</p>
            </div>

            <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <Link href="/ProductDetail?id=20">
                <Image className={styles.stick2} src="/AT.png" width={221} height={177} alt="icon" />
              </Link>
              <p className={styles.productname}>ATEEZ - Official Light Stick Ver.2 [Lightiny]</p>
              <p className={styles.productprice}>฿ 2,495.92</p>
            </div>

            <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <Link href="/ProductDetail?id=21">
                <Image className={styles.stick2} src="/BP.png" width={221} height={177} alt="icon" />
              </Link>
              <p className={styles.productname}>Blackpink - Official Light Stick Ver.2 [Hammerbong]</p>
              <p className={styles.productprice}>฿ 1,497.18</p>
            </div>
          </div>
        </div>

        <div className={styles.content4}>

          <div className="row d-flex justify-content-center">
            
            <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <Link href="/ProductDetail?id=22">
                <Image className={styles.stick2} src="/TS.png" width={221} height={177} alt="icon" />
              </Link>
              <p className={styles.productname}>TREASURE - Official Light Stick [TEU-LIGHT]</p>
              <p className={styles.productprice}>฿ 1,305.56</p>
            </div>

            <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <Link href="/ProductDetail?id=23">
                <Image className={styles.stick2} src="/P1.png" width={221} height={177} alt="icon" />
              </Link>
              <p className={styles.productname}>P1Harmony - Official Light Stick</p>
              <p className={styles.productprice}>฿ 3,839.88</p>
            </div>

            <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <Link href="/ProductDetail?id=24">
                <Image className={styles.stick2} src="/ZB1.png" width={221} height={177} alt="icon" />
              </Link>
              <p className={styles.productname}>ZB1 (ZEROBASEONE) - OFFICIAL LIGHT STICK</p>
              <p className={styles.productprice}>฿ 3,302.29</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/BestSeller.module.css";
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function BestSeller() {
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
                                <Image className={styles.pic1} src="/bestseller1.png" width={104} height={113} />
                            </a>
                        </div>

                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0 d-flex justify-content-center">
                            <a className={styles.product2} href="/album">
                                <Image className={styles.pic2} src="/album.png" width={80} height={113} />
                            </a>
                        </div>

                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0 d-flex justify-content-center">
                            <a className={styles.product3} href="/lightstick">
                                <Image className={styles.pic3} src="/lightstick.png" width={101} height={113} />
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

                <div className={styles.container}>
                
                    <div className={styles.content1}>

                        <div className="row d-flex justify-content-center">

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

<div className={styles.content2}>

<div className="row d-flex justify-content-center">

    <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
        <Link href="/ProductDetail?id=19">
            <Image className={styles.stick2} src="/NJ1.png" width={221} height={177} alt="icon" />
        </Link>
        <p className={styles.productname}>NewJeans - Official Light Stick</p>
        <p className={styles.productprice}>฿ 2,380.72</p>
    </div>

    <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
        <Link href="/ProductDetail?id=17">
            <Image className={styles.stick2} src="/IU1.png" width={221} height={177} alt="icon" />
        </Link>
        <p className={styles.productname}>IU - Official Light Stick ver.3 [I-KE 3]</p>
        <p className={styles.productprice}>฿ 2,265.53</p>
    </div>

    <div id="6" className={`${styles.product6} col-12 col-md-4 col-lg-3 mb-5 mb-md-0`}>
        <Link href="/ProductDetail?id=6">
            <Image className={styles.album6} src="/LSF.png" width={221} height={177} alt="icon" />
        </Link>
        <p className={styles.productname}>LE SSERAFIM - 3rd Mini Album EASY (COMPACT Ver.)</p>
        <p className={styles.productprice}>฿ 691.18</p>
    </div>

</div>
</div>


<div className={styles.content3}>

<div className="row d-flex justify-content-center">

    <div id="7" className={`${styles.product7} col-12 col-md-4 col-lg-3 mb-5 mb-md-0`}>
        <Link href="/ProductDetail?id=7">
            <Image className={styles.album7} src="/NJ.png" width={221} height={177} alt="icon" />
        </Link>
        <p className={styles.productname}>NewJeans - Get Up 2nd EP (Weverse Albums ver.)</p>
        <p className={styles.productprice}>฿ 364.79</p>
    </div>

    <div id="8" className={`${styles.product8} col-12 col-md-4 col-lg-3 mb-5 mb-md-0`}>
        <Link href="/ProductDetail?id=8">
            <Image className={styles.album8} src="/IU.png" width={221} height={177} alt="icon" />
        </Link>
        <p className={styles.productname}>IU - 6th Mini Album [The Winning] (Special Ver.)</p>
        <p className={styles.productprice}>฿ 794.70</p>
    </div>

    <div id="9" className={`${styles.product9} col-12 col-md-4 col-lg-3 mb-5 mb-md-0`}>
        <Link href="/ProductDetail?id=9">
            <Image className={styles.album9} src="/RVV.png" width={221} height={177} alt="icon" />
        </Link>
        <p className={styles.productname}>Red Velvet - The ReVe Festival 2022 : Birthday (Cake Ver.) [Limited Edition]</p>
        <p className={styles.productprice}>฿ 794.70</p>
    </div>

</div>
</div>

<div className={styles.content4}>

<div className="row d-flex justify-content-center">

    <div id="10" className={`${styles.product10} col-12 col-md-4 col-lg-3 mb-5 mb-md-0`}>
        <Link href="/ProductDetail?id=10">
            <Image className={styles.album10} src="/IL.png" width={221} height={177} alt="icon" />
        </Link>
        <p className={styles.productname}>ILLIT - The 1st Mini Album [SUPER REAL ME]</p>
        <p className={styles.productprice}>฿ 621.91</p>
    </div>

    <div id="11" className={`${styles.product11} col-12 col-md-4 col-lg-3 mb-5 mb-md-0`}>
        <Link href="/ProductDetail?id=11">
            <Image className={styles.album11} src="/AP.png" width={221} height={177} alt="icon" />
        </Link>
        <p className={styles.productname}>aespa - Drama 4th Mini Album (Drama Ver.)</p>
        <p className={styles.productprice}>฿ 610.62</p>
    </div>

    <div id="12" className={`${styles.product12} col-12 col-md-4 col-lg-3 mb-5 mb-md-0`}>
        <Link href="/ProductDetail?id=12">
            <Image className={styles.album12} src="/KOL.png" width={221} height={177} alt="icon" />
        </Link>
        <p className={styles.productname}>KISS OF LIFE - Born to be XX 2nd mini album</p>
        <p className={styles.productprice}>฿ 633.58</p>
    </div>
</div>
</div>

                </div>

                

            </div>
        </>
    )
}

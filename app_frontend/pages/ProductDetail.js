import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from "@/styles/Detail.module.css";
import Link from "next/link";
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';


export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const getProductData = (productId) => {
    const productData = {
      1: {
        name: 'TWICE - 13th Mini Album [With YOU-th]',
        price: '฿ 725.81',
        imageUrl: '/TW.png',
        type: 'ALBUM',
        thtype: 'อัลบั้ม',
        artist: 'Twice',
        company: 'JYP Entertainment',
      },
      2: {
        name: 'SEVENTEEN - SEVENTEENTH HEAVEN 11th Mini Album (CARAT Ver.)',
        price: '฿ 575.98',
        imageUrl: '/7teen.png',
        type: 'ALBUM',
        thtype: 'อัลบั้ม',
        artist: 'Seventeen',
        company: 'Pledis',
      },
      3: {
        name: 'NCT - Golden Age The 4th Album (Collecting Ver.)',
        price: '฿ 383.99',
        imageUrl: '/NCT.png',
        type: 'ALBUM',
        thtype: 'อัลบั้ม',
        artist: 'NCT',
        company: 'SM Entertainment',
      },
      4: {
        name: 'TXT (TOMORROW X TOGETHER) - The Name Chapter: FREEFALL (Gravity ver.)',
        price: '฿ 383.61',
        imageUrl: '/TXT.png',
        type: 'ALBUM',
        thtype: 'อัลบั้ม',
        artist: 'TOMORROW X TOGETHER',
        company: 'Big Hit Entertainment',
      },
      5: {
        name: 'Stray Kids - 5-STAR The 3rd Album [Standard Edition]',
        price: '฿ 583.51',
        imageUrl: '/SK.png',
        type: 'ALBUM',
        thtype: 'อัลบั้ม',
        artist: 'Stray Kids',
        company: 'JYP Entertainment',
      },
      6: {
        name: 'LE SSERAFIM - 3rd Mini Album EASY (COMPACT Ver.)',
        price: '฿ 691.18',
        imageUrl: '/LSF.png',
        type: 'ALBUM',
        thtype: 'อัลบั้ม',
        artist: 'LE SSERAFIM',
        company: 'Source Music',
      },
      7: {
        name: 'NewJeans - Get Up 2nd EP (Weverse Albums ver.)',
        price: '฿ 364.79',
        imageUrl: '/NJ.png',
        type: 'ALBUM',
        thtype: 'อัลบั้ม',
        artist: 'NewJeans',
        company: 'ADOR',
      },
      8: {
        name: 'IU - 6th Mini Album [The Winning] (Special Ver.)',
        price: '฿ 794.70',
        imageUrl: '/IU.png',
        type: 'ALBUM',
        thtype: 'อัลบั้ม',
        artist: 'IU',
        company: 'EDAM',
      },
      9: {
        name: 'Red Velvet - The ReVe Festival 2022 : Birthday (Cake Ver.) [Limited Edition]',
        price: '฿ 794.70',
        imageUrl: '/RVV.png',
        type: 'ALBUM',
        thtype: 'อัลบั้ม',
        artist: 'Red Velvet',
        company: 'SM Entertainment',
      },
      10: {
        name: 'ILLIT - The 1st Mini Album [SUPER REAL ME]',
        price: '฿ 621.91',
        imageUrl: '/IL.png',
        type: 'ALBUM',
        thtype: 'อัลบั้ม',
        artist: 'ILLIT',
        company: 'HYBE',
      },
      11: {
        name: 'aespa - Drama 4th Mini Album (Drama Ver.)',
        price: '฿ 610.62',
        imageUrl: '/AP.png',
        type: 'ALBUM',
        thtype: 'อัลบั้ม',
        artist: 'aespa',
        company: 'SM Entertainment',
      },
      12: {
        name: 'KISS OF LIFE - Born to be XX 2nd mini album',
        price: '฿ 633.58',
        imageUrl: '/KOF.png',
        type: 'ALBUM',
        thtype: 'อัลบั้ม',
        artist: 'KISS OF LIFE',
        company: 'S2 Entertainment',
      },

      13: {
        name: 'NCT DREAM - Official Fanlight',
        price: '฿ 2,111.93',
        imageUrl: '/NCT1.png',
        type: 'LIGHT STICK',
        thtype: 'แท่งไฟ',
        artist: 'NCT',
        company: 'SM Entertainment',
      },
      14: {
        name: 'TXT (TOMORROW X TOGETHER) - Official Light Stick Ver. 2',
        price: '฿ 2,380.72',
        imageUrl: '/TXT1.png',
        type: 'LIGHT STICK',
        thtype: 'แท่งไฟ',
        artist: 'TOMORROW X TOGETHER',
        company: 'Big Hit Entertainment',
      },
      15: {
        name: 'PLAVE - Official Light Stick',
        price: '฿ 2,111.93',
        imageUrl: '/PL.png',
        type: 'LIGHT STICK',
        thtype: 'แท่งไฟ',
        artist: 'PLAVE',
        company: 'VLAST',
      },
      16: {
        name: 'TWICE - Official Light Stick INFINITY [CANDYBONG ∞]',
        price: '฿ 2,303.93',
        imageUrl: '/TW1.png',
        type: 'LIGHT STICK',
        thtype: 'แท่งไฟ',
        artist: 'Twice',
        company: 'JYP Entertainment',
      },
      17: {
        name: 'IU - Official Light Stick ver.3 [I-KE 3]',
        price: '฿ 2,265.53',
        imageUrl: '/IU1.png',
        type: 'LIGHT STICK',
        thtype: 'แท่งไฟ',
        artist: 'IU',
        company: 'EDAM',
      },
      18: {
        name: 'Stray Kids - Official Light Stick Ver. 2',
        price: '฿ 2,188.73',
        imageUrl: '/SK_8.png',
        type: 'LIGHT STICK',
        thtype: 'แท่งไฟ',
        artist: 'Stray Kids',
        company: 'JYP Entertainment',
      },
      19: {
        name: 'NewJeans - Official Light Stick',
        price: '฿ 72,380.72',
        imageUrl: '/NJ1.png',
        type: 'LIGHT STICK',
        thtype: 'แท่งไฟ',
        artist: 'NewJeans',
        company: 'ADOR',
      },
      20: {
        name: 'ATEEZ - Official Light Stick Ver.2 [Lightiny]',
        price: '฿ 2,495.92',
        imageUrl: '/AT.png',
        type: 'LIGHT STICK',
        thtype: 'แท่งไฟ',
        artist: 'ATEEZ',
        company: 'KQ Entertainment',
      },
      21: {
        name: 'Blackpink - Official Light Stick Ver.2 [Hammerbong]',
        price: '฿ 1,497.18',
        imageUrl: '/BP.png',
        type: 'LIGHT STICK',
        thtype: 'แท่งไฟ',
        artist: 'Blackpink',
        company: 'YG Entertainment',
      },
      22: {
        name: 'TREASURE - Official Light Stick [TEU-LIGHT]',
        price: '฿ 1,305.56',
        imageUrl: '/TS.png',
        type: 'LIGHT STICK',
        thtype: 'แท่งไฟ',
        artist: 'Blackpink',
        company: 'YG Entertainment',
      },
      23: {
        name: 'P1Harmony - Official Light Stick',
        price: '฿ 3,302.29',
        imageUrl: '/P1.png',
        type: 'LIGHT STICK',
        thtype: 'แท่งไฟ',
        artist: 'P1Harmony',
        company: 'FNC Entertainment',
      },
      24: {
        name: 'ZB1 (ZEROBASEONE) - OFFICIAL LIGHT STICK',
        price: '฿ 3,302.29',
        imageUrl: '/ZB1.png',
        type: 'LIGHT STICK',
        thtype: 'แท่งไฟ',
        artist: 'ZEROBASEONE',
        company: 'WAKEONE Entertainment',
      },

    };

    return productData[productId];
  };

  const product = getProductData(id);

const ResponsiveImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const handleOrderClick1 = () => {
  router.push('/maincart');
};

const handleOrderClick2 = () => {
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

        <div className={styles.content}>
          <div className={`${styles.allcontent} row `}> 
            <div className={`${styles.product} col-sm-6 mb-5 mb-lg-0 `}>
                <ResponsiveImage src={product.imageUrl} width={1000} height={1000} alt={product.name} />
			      </div>
            <div class={`${styles.content0} col-sm-6 mb-5 mb-lg-0 `}>
                <div className={`${styles.content1} row `}>{product.type}</div>
                <div className={`${styles.content2} row `}>{product.name}</div>
                <div className={`${styles.content3} row `}>{product.price}</div>
                <div className={`${styles.content4} row `}>จำนวน</div>
                <div className={`${styles.quantityContainer} input-group mb-3 d-flex align-items-center`}>
                    <div className="input-group-prepend">
                        <button className="btn btn-outline-[007C1B] decrease" type="button">−</button>
                    </div>
                    <input type="text" className="form-control text-center quantity-amount" value="1" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-[007C1B] increase" type="button">+</button>
                    </div>
                </div>
                <div className={styles.content5} >
                  <button className={styles.btbuy} onClick={handleOrderClick1}>เพิ่มลงตะกร้าสินค้า</button>
                  <button className={styles.btcart} onClick={handleOrderClick2}>สั่งซื้อสินค้า</button>
                </div>
                <hr className={styles.divider}/>
                <div className={`${styles.content6} row `}>รายละเอียดสินค้า</div>
                <div className={`${styles.content7} row `}>ประเภท: {product.thtype}</div>
                <div className={`${styles.content8} row `}>ศิลปิน: {product.artist}</div>
                <div className={`${styles.content9} row `}>ค่าย: {product.company}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

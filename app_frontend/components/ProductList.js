import Image from "next/image";
import styles from "@/styles/Product.module.css";
import Link from "next/link";
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';


import { useState } from 'react';

export default function ProductList() {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

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
            <div className={`${styles.container} row`}>
                <div className="col-sm-3">
                    <div className={styles.responsiveImageWrapper}>
                        <Image className={styles.ImageItem} src="/stick1.png" layout="responsive" width={150} height={150} />
                    </div>
                </div>
                <div className="col-sm-8">
                    <div className={styles.content1}>TWICE Official Light Stick ver.3</div>
                    <div className={styles.content2}>฿ 3000</div>
                    <div className={`${styles.quantityContainer} input-group mb-3 d-flex align-items-center`}>
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-[007C1B] decrease" type="button" onClick={decreaseQuantity}>−</button>
                        </div>
                        <input type="text" className="form-control text-center quantity-amount" value={quantity} placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" readOnly />
                        <div className="input-group-append">
                            <button className="btn btn-outline-[007C1B] increase" type="button" onClick={increaseQuantity}>+</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-1">
                    <Link href="/album">
                        <Image src="/delete.png" width={25} height={25} />
                    </Link>
                </div>
            </div>
        </>
    )
}

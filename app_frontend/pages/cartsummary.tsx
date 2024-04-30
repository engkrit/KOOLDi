import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductList from "@/components/ProductList"
import styles from "@/styles/CartSummary.module.css";
import Address from "@/components/Address"

export default function Detailproduct(){
  return(
    <div>
      <Header/>
        <div className={styles.productsContainer}>
          <div className={styles.producitem}>
            <br></br>
            <br></br>
            <ProductList/>
          </div>
          <div className={styles.producdata}>
            <Address/>
          </div>
        </div>
      <Footer />
    </div>
  );
}
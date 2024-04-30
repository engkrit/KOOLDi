import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DetailOrder from "@/components/DetailOrder"
import ProductList from "@/components/ProductList"
import styles from "@/styles/MainCart.module.css";

export default function MainCart(){
  return(
    <div>
      <Header/>
      <div className={styles.productsContainer}>
        <div className={`${styles.producitem} ${styles.center}`}>
          <ProductList/>
        </div>
        <div className={`${styles.producdata} ${styles.center}`}>
          <DetailOrder/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

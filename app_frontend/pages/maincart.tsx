import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DetailOrder from "@/components/DetailOrder"
import ProductList from "@/components/ProductList"
import styles from "@/styles/MainCart.module.css";


export default function Detailproduct(){

  
  return(
    <div>
      <Header/>
        <div className={styles.productsContainer}>
        <div className={styles.producitem}>
            <ProductList/>

          </div>
          <div className={styles.producdata}>
            <DetailOrder/>
          </div>
        </div>
      <Footer />
    </div>
  );
}
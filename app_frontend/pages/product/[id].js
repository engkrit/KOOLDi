// import Center from "@/components/Center";
// import Header from "@/components/Header";
// import Title from "@/components/Title";


// export default function ProductPage({product}) {
//     return (
//         <>
//             <Header/>
//             <Center>
//                 <Title></Title>
//             </Center>
//         </>
//     )
// }

// export async function getServerSideProps() {
//     await mongooseConnect();

//     const product = await ProductPage.findById(context);
//     return {
//         props: {
//             product: product,
//         }
//     }
// }


// pages/ProductDetail.js

import { useRouter } from 'next/router';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  // เพิ่มข้อมูลสินค้า (ตัวอย่าง)
  const getProductData = (productId) => {
    // นี่คือตัวอย่างข้อมูลสินค้า ให้แทนที่ด้วยข้อมูลจริง
    const productData = {
      1: {
        name: 'TWICE - 13th Mini Album [With YOU-th]',
        price: '฿ 725.81',
      },
      2: {
        name: 'SEVENTEEN - SEVENTEENTH HEAVEN 11th Mini Album (CARAT Ver.)',
        price: '฿ 575.98',
      },
      3: {
        name: 'TWICE - 13th Mini Album [With YOU-th]',
        price: '฿ 725.81',
      },
      4: {
        name: 'SEVENTEEN - SEVENTEENTH HEAVEN 11th Mini Album (CARAT Ver.)',
        price: '฿ 575.98',
      },
      5: {
        name: 'TWICE - 13th Mini Album [With YOU-th]',
        price: '฿ 725.81',
      },
      6: {
        name: 'SEVENTEEN - SEVENTEENTH HEAVEN 11th Mini Album (CARAT Ver.)',
        price: '฿ 575.98',
      },
      7: {
        name: 'TWICE - 13th Mini Album [With YOU-th]',
        price: '฿ 725.81',
      },
      8: {
        name: 'SEVENTEEN - SEVENTEENTH HEAVEN 11th Mini Album (CARAT Ver.)',
        price: '฿ 575.98',
      },
      9: {
        name: 'TWICE - 13th Mini Album [With YOU-th]',
        price: '฿ 725.81',
      },
      10: {
        name: 'SEVENTEEN - SEVENTEENTH HEAVEN 11th Mini Album (CARAT Ver.)',
        price: '฿ 575.98',
      },
      11: {
        name: 'TWICE - 13th Mini Album [With YOU-th]',
        price: '฿ 725.81',
      },
      12: {
        name: 'SEVENTEEN - SEVENTEENTH HEAVEN 11th Mini Album (CARAT Ver.)',
        price: '฿ 575.98',
      },

      13: {
        name: 'TWICE - 13th Mini Album [With YOU-th]',
        price: '฿ 725.81',
      },
      14: {
        name: 'SEVENTEEN - SEVENTEENTH HEAVEN 11th Mini Album (CARAT Ver.)',
        price: '฿ 575.98',
      },
      15: {
        name: 'TWICE - 13th Mini Album [With YOU-th]',
        price: '฿ 725.81',
      },
      16: {
        name: 'SEVENTEEN - SEVENTEENTH HEAVEN 11th Mini Album (CARAT Ver.)',
        price: '฿ 575.98',
      },
      17: {
        name: 'TWICE - 13th Mini Album [With YOU-th]',
        price: '฿ 725.81',
      },
      18: {
        name: 'SEVENTEEN - SEVENTEENTH HEAVEN 11th Mini Album (CARAT Ver.)',
        price: '฿ 575.98',
      },
      19: {
        name: 'TWICE - 13th Mini Album [With YOU-th]',
        price: '฿ 725.81',
      },
      20: {
        name: 'SEVENTEEN - SEVENTEENTH HEAVEN 11th Mini Album (CARAT Ver.)',
        price: '฿ 575.98',
      },
      21: {
        name: 'TWICE - 13th Mini Album [With YOU-th]',
        price: '฿ 725.81',
      },
      22: {
        name: 'SEVENTEEN - SEVENTEENTH HEAVEN 11th Mini Album (CARAT Ver.)',
        price: '฿ 575.98',
      },
      23: {
        name: 'TWICE - 13th Mini Album [With YOU-th]',
        price: '฿ 725.81',
      },
      24: {
        name: 'SEVENTEEN - SEVENTEENTH HEAVEN 11th Mini Album (CARAT Ver.)',
        price: '฿ 575.98',
      },

      // เพิ่มข้อมูลสินค้าอื่น ๆ ตามต้องการ
    };

    return productData[productId];
  };

  const product = getProductData(id);

  return (
    <div>
      <h1>Product Detail</h1>
      <p>Product Name: {product ? product.name : 'Loading...'}</p>
      <p>Product Price: {product ? product.price : 'Loading...'}</p>
    </div>
  );
}

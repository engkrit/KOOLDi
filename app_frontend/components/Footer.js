// import Link from "next/link";
// import styled from "styled-components";
// import { useContext, useState } from "react";
// // import { CartContext } from "@/components/CartContext";
// // import BarsIcon from "@/components/icons/Bars";
// import Image from "next/image";

// const StyledFooter = styled.footer`
//   background-color: #007C1B;
//   color: white;
//   padding: 50px 50px 50px 50px;
//   height: 100%;

// `;

// const StyledLogo = styled(Link)`
//   color: white;
//   text-decoration: none;
//   display: flex;
//   align-items: center;
// `;

// const StyledSection = styled.div`
//   flex: 1;
//   margin-right: 20px;
//   h3 {
//     font-size: 20px;
//     margin-bottom: 10px;
//   }
//   p {
//     font-size: 16px;
//     margin: 0;
//   }
// `;

// const StyledCreateInfo = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 20px;
//   margin-top: 20px;
// `;

// const StyledImage = styled.div`
//   display: flex;
//   gap: 20px; /* กำหนดระยะห่างระหว่างภาพ */
// `;

// const ImageWrapper = styled.div`
//   margin-right: 20px; /* กำหนดระยะห่างขวาสุดของรูปภาพ */
// `;


// const Footer = () => {
//     // const { cartProducts } = useContext(CartContext);
//     const [mobileNavActive, setMobileNavActive] = useState(false);

//     return (
//         <StyledFooter>
//             <StyledCreateInfo>
//                 <StyledSection>
//                     <StyledLogo href="/">
//                         <Image src="/logo.png" width={140} height={45} alt="logo" />
//                     </StyledLogo>
//                     <h3>ร้านออนไลน์ขายสินค้าเกี่ยวกับ K-POP/ <br />อัลบั้ม/แท่งไฟ สั่งง่าย ส่งเร็ว</h3>
//                 </StyledSection>
//                 <StyledSection>
//                     <h3>MENU</h3>
//                     <p>Home</p>
//                     <p>Product</p>
//                     <p>Cart</p>
//                 </StyledSection>
//                 <StyledSection>
//                     <h3>BUSINESS HOURS</h3>
//                     <p>จันทร์ - ศุกร์</p>
//                     <p>9:00 น. - 16:00 น.</p>
//                 </StyledSection>
//                 <StyledSection>
//                     <h3>CONTACT US</h3>
//                     <p>E-mail: kooldi@gmail.com</p>
//                     <p>Phone: 000-000-0000</p>
//                 </StyledSection>
//                 <StyledSection>
//                     <h3>DELIVERY SERVICE</h3>
//                     <StyledImage>
//                         <ImageWrapper>
//                             <Image src="/kerry.png" width={60} height={45} alt="logo" />
//                         </ImageWrapper>
//                         <ImageWrapper>
//                             <Image src="/flash.png" width={60} height={45} alt="logo" />
//                         </ImageWrapper>
//                         <ImageWrapper>
//                             <Image src="/thaipost.png" width={60} height={45} alt="logo" />
//                         </ImageWrapper>
//                     </StyledImage>
//                 </StyledSection>
//             </StyledCreateInfo>
//         </StyledFooter>
//     );
// };

// export default Footer;



import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";
import Image from "next/image";

const StyledFooter = styled.footer`
  background-color: #007C1B;
  color: white;
  padding: 50px 20px; /* ปรับ padding ให้เหมาะสม */
`;

const StyledLogo = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const StyledCreateInfo = styled.div`
  display: flex;
  flex-wrap: wrap; /* เพิ่ม flex-wrap เพื่อให้รองรับการขนาดหน้าจอเล็กลง */
  justify-content: space-between;
  gap: 20px;
`;

const StyledSection = styled.div`
  flex: 1;
  margin-bottom: 30px; /* ปรับระยะห่างด้านล่างของแต่ละส่วน */
  h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
    margin: 0;
  }
`;

const StyledImage = styled.div`
  display: flex;
  gap: 20px; /* กำหนดระยะห่างระหว่างภาพ */
`;

const ImageWrapper = styled.div`
  margin-right: 20px; /* กำหนดระยะห่างขวาสุดของรูปภาพ */
`;


const Footer = () => {

    return (
        <StyledFooter>
            <StyledCreateInfo>
                <StyledSection>
                    <StyledLogo href="/">
                        <Image src="/logo.png" width={140} height={45} alt="logo" />
                    </StyledLogo>
                    <p>ร้านออนไลน์ขายสินค้าเกี่ยวกับ<br />เกี่ยวกับ K-POP/อัลบั้ม/<br /> แท่งไฟ สั่งง่าย ส่งเร็ว</p>
                </StyledSection>
                <StyledSection>
                    <h3>MENU</h3>
                    <p>Home</p>
                    <p>Cart</p>
                </StyledSection>
                <StyledSection>
                    <h3>BUSINESS HOURS</h3>
                    <p>จันทร์ - ศุกร์</p>
                    <p>9:00 น. - 16:00 น.</p>
                </StyledSection>
                <StyledSection>
                    <h3>CONTACT US</h3>
                    <p>E-mail: kooldi@gmail.com</p>
                    <p>Phone: 000-000-0000</p>
                </StyledSection>
                <StyledSection>
                    <h3>DELIVERY SERVICE</h3>
                    <StyledImage>
                        <ImageWrapper>
                            <Image src="/kerry.png" width={60} height={45} alt="logo" />
                        </ImageWrapper>
                        <ImageWrapper>
                            <Image src="/flash.png" width={60} height={45} alt="logo" />
                        </ImageWrapper>
                        <ImageWrapper>
                            <Image src="/thaipost.png" width={60} height={45} alt="logo" />
                        </ImageWrapper>
                    </StyledImage>
                </StyledSection>
            </StyledCreateInfo>
        </StyledFooter>
    );
};

export default Footer;

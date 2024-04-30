import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

const StyledFooter = styled.footer`
  background-color: #007C1B;
  color: white;
  padding: 50px 20px; /* ปรับ padding ให้เหมาะสม */
  font-family: "JetBrains Mono", monospace;
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
  gap: 20px; 
`;

const ImageWrapper = styled.div`
  margin-right: 20px; 
  border-radius: 10px; 
  overflow: hidden;
`;

const Navcontainer = styled.div`
  display: flex;
  flex-direction: column; 
`;
const NavLink = styled.a`
  color: white;
  text-decoration: none;
`;


export default function Footer() {
  return (
    <StyledFooter>
        <StyledCreateInfo>
            <StyledSection>
                <StyledLogo href="/">
                    <Image src="/logo.png" width={140} height={45} alt="logo" />
                </StyledLogo>
                <p>ร้านออนไลน์ขายสินค้า <br />เกี่ยวกับ K-POP/อัลบั้ม/<br />แท่งไฟ สั่งง่าย ส่งเร็ว</p>
            </StyledSection>
            <StyledSection>
                <h3>MENU</h3>
                <Navcontainer>
                  <NavLink href={"/"}>HOME</NavLink>
                  <NavLink href={"/maincart"}>CART</NavLink>
                </Navcontainer>
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
                        <Image src="/Kerry.png" width={60} height={45} alt="logo" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <Image src="/Flash.png" width={60} height={45} alt="logo" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <Image src="/thpost.png" width={60} height={45} alt="logo" />
                    </ImageWrapper>
                </StyledImage>
            </StyledSection>
        </StyledCreateInfo>
    </StyledFooter>
);
}



    


import { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";

const StyleNav = styled.nav`
  background-color: #007c1b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  flex-wrap: wrap;
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const Navcontainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 30px;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-family: "JetBrains Mono", monospace;
  font-size: 20px;
  margin-right: 20px;
`;

const UserName = styled.nav`
  color: white;
  font-weight: bold;
  border-radius: 60px;
  background-color: #2ecc71;
  padding: 10px;
`;

const SearchButton = styled.button`
  border: none;
  cursor: pointer;
`;

const Cartcontainer = styled.div`
  display: flex;
  align-items: center;
`;

const CartIcon = styled(Image)`
  align-items: center;
`;

const CartLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-family: "JetBrains Mono", monospace;
  font-weight: bold;
  font-style: normal;
  font-size: 15px;
  display: flex;
  align-items: center;
`;

const DropDownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropDownButton = styled.button`
  background-color: #2ecc71;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

const DropDownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #b8d2c3;
  padding: 10px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const DropDownItem = styled.a`
  color: white;
  text-decoration: none;
  front
  padding: 5px 10px;
  display: block;
  &:hover {
    background-color: #B8D2C3;
  }
`;

export default function Header() {
  const router = useRouter();
  const [info, setInfo] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // สถานะของการล็อกอิน

  useEffect(() => {
    let token = localStorage.getItem("jwt_access");
    if (token) {
      // ถ้ามี token ใน localStorage แสดงว่าผู้ใช้ล็อกอินแล้ว
      setIsLoggedIn(true);
      fetchUserInfo(token); // เรียกฟังก์ชันเพื่อเรียกข้อมูลผู้ใช้
    }
  }, []);

  const fetchUserInfo = (token) => {
    fetch(`http://127.0.0.1:3342/api/myinfo`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
      });
  };

  const handleSignOut = () => {
    localStorage.removeItem("jwt_access");
    setIsLoggedIn(false); // เมื่อออกจากระบบ ตั้งค่า isLoggedIn เป็น false
    router.push("/"); // ทำการเปลี่ยนเส้นทางไปยังหน้าหลัก
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <StyleNav>
      <LogoLink href={"/"}>
        <Image
          src="/logo.png"
          width={isMobile ? 120 : 170}
          height={isMobile ? 32 : 45}
        />
      </LogoLink>

      <Navcontainer>
        {/* <NavLink href={"/"}>Wawiii</NavLink> */}
        <NavLink href={"/"}>HOME</NavLink>
        <CartLink href={"/maincart"}>
          <CartIcon
            src="/cart.png"
            width={isMobile ? 20 : 30}
            height={isMobile ? 20 : 30}
          />
        </CartLink>
        {isLoggedIn ? ( // ตรวจสอบสถานะการล็อกอินเพื่อแสดงปุ่ม Sign in หรือชื่อผู้ใช้
          <DropDownContainer>
            <DropDownButton onClick={handleToggle}>
              {info?.data?.firstname}
            </DropDownButton>
            <DropDownMenu isOpen={isOpen}>
              <DropDownItem onClick={handleSignOut}>Sign Out</DropDownItem>
            </DropDownMenu>
          </DropDownContainer>
        ) : (
          <NavLink href={"/signin"}>Sign In</NavLink>
        )}
      </Navcontainer>

      <Cartcontainer>{/* รายการสินค้าในตะกร้า */}</Cartcontainer>
    </StyleNav>
  );
}

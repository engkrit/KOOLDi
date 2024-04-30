import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from 'next/router';

const StyleNav = styled.nav`
  background-color: #007C1B;
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
  font-family: "JetBrains Mono", monospace;
  font-weight: bold;
  border-radius: 10px;
  background-color: #E67E22;
  padding: 10px 10px 10px 10px;
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

const LoginButton = styled.button`
  color: #fff;
  text-decoration: none;
  font-family: "JetBrains Mono", monospace;
  font-weight: bold;
  font-size: 15px;
  padding: 10px 10px 10px 10px;
  border: none;
  border-radius: 10px;
  background-color: #E67E22;
  cursor: pointer;
`;

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [username, setUsername] = useState(""); 

  const router = useRouter();

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogin = () => {
    router.push('/signin');
    setIsLoggedIn(true);
    setUsername("Wawiii_0203"); 
  };

  return (
    <StyleNav>
      <LogoLink href={"/"}>
        <Image src="/logo.png" width={isMobile ? 120 : 170} height={isMobile ? 32 : 45} />
      </LogoLink>

      <Navcontainer>
        <NavLink href={"/"}>HOME</NavLink>
        <CartLink href={"/maincart"}>
          <CartIcon src="/cart.png" width={isMobile ? 20 : 30} height={isMobile ? 20 : 30} />
        </CartLink>
        {isLoggedIn ? ( 
          <UserName>{username}</UserName> 
        ) : (
          <LoginButton onClick={handleLogin}>SIGN-IN</LoginButton> 
        )}
      </Navcontainer>
    </StyleNav>
  );
}
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Check_Login() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    // const [profile, setInfo] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // เพิ่มสถานะของการล็อกอิน
    useEffect(() => {
      let token = localStorage.getItem("jwt_access");
      if (token) {
        // ถ้ามี token ใน localStorage แสดงว่าผู้ใช้ล็อกอินแล้ว
        setIsLoggedIn(true);
        // fetchUserInfo(token); // เรียกฟังก์ชันเพื่อเรียกข้อมูลผู้ใช้
      } else { 
        window.location.href = `/signin`;
      }
    }, []);
  
    
}
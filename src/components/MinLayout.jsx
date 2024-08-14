import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import WOW from "wowjs";

const Layout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Khởi tạo lại WOW.js để các hiệu ứng hoạt động khi thay đổi url
    new WOW.WOW().init();
  }, [location]);

  useEffect(() => {
    // Cập nhật tiêu đề của trang theo URL hiện tại
    const path = location.pathname;
    let title = "Default Title";

    switch (path) {
      case "/login":
        title = "Login - Gardener";
        break;
      case "/register":
        title = "Register - Gardener";
        break;
      case "/404":
        title = "404 Page - Gardener";
        break;
      default:
        title = "Gardener";
    }

    document.title = title;
  }, [location]);

  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Layout;

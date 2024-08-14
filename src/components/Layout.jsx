import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import WOW from "wowjs";

import Header from "./Header";
import Footer from "./Footer";

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
      case "/about":
        title = "About Us - Gardener";
        break;
      case "/service":
        title = "Our Services - Gardener";
        break;
      case "/project":
        title = "Our Projects - Gardener";
        break;
      case "/feature":
        title = "Features - Gardener";
        break;
      case "/cart":
        title = "Cart - Gardener";
        break;
      case "/checkout":
        title = "Checkout - Gardener";
        break;
      case "/account":
        title = "Account - Gardener";
        break;
      case "/login":
        title = "Login - Gardener";
        break;
      case "/register":
        title = "Register - Gardener";
        break;
      case "/404":
        title = "404 Page - Gardener";
        break;
      case "/contact":
        title = "Contact Us - Gardener";
        break;
      case "/":
        title = "Home - Gardener";
        break;
      default:
        title = "Gardener";
    }

    document.title = title;
  }, [location]);

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

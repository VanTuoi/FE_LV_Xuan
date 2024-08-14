import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useStore from "../store";

const Header = () => {
  const location = useLocation(); // Lấy location hiện tại
  const [visible, setVisible] = useState(false);
  const [sticky, setSticky] = useState(false);

  const cartQuantity = useStore((state) => state.cartQuantity); // Biến toàn cục

  useEffect(() => {
    const handleScroll = () => {
      const topbar = document.getElementById("Topbar");

      if (window.scrollY > 1) {
        setSticky(true);
      } else {
        setSticky(false);
      }

      if (window.scrollY > 50) {
        setVisible(true);
        topbar.style.transform = "translateY(-100%)"; // Ẩn Topbar bằng cách dịch chuyển lên trên
        topbar.style.transition = "transform 0.5s ease"; // Thêm hiệu ứng mượt mà
      } else {
        setVisible(false);
        topbar.style.transform = "translateY(0)";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header style={{ position: "relative" }}>
      <div className="container-fluid bg-dark text-light px-0 py-0" id="Topbar">
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center me-4">
              <span className="fa fa-phone-alt me-2"></span>
              <span>+012 345 6789</span>
            </div>
            <div className="h-100 d-inline-flex align-items-center">
              <span className="far fa-envelope me-2"></span>
              <span>info@example.com</span>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center mx-n2">
              <span>Follow Us:</span>
              <a className="btn btn-link text-light" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-link text-light" href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-link text-light" href="">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="btn btn-link text-light" href="">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav
        className={`navbar navbar-expand-lg bg-white navbar-light ${sticky ? "is-sticky" : "no-sticky"}`}
        id="sticker"
      >
        <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
          <h1 className="m-0">Gardener</h1>
        </Link>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/" className={`nav-item nav-link ${location.pathname === "/" ? "active" : ""}`}>
              Home
            </Link>
            <Link to="/about" className={`nav-item nav-link ${location.pathname === "/about" ? "active" : ""}`}>
              About
            </Link>
            <Link to="/service" className={`nav-item nav-link ${location.pathname === "/service" ? "active" : ""}`}>
              Services
            </Link>
            <Link to="/project" className={`nav-item nav-link ${location.pathname === "/project" ? "active" : ""}`}>
              Projects
            </Link>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Pages
              </a>
              <div className="dropdown-menu bg-light m-0">
                <Link to="/feature" className={`dropdown-item ${location.pathname === "/feature" ? "active" : ""}`}>
                  Features
                </Link>
                <Link to="/cart" className={`dropdown-item ${location.pathname === "/cart" ? "active" : ""}`}>
                  Cart
                </Link>
                <Link to="/checkout" className={`dropdown-item ${location.pathname === "/checkout" ? "active" : ""}`}>
                  Check Out
                </Link>
                <Link to="/account" className={`dropdown-item ${location.pathname === "/account" ? "active" : ""}`}>
                  Account
                </Link>
                <Link to="/login" className={`dropdown-item ${location.pathname === "/login" ? "active" : ""}`}>
                  Login
                </Link>
                <Link to="/register" className={`dropdown-item ${location.pathname === "/register" ? "active" : ""}`}>
                  Register
                </Link>
                <Link to="/shop" className={`dropdown-item ${location.pathname === "/shop" ? "active" : ""}`}>
                  Shop
                </Link>
                <Link to="/product/1" className={`dropdown-item ${location.pathname === "/product" ? "active" : ""}`}>
                  Product
                </Link>
                <Link to="/404" className={`dropdown-item ${location.pathname === "/404" ? "active" : ""}`}>
                  404 Page
                </Link>
              </div>
            </div>
            <Link to="/contact" className={`nav-item nav-link ${location.pathname === "/contact" ? "active" : ""}`}>
              Contact
            </Link>
          </div>
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link className="shopping-cart nav-item nav-link" to="/cart">
              <i className="fas fa-shopping-cart"></i>
              {cartQuantity > 0 && <span className="cart-quantity">{cartQuantity}</span>}
            </Link>
            <Link className="nav-item nav-link" to="/account">
              <i className="fa fa-solid fa-user"></i>
            </Link>
          </div>
        </div>
      </nav>
      <a
        href="#"
        className={`btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top ${
          visible ? "visible" : "invisible"
        }`}
        onClick={(e) => {
          e.preventDefault();
          scrollToTop();
        }}
      >
        <i className="bi bi-arrow-up"></i>
      </a>
    </header>
  );
};

export default Header;

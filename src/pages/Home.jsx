import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/*  <!-- Carousel Start --> */}
      <div className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <h1 className="display-1 text-white mb-5 animated slideInDown">Make Your Home Like Garden</h1>
                      <a href="" className="btn btn-primary py-sm-3 px-sm-4">
                        Explore More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7">
                      <h1 className="display-1 text-white mb-5 animated slideInDown">
                        Create Your Own Small Garden At Home
                      </h1>
                      <a href="" className="btn btn-primary py-sm-3 px-sm-4">
                        Explore More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* <!-- Top Feature Start --> */}
      <div className="container-fluid top-feature py-5 pt-lg-0">
        <div className="container py-5 pt-lg-0">
          <div className="row gx-0">
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div className="bg-white shadow d-flex align-items-center h-100 px-5" style={{ minHeight: "160px" }}>
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <i className="fa fa-times text-primary"></i>
                  </div>
                  <div className="ps-3">
                    <h4>No Hidden Cost</h4>
                    <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
              <div className="bg-white shadow d-flex align-items-center h-100 px-5" style={{ minHeight: "160px" }}>
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <i className="fa fa-users text-primary"></i>
                  </div>
                  <div className="ps-3">
                    <h4>Dedicated Team</h4>
                    <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
              <div className="bg-white shadow d-flex align-items-center h-100 px-5" style={{ minHeight: "160px" }}>
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <i className="fa fa-phone text-primary"></i>
                  </div>
                  <div className="ps-3">
                    <h4>24/7 Available</h4>
                    <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*    <!-- About Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-end">
            <div className="col-lg-3 col-md-5 wow fadeInUp" data-wow-delay="0.1s">
              <img className="img-fluid rounded" data-wow-delay="0.1s" src="img/about.jpg" />
            </div>
            <div className="col-lg-6 col-md-7 wow fadeInUp" data-wow-delay="0.3s">
              <h1 className="display-1 text-primary mb-0">25</h1>
              <p className="text-primary mb-4">Year of Experience</p>
              <h1 className="display-5 mb-4">We Make Your Home Like A Garden</h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
                ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <a className="btn btn-primary py-3 px-4" href="">
                Explore More
              </a>
            </div>
            <div className="col-lg-3 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
              <div className="row g-5">
                <div className="col-12 col-sm-6 col-lg-12">
                  <div className="border-start ps-4">
                    <i className="fa fa-award fa-3x text-primary mb-3"></i>
                    <h4 className="mb-3">Award Winning</h4>
                    <span>Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna</span>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-12">
                  <div className="border-start ps-4">
                    <i className="fa fa-users fa-3x text-primary mb-3"></i>
                    <h4 className="mb-3">Dedicated Team</h4>
                    <span>Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Còn lỗi hiển thị 1 vài chỗ, chưa dùng được, có thể mở lên để test */}
      {/* <div className="container-fluid facts my-5 py-5" data-parallax="scroll" data-image-src="./img/carousel-1.jpg">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
              <h1 className="display-4 text-white" data-toggle="counter-up">
                1234
              </h1>
              <span className="fs-5 fw-semi-bold text-light">Happy Clients</span>
            </div>
            <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
              <h1 className="display-4 text-white" data-toggle="counter-up">
                1234
              </h1>
              <span className="fs-5 fw-semi-bold text-light">Garden Complated</span>
            </div>
            <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
              <h1 className="display-4 text-white" data-toggle="counter-up">
                1234
              </h1>
              <span className="fs-5 fw-semi-bold text-light">Dedicated Staff</span>
            </div>
            <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
              <h1 className="display-4 text-white" data-toggle="counter-up">
                1234
              </h1>
              <span className="fs-5 fw-semi-bold text-light">Awards Achieved</span>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Home;

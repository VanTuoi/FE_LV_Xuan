import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useStore from "../store";

const Register = () => {
  useEffect(() => {
    document.title = "Registers - Gardener";
  }, []);
  // State to store username and password
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [message, setMessage] = useState(null);
  const setUser = useStore((state) => state.setUser);
  // Handler htmlFor form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === "admin" && password === "admin") {
      setUser({ username: "admin", firstName: "Admin", lastName: "User" });
    } else {
      setMessage("Đăng ký không thành công");
    }
  };

  return (
    <>
      <div
        className="container-fluid py-5 login-background-image"
        style={{ backgroundImage: `url("/img/background/login-4.jpg")` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div
                className="bg-light p-4 p-sm-4 wow slideInRight"
                data-wow-delay="0.1s"
                style={{ borderRadius: "4%" }}
              >
                <h1 className="display-5 mt-3 mb-3 text-center wow bounceIn">Đăng ký</h1>
                <div className="row g-3 wow fadeIn">
                  <div className="col-sm-12">
                    <div className="form-floating">
                      <input
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Họ và tên"
                        style={{ borderRadius: "8px" }}
                        type="text"
                        className="form-control"
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                      <label htmlFor="gname">Họ và tên</label>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-floating">
                      <select
                        className="form-select form-select-md"
                        aria-label=".form-select-lg example"
                        style={{ borderRadius: "8px" }}
                      >
                        <option value="1" defaultValue>
                          Nam
                        </option>
                        <option value="2">Nữ</option>
                        <option value="3">Khác</option>
                      </select>
                      <label htmlFor="gname">Giới tính</label>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-floating">
                      <input
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Tên đăng nhập"
                        style={{ borderRadius: "8px" }}
                        type="text"
                        className="form-control"
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                      <label htmlFor="gname">Tên đăng nhập</label>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-floating position-relative">
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Mật khẩu"
                        style={{ borderRadius: "8px" }}
                        type={isShowPassword ? "text" : "password"}
                        className="form-control"
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                      <label htmlFor="gmail">Mật khẩu</label>
                      <span
                        className="position-absolute top-50 end-0 translate-middle-y p-3"
                        style={{ cursor: "pointer" }}
                        onClick={() => setIsShowPassword(!isShowPassword)}
                      >
                        <i className={isShowPassword ? "fas fa-eye" : "fas fa-eye-slash"}></i>
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-floating position-relative">
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Nhập lại mật khẩu"
                        style={{ borderRadius: "8px" }}
                        type={isShowPassword ? "text" : "password"}
                        className="form-control"
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                      <label htmlFor="gmail">Nhập lại mật khẩu</label>
                    </div>
                    {message && (
                      <div className="alert alert-danger d-flex align-items-center mt-1 p-2" role="alert">
                        <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:">
                          <use xlinkHref="#exclamation-triangle-fill" />
                        </svg>
                        <div>{message}</div>
                      </div>
                    )}
                  </div>
                  <div className="col-12 text-center">
                    <Link to="/login" className="btn custom-link">
                      Đăng nhập
                    </Link>
                    <button
                      className="btn btn-primary py-3 px-5"
                      type="button"
                      style={{ borderRadius: "10px" }}
                      onClick={handleSubmit}
                    >
                      Đăng ký
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="rounded p-4 p-sm-4 wow slideInLeft" data-wow-delay="0.1s">
                <div
                  className="text-center mx-sm-auto mt-lg-5 wow fadeIn"
                  data-wow-delay="0.1s"
                  style={{ maxWidth: "500px" }}
                >
                  <h1 className="fst-italic display-6 fw-bold text-light">
                    ❝Mang sắc màu của riêng bạn vào cuộc sống❞
                  </h1>
                  <p className="fs-5 fw-bold text-light">
                    Đăng ký ngay để khám phá thế giới hoa độc đáo cùng chúng tôi!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </symbol>
      </svg>
    </>
  );
};

export default Register;

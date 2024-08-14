import React from "react";
import PropTypes from "prop-types";

const PageHeader = ({ title, url }) => {
  return (
    <div
      className="container-fluid page-header  py-5 mb-5 wow fadeIn"
      data-wow-delay="0.1s"
      style={{
        background: `
          linear-gradient(rgba(15, 66, 41, 0.6), 
          rgba(15, 66, 41, 0.6)), 
          url("./img/carousel-1.jpg") center center no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <div className="container text-center py-5">
        <h1 className="display-3 text-white mb-4 animated slideInDown">{title}</h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href={url}>Pages</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {title}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default PageHeader;

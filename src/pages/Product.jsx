import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const Product = () => {
  let mainProduct = {
    id: 5,
    name: "Green apples have polyphenols",
    price: 50,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sint dignissimos, rem commodi cum voluptatem quae reprehenderit repudiandae ea tempora incidunt ipsa, quisquam animi perferendis eos eum modi! Tempora, earum.",
    imgSrc: "/img/products/product-img-5.jpg",
    categories: ["Fruits", "Organic"],
  };

  const relatedProducts = [
    {
      id: 1,
      name: "Strawberry",
      price: 85,
      imgSrc: "/img/products/product-img-1.jpg",
    },
    {
      id: 2,
      name: "Berry",
      price: 70,
      imgSrc: "/img/products/product-img-2.jpg",
    },
    {
      id: 3,
      name: "Lemon",
      price: 35,
      imgSrc: "/img/products/product-img-3.jpg",
    },
  ];

  const { id } = useParams();

  // api get product

  return (
    <>
      <div className="single-product mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="single-product-img">
                <img src={mainProduct.imgSrc} alt={mainProduct.name} />
              </div>
            </div>
            <div className="col-md-7">
              <div className="single-product-content">
                <h3>{mainProduct.name}</h3>
                <p className="single-product-pricing">
                  <span>Per Kg</span> ${mainProduct.price}
                </p>
                <p>{mainProduct.description}</p>
                <div className="single-product-form">
                  <form action="index.html">
                    <input type="number" placeholder="0" />
                  </form>
                  <Link to="/cart" className="cart-btn">
                    <i className="fas fa-shopping-cart"></i> Add to Cart
                  </Link>
                  <p>
                    <strong>Categories: </strong>
                    {mainProduct.categories.join(", ")}
                  </p>
                </div>
                <h4>Share:</h4>
                <ul className="product-share">
                  <li>
                    <a href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="comments-list-wrap">
            <h3 className="comment-count-title">3 Comments</h3>
            <div className="comment-list">
              <div className="single-comment-body">
                <div className="comment-user-avater">
                  <img src="/img/avaters/avatar1.png" alt="" />
                </div>
                <div className="comment-text-body">
                  <h4>
                    Jenny Joe <span className="comment-date">Aprl 26, 2020</span> <a href="#">reply</a>
                  </h4>
                  <p>
                    Nunc risus ex, tempus quis purus ac, tempor consequat ex. Vivamus sem magna, maximus at est id,
                    maximus aliquet nunc. Suspendisse lacinia velit a eros porttitor, in interdum ante faucibus
                    Suspendisse lacinia velit a eros porttitor, in interdum ante faucibus.
                  </p>
                </div>
                <div className="single-comment-body child">
                  <div className="comment-user-avater">
                    <img src="/img/avaters/avatar3.png" alt="" />
                  </div>
                  <div className="comment-text-body">
                    <h4>
                      Simon Soe <span className="comment-date">Aprl 27, 2020</span> <a href="#">reply</a>
                    </h4>
                    <p>
                      Nunc risus ex, tempus quis purus ac, tempor consequat ex. Vivamus sem magna, maximus at est id,
                      maximus aliquet nunc. Suspendisse lacinia velit a eros porttitor, in interdum ante faucibus.
                    </p>
                  </div>
                </div>
              </div>
              <div className="single-comment-body">
                <div className="comment-user-avater">
                  <img src="/img/avaters/avatar2.png" alt="" />
                </div>
                <div className="comment-text-body">
                  <h4>
                    Addy Aoe <span className="comment-date">May 12, 2020</span> <a href="#">reply</a>
                  </h4>
                  <p>
                    Nunc risus ex, tempus quis purus ac, tempor consequat ex. Vivamus sem magna, maximus at est id,
                    maximus aliquet nunc. Suspendisse lacinia velit a eros porttitor, in interdum ante faucibus
                    Suspendisse lacinia velit a eros porttitor, in interdum ante faucibus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="comment-template col-md-6">
            <h4>Leave a comment</h4>
            <p>If you have a comment dont feel hesitate to send us your opinion.</p>
            <form action="index">
              <p>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
              </p>
              <p>
                <textarea name="comment" id="comment" cols="30" rows="10" placeholder="Your Message"></textarea>
              </p>
              <button type="button" className="btn btn-primary">
                Send comment
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="more-products my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-title">
                <h3>
                  <span className="orange-text">Related</span> Products
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae
                  optio.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {relatedProducts.map((product) => (
              <div className="col-lg-4 col-md-6 text-center" key={product.id}>
                <div className="single-product-item">
                  <div className="product-image">
                    <Link to={`/product/${product.id}`}>
                      <img src={product.imgSrc} alt={product.name} />
                    </Link>
                  </div>
                  <h3>{product.name}</h3>
                  <p className="product-price">
                    <span>Per Kg</span> ${product.price}
                  </p>
                  <Link to="/cart" className="cart-btn">
                    <i className="fas fa-shopping-cart"></i> Add to Cart
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;

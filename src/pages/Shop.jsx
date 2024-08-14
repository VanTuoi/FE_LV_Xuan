import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const products = [
  {
    id: 1,
    name: "Strawberry",
    imageUrl: "/img/products/product-img-1.jpg",
    price: 85,
    category: "strawberry",
  },
  {
    id: 2,
    name: "Berry",
    imageUrl: "/img/products/product-img-2.jpg",
    price: 70,
    category: "berry",
  },
  {
    id: 3,
    name: "Lemon",
    imageUrl: "/img/products/product-img-3.jpg",
    price: 35,
    category: "lemon",
  },
  {
    id: 4,
    name: "Avocado",
    imageUrl: "/img/products/product-img-4.jpg",
    price: 50,
    category: "",
  },
  {
    id: 5,
    name: "Green Apple",
    imageUrl: "/img/products/product-img-5.jpg",
    price: 45,
    category: "",
  },
  {
    id: 6,
    name: "Strawberry",
    imageUrl: "/img/products/product-img-6.jpg",
    price: 80,
    category: "strawberry",
  },
];

const Shop = () => {
  return (
    <>
      <PageHeader title="Shop" url="/pages" />

      <div className="product-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-filters">
                <ul>
                  <li className="active" data-filter="*">
                    All
                  </li>
                  <li data-filter=".strawberry">Strawberry</li>
                  <li data-filter=".berry">Berry</li>
                  <li data-filter=".lemon">Lemon</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row product-lists">
            {products.map((product) => (
              <div key={product.id} className={`col-lg-4 col-md-6 text-center ${product.category}`}>
                <div className="single-product-item">
                  <div className="product-image">
                    <Link to={`/product/${product.id}`}>
                      <img src={`${product.imageUrl}`} alt={product.name} />
                    </Link>
                  </div>
                  <h3>{product.name}</h3>
                  <p className="product-price">
                    <span>Per Kg</span> {product.price}$
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

export default Shop;

import React from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
const Cart = () => {
  // Dữ liệu động cho sản phẩm
  const nav = useNavigate();

  const products = [
    {
      id: 1,
      name: "Strawberry",
      price: 85,
      quantity: 1,
      image: "/img/products/product-img-1.jpg",
    },
    {
      id: 2,
      name: "Berry",
      price: 70,
      quantity: 1,
      image: "/img/products/product-img-2.jpg",
    },
    {
      id: 3,
      name: "Lemon",
      price: 35,
      quantity: 1,
      image: "/img/products/product-img-3.jpg",
    },
  ];

  const subtotal = products.reduce((sum, product) => sum + product.price * product.quantity, 0);
  const shipping = 45;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    nav("/checkout"); // điều hướng
  };

  return (
    <>
      {/* <!-- Page Header Start --> */}
      <PageHeader title="Cart" url="/pages" />
      <div className="cart-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="cart-table-wrap">
                <table className="cart-table">
                  <thead className="cart-table-head">
                    <tr className="table-head-row">
                      <th className="product-remove"></th>
                      <th className="product-image">Product Image</th>
                      <th className="product-name">Name</th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-total">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr className="table-body-row" key={product.id}>
                        <td className="product-remove">
                          <a href="#">
                            <i className="far fa-window-close"></i>
                          </a>
                        </td>
                        <td className="product-image">
                          <img src={product.image} alt={product.name} />
                        </td>
                        <td className="product-name">{product.name}</td>
                        <td className="product-price">${product.price}</td>
                        <td className="product-quantity">
                          <input type="number" value={product.quantity} placeholder="0" />
                        </td>
                        <td className="product-total">{product.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="total-section">
                <table className="total-table">
                  <thead className="total-table-head">
                    <tr className="table-total-row">
                      <th>Total</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="total-data">
                      <td>
                        <strong>Subtotal: </strong>
                      </td>
                      <td>${subtotal}</td>
                    </tr>
                    <tr className="total-data">
                      <td>
                        <strong>Shipping: </strong>
                      </td>
                      <td>${shipping}</td>
                    </tr>
                    <tr className="total-data">
                      <td>
                        <strong>Total: </strong>
                      </td>
                      <td>${total}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="p-1 ms-3">
                  <button type="button" className="btn btn-outline-primary me-2">
                    Update Cart
                  </button>
                  <button onClick={(e) => handleCheckout()} type="button" className="btn btn-primary">
                    Check Out
                  </button>
                </div>
              </div>

              <div className="coupon-section">
                <h3>Apply Coupon</h3>
                <div className="coupon-form-wrap">
                  <form action="index">
                    <p>
                      <input type="text" placeholder="Coupon" />
                    </p>
                  </form>
                  <button type="button" className="btn btn-primary py-2 px-lg-5 rounded-0 d-none d-lg-block">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

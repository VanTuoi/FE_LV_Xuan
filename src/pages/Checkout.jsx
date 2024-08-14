import React from "react";
import PageHeader from "../components/PageHeader";

const Checkout = () => {
  const orderDetails = [
    { product: "Strawberry", price: 85.0 },
    { product: "Berry", price: 70.0 },
    { product: "Lemon", price: 35.0 },
  ];

  const subtotal = orderDetails.reduce((total, item) => total + item.price, 0);
  const shipping = 50; // Giá trị cố định cho shipping
  const total = subtotal + shipping;

  const handleCheckout = () => {
    // api
  };

  return (
    <>
      {/* <!-- Page Header Start --> */}
      <PageHeader title="Check Out Product" url="/pages" />

      <div className="checkout-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="checkout-accordion-wrap">
                <div className="accordion" id="accordionExample">
                  {/* Billing Address */}
                  <div className="card single-accordion">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Billing Address
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="billing-address-form">
                          <form action="index.html">
                            <p>
                              <input type="text" placeholder="Name" />
                            </p>
                            <p>
                              <input type="email" placeholder="Email" />
                            </p>
                            <p>
                              <input type="text" placeholder="Address" />
                            </p>
                            <p>
                              <input type="tel" placeholder="Phone" />
                            </p>
                            <p>
                              <textarea
                                name="bill"
                                id="bill"
                                cols="30"
                                rows="10"
                                placeholder="Say Something"
                              ></textarea>
                            </p>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Shipping Address */}
                  <div className="card single-accordion">
                    <div className="card-header" id="headingTwo">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Shipping Address
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="shipping-address-form">
                          <p>Your shipping address form is here.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card Details */}
                  <div className="card single-accordion">
                    <div className="card-header" id="headingThree">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Card Details
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="card-details">
                          <p>Your card details goes here.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="order-details-wrap">
                <table className="order-details">
                  <thead>
                    <tr>
                      <th>Your order Details</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody className="order-details-body">
                    <tr>
                      <td>Product</td>
                      <td>Total</td>
                    </tr>
                    {orderDetails.map((item, index) => (
                      <tr key={index}>
                        <td>{item.product}</td>
                        <td>${item.price.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tbody className="checkout-details">
                    <tr>
                      <td>Subtotal</td>
                      <td>${subtotal.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td>Shipping</td>
                      <td>${shipping.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>${total.toFixed(2)}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-left">
                  <button onClick={handleCheckout} type="button" className="btn btn-primary p-3 m-3">
                    Place Order
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

export default Checkout;

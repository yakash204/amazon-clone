import "./Payment.css";
import React, { useState, useEffect } from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import Axios from "axios";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setsucceeded] = useState(false);
  const [processing, setprocessing] = useState(false);

  const [error, seterror] = useState(null);
  const [disable, setdisable] = useState(true);
  const [clientSecret, setclientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await Axios({
        method: "post",
        //Stripe expect total in curruncy subunit
        url: "/payment/create?total=${getBasketTotal(basket) }",
      });
      setclientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  const handleSubmit = async (event) => {
    //do all fancy strip
    event.preventDefault();
    setprocessing(true);
  };
  const handleChange = (e) => {
    setdisable(e.empty);
    seterror(e.error ? e.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Payment {<Link to="./checkout">({basket?.length} items)</Link>}
        </h1>
        {/*Payment section - delivery address*/}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123,myLocation</p>
            <p>Indore,India</p>
          </div>
        </div>
        {/*Payment section - review item*/}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Item and delivery </h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                rating={item.rating}
                price={item.price}
              />
            ))}
          </div>
        </div>
        {/*Payment section - Payment method*/}
        <div className="payment__section">
          <h3>Payment Methord</h3>
          <div className="payment__detail">
            {/*Strip magic*/}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeprator={true}
                  prefix={"Rs."}
                />
                <button disabled={processing || disable || succeeded}>
                  <span>{processing ? <p> processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

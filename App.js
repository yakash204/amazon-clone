import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Prime from "./Prime";
import Return from "./Return";

const promise = loadStripe(
  "pk_test_51HRb4FCpkQsokxWb5nAmjRSRfdGmj3yfxchJ03ePMOt7aLkTDjBmGUdOgRW02QkdLFSNerG11QqzSiKbgKdVuVRZ00gDmmARQ7"
);
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when app compom=nent load...
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        //user just logged in / the user logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/return">
            <Header />
            <Return />
          </Route>
          <Route path="/prime">
            <Header />
            <Prime />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

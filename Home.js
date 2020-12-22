import React from "react";
import "./Home.css";
import Product from "./Product";
import Slides from "./Slides";

function Home(props) {
  return (
    <div className="home">
      <div className="home__container">
        {/* <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        /> */}
        <div className="home__row">
          <Product
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={150}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={3}
          />
          <Product
            id="34531324"
            title="Kenwood kMix Stand Mixer"
            price={5000}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="1234567"
            title="Fitbit Band"
            price={2500}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={4}
          />
          <Product
            id="1236754"
            title="Amazon Echo"
            price={5000}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            rating={5}
          />
          <Product
            id="2346432"
            title="New Apple iPad Pro"
            price={50000}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L.AC_SX385_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="345632"
            title="Samsung LED Monitor"
            price={55000}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

import React, { useState } from "react";
import {
  Home,
  burger,
  pizzas,
  rolls,
  SouthInd,
  sandwich,
  pasta,
  chinese,
  iceCream,
  cake,
} from "../itemsData";
import Module from "../components/Module";
import { Link } from "react-router-dom";
import Filter from "../components/Filter";

export default function Homepage({ setTotalCartQuantity }) {
 
  return (
    <>
      <div className="HomePage-section">
        <div className="slider">
          <figure>
            <img
              className="banners"
              src="./images/banner1.jpg"
              alt="Banner 2"
            />
            <Link to={"/Rolls"}>
              <img
                className="banners"
                src="./images/banner2.jpg"
                alt="Banner 2"
              />
            </Link>

            <img
              className="banners"
              src="./images/bannner3.jpg"
              alt="Banner 2"
            />


          </figure>
        </div>
        <div className="slider2">
        <figure>

        {/* <img className="mobile-banner-img" src="./images/pizzaMobile.jpg"></img> */}

        </figure>

        </div>


    <Filter></Filter>
        {/* <img className="discount-banner" src="./images/bannner6.jpg"></img> */}
    
      </div>
    </>
  );
}

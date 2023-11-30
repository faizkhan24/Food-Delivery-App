// PizzaPage.js

import React from "react";
import {iceCream} from "../itemsData";
import Items from "../components/Items";


function IceCreamPage() {

  return (
    <>

<div className="slider">
            <figure>
              <img
                className="banners"
                src="/images/icecreambanner.jpg"
                alt="Banner 2"
              />
              <img
                className="banners"
                src="./images/icecreambanner2.jpg"
                alt="Banner 2"
              ></img>
              <img
                className="banners"
                src="./images/icecreambanner3.jpg"
                alt="Banner 2"
              />
            </figure>
          </div>
          <div className="slider2">
            <figure>
              {/* <img className="mobile-banner-img" src="./images/pizzaMobile.jpg"></img> */}
            </figure>
          </div>


{iceCream.map((iceCream) => {
            return (
              <div className="custom-column" key={iceCream.id}>
                <div className="items-container">
                  <Items pizza={iceCream} />
                </div>
              </div>
            );
          })}
    </>
  );
}

export default IceCreamPage;

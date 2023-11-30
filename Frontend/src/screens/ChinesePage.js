// PizzaPage.js

import React from "react";

import {chinese} from "../itemsData";
import Items from "../components/Items";


function ChinesePage() {

  return (
    <>
 <div className="slider">
            <figure>
              <img
                className="banners"
                src="/images/chinesebanner.jpg"
                alt="Banner 2"
              />
              <img
                className="banners"
                src="./images/chinesebanner2.jpg"
                alt="Banner 2"
              ></img>
              <img
                className="banners"
                src="./images/chinsebanner3.jpg"
                alt="Banner 2"
              />
            </figure>
          </div>
          <div className="slider2">
            <figure>
              {/* <img className="mobile-banner-img" src="./images/pizzaMobile.jpg"></img> */}
            </figure>
          </div>

{chinese.map((chinese) => {
            return (
              <div className="custom-column" key={chinese.id}>
                <div className="items-container">
                  <Items pizza={chinese} />
                </div>
              </div>
            );
          })}
    </>
  );
}

export default ChinesePage;

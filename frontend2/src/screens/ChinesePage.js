// PizzaPage.js

import React from "react";

import {chinese} from "../itemsData";
import Items from "../components/Items";


function ChinesePage() {

  return (
    <>

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

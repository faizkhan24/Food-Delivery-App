// PizzaPage.js

import React from "react";
import {sandwich} from "../itemsData";
import Items from "../components/Items";


function SandwichPage() {
  return (
    <>

{sandwich.map((sandwich) => {
            return (
              <div className="custom-column" key={sandwich.id}>
                <div className="items-container">
                  <Items pizza={sandwich} />
                </div>
              </div>
            );
          })}
    </>
  );
}

export default SandwichPage;

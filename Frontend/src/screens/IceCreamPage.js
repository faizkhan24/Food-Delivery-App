// PizzaPage.js

import React from "react";
import {iceCream} from "../itemsData";
import Items from "../components/Items";


function IceCreamPage() {

  return (
    <>

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

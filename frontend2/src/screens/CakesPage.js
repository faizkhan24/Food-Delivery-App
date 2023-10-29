// PizzaPage.js

import React from "react";
import {cake} from "../itemsData";
import Items from "../components/Items";


function CakesPage() {

  return (
    <>

{cake.map((cake) => {
            return (
              <div className="custom-column" key={cake.id}>
                <div className="items-container">
                  <Items cake={cake} />
                </div>
              </div>
            );
          })}
    </>
  );
}

export default CakesPage;

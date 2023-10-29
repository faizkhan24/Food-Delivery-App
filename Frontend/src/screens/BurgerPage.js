// PizzaPage.js

import React from "react";

import {burger} from "../itemsData";
import Items from "../components/Items";


function BurgerPage() {
  // console.log(burger);
  return (
    <>

{burger.map((burger) => {
            return (
            
              <div className="custom-column" key={burger.id}>
              <div> 
              </div>
                <div className="items-container">
                  <Items pizza={burger} />
                </div>
              </div>
            );
          })}
    </>
  );
}

export default BurgerPage;

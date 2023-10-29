// PizzaPage.js

import React from "react";
import {pasta} from "../itemsData";
import Items from "../components/Items";


function PastaPage() {

  return (
    <>

{pasta.map((pasta) => {
            return (
              <div className="custom-column" key={pasta.id}>
                <div className="items-container">
                  <Items pizza={pasta} />
                </div>
              </div>
            );
          })}
    </>
  );
}

export default PastaPage;

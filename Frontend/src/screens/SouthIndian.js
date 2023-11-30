import React from "react";

import {SouthInd} from "../itemsData";
import Items from "../components/Items";



function SouthIndian() {

  return (
    <>

{SouthInd.map((SouthInd) => {
            return (
              <div className="custom-column" key={SouthInd.id}>
                <div className="items-container">
                  <Items pizza={SouthInd} />
                </div>
              </div>
            );
          })}
    </>
  );
}

export default SouthIndian;

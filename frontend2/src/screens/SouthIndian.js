
import React from "react";
import Pizza from "../components/Items";
import {SouthInd} from "../itemsData";
import Items from "../components/Items";


function SouthIndian() {

  return (
    <>

{SouthInd.map((SouthIndian) => {
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

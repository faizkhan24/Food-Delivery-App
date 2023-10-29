
import React from "react";
import Pizza from "../components/Items";
import {rolls} from "../itemsData";
import Items from "../components/Items";


function RollsPage() {

  return (
    <>

{rolls.map((rolls) => {
            return (
              <div className="custom-column" key={rolls.id}>
                <div className="items-container">
                  <Items pizza={rolls} />
                </div>
              </div>
            );
          })}
    </>
  );
}

export default RollsPage;

import React, { useState, useEffect } from "react";
import Items from "../components/Items";
import { iceCream } from "../itemsData";

function IceCreamPage() {
  const [loading, setLoading] = useState(true);
  const [iceCreamData, setIceCream] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate a delay (replace this with your actual API call)
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Set the ice cream items once fetched
        setIceCream(iceCream);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    // Call the fetch function
    fetchData();
  }, []);

  console.log('arrived at icecreampage')
  console.log('icecreampage', iceCreamData);

  return (
    <>
      {loading ? (
        <div className="loading-container">
          <div className="bar">
            <div className="loading"></div>
            <div
              className="loading-shimmer"
              style={{ height: "100vh", marginBottom: "20px" }}
            />
          </div>
        </div>
      ) : (
        <>
          <div className="slider">
            <figure>
              <img
                className="banners"
                src="/images/icecreambanner.jpg"
                alt="Banner 2"
              />
              <img
                className="banners"
                src="./images/icecreambanner2.jpg"
                alt="Banner 2"
              ></img>
              <img
                className="banners"
                src="./images/icecreambanner3.jpg"
                alt="Banner 2"
              />
            </figure>
          </div>
          <div className="slider2">
            <figure>
              {/* <img className="mobile-banner-img" src="./images/pizzaMobile.jpg"></img> */}
            </figure>
          </div>

          {iceCreamData.map((iceCreamItem) => (
            <div className="custom-column" key={iceCreamItem.id}>
              <div className="items-container">
                <Items pizza={iceCreamItem} />
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default IceCreamPage;

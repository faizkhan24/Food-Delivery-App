import React, { useState, useEffect } from "react";
import Items from "../components/Items";
import { sandwich } from "../itemsData";

function SandwichPage() {
  const [loading, setLoading] = useState(true);
  const [sandwichData, setSandwich] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate a delay (replace this with your actual API call)
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Set the sandwich items once fetched
        setSandwich(sandwich);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    // Call the fetch function
    fetchData();
  }, []);

  console.log('arrived at sandwichpage')
  console.log('sandwichpage', sandwichData);

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
                src="/images/sandwichbanner.jpg"
                alt="Banner 2"
              />
              <img
                className="banners"
                src="./images/sandwichbanner2.jpg"
                alt="Banner 2"
              ></img>
              <img
                className="banners"
                src="./images/sandwichbanner3.jpg"
                alt="Banner 2"
              />
            </figure>
          </div>
          <div className="slider2">
            <figure>
              {/* <img className="mobile-banner-img" src="./images/pizzaMobile.jpg"></img> */}
            </figure>
          </div>

          {sandwichData.map((sandwichItem) => (
            <div className="custom-column" key={sandwichItem.id}>
              <div className="items-container">
                <Items pizza={sandwichItem} />
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default SandwichPage;

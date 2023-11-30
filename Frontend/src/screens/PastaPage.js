import React, { useState, useEffect } from "react";
import Items from "../components/Items";
import { pasta } from "../itemsData";

function PastaPage() {
  const [loading, setLoading] = useState(true);
  const [pastaData, setPasta] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate a delay (replace this with your actual API call)
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Set the pasta items once fetched
        setPasta(pasta);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    // Call the fetch function
    fetchData();
  }, []);

  console.log('arrived at pastapage')
  console.log('pastapage', pastaData);

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
                src="/images/pastabanner.jpg"
                alt="Banner 2"
              />
              <img
                className="banners"
                src="./images/pastabanner2.jpg"
                alt="Banner 2"
              ></img>
              <img
                className="banners"
                src="./images/pastabanner3.jpg"
                alt="Banner 2"
              />
            </figure>
          </div>
          <div className="slider2">
            <figure>
              {/* <img className="mobile-banner-img" src="./images/pizzaMobile.jpg"></img> */}
            </figure>
          </div>

          {pastaData.map((pastaItem) => (
            <div className="custom-column" key={pastaItem.id}>
              <div className="items-container">
                <Items pizza={pastaItem} />
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default PastaPage;

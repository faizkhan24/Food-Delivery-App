import React, { useState, useEffect } from "react";
import { burger } from "../itemsData";
import Items from "../components/Items";
import "../components/Loading.css"; // Import the CSS file

function BurgerPage() {
  const [loading, setLoading] = useState(true);
  const [burgers, setBurgers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        await new Promise((resolve) => setTimeout(resolve, 2000));

      
        setBurgers(burger);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };


    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-container">
            <div className="bar">
              <div className="loading"></div>
              <div className="loading-shimmer" style={{ height: "100vh", marginBottom: "20px" }} />  
            </div>
          </div>
      
      ) : (
        <>
        <div>
            <div className="slider">
              <figure>
                <img
                  className="banners"
                  src="/images/burgerbanner.jpg"
                  alt="Banner 2"
                />
                <img
                  className="banners"
                  src="./images/burgerbanner2.jpg"
                  alt="Banner 2"
                ></img>
                <img
                  className="banners"
                  src="./images/burgerbanner3.jpg"
                  alt="Banner 2"
                />
              </figure>
            </div>
            <div className="slider2">
              <figure>{/* <img className="mobile-banner-img" src="./images/pizzaMobile.jpg"></img> */}</figure>
            </div>
          </div>

          {/* Render burger items */}
          {burgers.map((burger) => (
            <div className="custom-column" key={burger.id}>
              <div> {/* Other content */} </div>
              <div className="items-container">
                <Items pizza={burger} />
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default BurgerPage;

import React, { useState, useEffect } from "react";
import Items from "../components/Items";
import { rolls } from "../itemsData";

function RollsPage() {
  const [loading, setLoading] = useState(true);
  const [rollsData, setRolls] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {

        await new Promise((resolve) => setTimeout(resolve, 2000));

      
        setRolls(rolls);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };


    fetchData();
  }, []);

  console.log('arrived at rollspage')
  console.log('rollspage', rollsData);

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
                src="/images/rollbanner.jpg"
                alt="Banner 2"
              />
              <img
                className="banners"
                src="./images/rollbanner2.jpg"
                alt="Banner 2"
              ></img>
              <img
                className="banners"
                src="./images/rollbanner3.jpg"
                alt="Banner 2"
              />
            </figure>
          </div>
          <div className="slider2">
            <figure>
              {/* <img className="mobile-banner-img" src="./images/pizzaMobile.jpg"></img> */}
            </figure>
          </div>

          {rollsData.map((roll) => (
            <div className="custom-column" key={roll.id}>
              <div className="items-container">
                <Items pizza={roll} />
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default RollsPage;

import React, { useState, useEffect } from "react";
import { pizzas } from "../itemsData";
import Items from "../components/Items";

const PizzaPage = () => {
  const [loading, setLoading] = useState(true);
  const [pizzasData, setPizzas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate a delay (replace this with your actual API call)
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Set the pizza items once fetched
        setPizzas(pizzas);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    // Call the fetch function
    fetchData();
  }, []);

  console.log('arrived at pizzapage')
  console.log('pizzapage', pizzasData);
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
                src="/images/pizzabanner.jpg"
                alt="Banner 2"
              />
              <img
                className="banners"
                src="./images/pizzabanner2.jpg"
                alt="Banner 2"
              ></img>
              <img
                className="banners"
                src="./images/pizzabanner3.jpg"
                alt="Banner 2"
              />
            </figure>
          </div>
          <div className="slider2">
            <figure>
              {/* <img className="mobile-banner-img" src="./images/pizzaMobile.jpg"></img> */}
            </figure>
          </div>

          {pizzasData.map((pizza) => {
            return (
              <div className="custom-column" key={pizza.id}>
                <div className="items-container">
                  <Items pizza={pizza} />
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default PizzaPage;

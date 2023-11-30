import React, { useState, useEffect } from "react";
import Items from "../components/Items";
import { chinese } from "../itemsData";

function ChinesePage() {
  const [loading, setLoading] = useState(true);
  const [chineseData, setChinese] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {

        await new Promise((resolve) => setTimeout(resolve, 2000));


        setChinese(chinese);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };


    fetchData();
  }, []);

  console.log('arrived at chinesepage')
  console.log('chinesepage', chineseData);

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
                src="/images/chinesebanner.jpg"
                alt="Banner 2"
              />
              <img
                className="banners"
                src="./images/chinesebanner2.jpg"
                alt="Banner 2"
              ></img>
              <img
                className="banners"
                src="./images/chinsebanner3.jpg"
                alt="Banner 2"
              />
            </figure>
          </div>
          <div className="slider2">
            <figure>
              {/* <img className="mobile-banner-img" src="./images/pizzaMobile.jpg"></img> */}
            </figure>
          </div>

          {chineseData.map((chineseItem) => (
            <div className="custom-column" key={chineseItem.id}>
              <div className="items-container">
                <Items pizza={chineseItem} />
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default ChinesePage;

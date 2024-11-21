import React, { useState } from "react";
import "./Tabs.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("PRICE");

  return (
    <div className="tabs-container">
      <div className="tabs-wrapper">
        <div
          className={`tab ${activeTab === "PRICE" ? "active" : ""}`}
          onClick={() => setActiveTab("PRICE")}
        >
          PRICE
        </div>
        <div
          className={`tab ${activeTab === "FUNDING" ? "active" : ""}`}
          onClick={() => setActiveTab("FUNDING")}
        >
          FUNDING
        </div>
        {/* <div className="underline">
        <div
          className={`underline-indicator ${
            activeTab === "PRICE" ? "price" : "funding"
          }`}
        ></div>
      </div> */}
      </div>
    </div>

  );
};

export default Tabs;

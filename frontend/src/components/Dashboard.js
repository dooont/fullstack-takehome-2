import React from "react";
import "./Dashboard.css"; // Add styling here or use inline styles
import TradingCard from "./TradingCard";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Section for the graph */}
      <div className="graph-section">
        {/* Replace this with your graph component or library integration */}
        <div className="graph-placeholder">Graph goes here</div>
      </div>

      {/* Section for the table */}
      <div className="table-section">
        <TradingCard />
      </div>
    </div>
  );
};

export default Dashboard;

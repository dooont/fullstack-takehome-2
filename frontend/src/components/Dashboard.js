import React from "react";
import "./Dashboard.css"; // Add styling here or use inline styles
import TradingCard from "./TradingCard";
import CandlestickChart from "./CandlestickChart";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Section for the graph */}
      <div className="graph-section">
        <CandlestickChart />
      </div>
      <div className="table-section">
        <TradingCard />
      </div>
    </div>
  );
};

export default Dashboard;

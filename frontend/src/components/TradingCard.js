import React, { useState } from "react";
import "./TradingCard.css";

const TradingCard = () => {
  const [tab, setTab] = useState("LONG");

  return (
    <div className="trading-card">
      {/* Tabs for LONG and SHORT */}
      <div className="tabs">
        <div
          className={`tab ${tab === "LONG" ? "active" : ""}`}
          onClick={() => setTab("LONG")}
        >
          LONG
        </div>
        <div
          className={`tab ${tab === "SHORT" ? "active" : ""}`}
          onClick={() => setTab("SHORT")}
        >
          SHORT
        </div>
      </div>
      <div className="form">
        <div className="upper-section">
          <div className="upper-form-item seven">
            <label className="order-type">Order Type</label>
            <select>
              <option value="MARKET" className="market">MARKET</option>
              <option value="LIMIT" className="limit">LIMIT</option>
            </select>
          </div>

          <div className="upper-form-item three">
            <label className="order-type">Open Price</label>
            <span className="value order-type">$30,021.29</span>
            <span className="value order-type">USDC</span>
          </div>
        </div>
        <div className="upper-form-item">
          <label>Size</label>
          <div>
            <input type="number" placeholder="0." />
            <span className="unit">USDC</span>
          </div>
        </div>

        <div className="form-item">
          <label>Leverage</label>
          <input type="range" min="2" max="128" step="1" list="leverage-stops" />
          <datalist id="leverage-stops">
            <option value="2" />
            <option value="5" />
            <option value="10" />
            <option value="25" />
            <option value="50" />
            <option value="100" />
            <option value="128" />
          </datalist>
          <div className="leverage-labels">
            <span>2x</span>
            <span>128x</span>
          </div>
        </div>

        <div className="form-item">
          <label>Liquidation Price</label>
          <span className="value">300,212 USDC</span>
        </div>

        <div className="form-item">
          <label>Slippage</label>
          <span className="value">1.20 USDC (0.3%)</span>
        </div>

        <div className="form-item">
          <label>Fee</label>
          <span className="value">2.00 USDC (0.05%)</span>
        </div>

        {/* Advanced toggle */}
        <div className="form-item advanced">
          <label>Advanced</label>
          <span>▼</span>
        </div>
      </div>

      {/* Buy Button */}
      <button className="buy-button">BUY / LONG</button>
    </div>
  );
};

export default TradingCard;

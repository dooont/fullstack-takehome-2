import React from "react";
import "./CryptoRow.css";

const CryptoRow = () => {
  return (
    <div className="crypto-row">
      <div className="crypto-item-coin">
        <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" alt="BTC" className="crypto-icon" />
        <span className="crypto-name">BTC / BITCOIN</span>
      </div>
      <div className="crypto-item">
        <span className="crypto-label">Price</span>
        <span className="crypto-value">$31,119.01</span>
      </div>
      <div className="crypto-item">
        <span className="crypto-label">24H Change</span>
        <span className="crypto-value positive">+22.3 USDC (+7.5%)</span>
      </div>
      <div className="crypto-item">
        <span className="crypto-label">1H Funding</span>
        <span className="crypto-value positive">0.00012%</span>
      </div>
      <div className="crypto-item">
        <span className="crypto-label">Long Open Interest</span>
        <span className="crypto-value positive">8.871 BTC</span>
      </div>
      <div className="crypto-item">
        <span className="crypto-label">Short Open Interest</span>
        <span className="crypto-value positive">8.871 BTC</span>
      </div>
    </div>
  );
};

export default CryptoRow;

import logo from './logo.svg';
import React from 'react';
import SearchBar from './components/SearchBar';
import CryptoRow from './components/CryptoRow';
import Tabs from './components/Tabs';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <CryptoRow />
        <Tabs />
        <Dashboard />
      </header>
    </div>
  );
}

export default App;

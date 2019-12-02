import React from 'react';
import Header from './View/Header'
import Footer from './View/Footer'

import UserPage from "./Users/UserPage"
import './App.css';

function App() {
  return (
    <>
      <Header />
      <UserPage />
      <Footer />

    </>
  );
}

export default App;

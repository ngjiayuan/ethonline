import React from 'react';
import LandingPage from './LandingPage';
import NavigationBar from './NavBar'; // Import the NavigationBar component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BuyStable from './Buy';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/buy' element={<BuyStable />} />
        <Route exact path='/sell' element={<BuyStable />} />
        <Route exact path='/dashboard' element={<BuyStable />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import LandingPage from './LandingPage';
import NavigationBar from './NavBar'; // Import the NavigationBar component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BuyStable from './Buy';

function App() {
  return (
    <Router>
      <NavigationBar />
      <LandingPage />
      <Routes>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/buy' component={BuyStable} />
      </Routes>
    </Router>
  );
}

export default App;

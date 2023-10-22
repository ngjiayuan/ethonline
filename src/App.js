import React from 'react';
import LandingPage from './LandingPage';
import NavigationBar from './NavBar'; // Import the NavigationBar component

function App() {
  return (
    <div className='App'>
      <NavigationBar /> {/* Add the NavigationBar component here */}
      <LandingPage />
      {/* Add other app routes/components here */}
    </div>
  );
}

export default App;

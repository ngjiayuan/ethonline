import React from 'react';
import LandingPage from './LandingPage';
import NavigationBar from './NavBar'; // Import the NavigationBar component
import Login from './Login';

function App() {
  return (
    <div className='App'>
      <NavigationBar /> {/* Add the NavigationBar component here */}
      <Login />
      <LandingPage />
      {/* Add other app routes/components here */}
    </div>
  );
}

export default App;

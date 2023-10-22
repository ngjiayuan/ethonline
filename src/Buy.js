import React, { useEffect } from 'react';

const BuyStable = () => {
  useEffect(() => {
    console.log('Hello, World!');
  }, []);

  return (
    <div className='buy-page'>
      <div className='center-content'>
        <h1>Buy stablecoins!!</h1>
        {console.log("I'm on the buy page")}
        {/* Update page */}
      </div>
    </div>
  );
};

export default BuyStable;

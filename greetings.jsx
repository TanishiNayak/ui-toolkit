import React, { useState, useEffect } from 'react';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('Good morning');
    } else if (currentHour < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good evening');
    }
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export default Greeting;
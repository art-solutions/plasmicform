import React, { useState, useEffect } from 'react';

const Stars: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const newYorkTime = currentTime.toLocaleString('en-US', {
    timeZone: 'America/New_York',
  });

  return <div>New York Time: {newYorkTime}</div>;
};

export default Stars;

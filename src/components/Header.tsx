
import { useState, useEffect } from 'react';

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <header className="bg-navy-dark py-2 px-4 shadow-md fixed top-0 left-0 right-0 z-40">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-accent font-semibold">Isaac's Portfolio</h1>
        <div className="text-accent">
          {currentTime.toLocaleTimeString()} | {currentTime.toLocaleDateString()}
        </div>
      </div>
    </header>
  );
};

export default Header;

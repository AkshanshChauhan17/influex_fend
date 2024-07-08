import React, { useState, useEffect } from 'react';

const ScrollPercentage = ({shDef}) => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(()=>{
    if(Math.round(scrollPercentage) > 41) {
        shDef(true);
      } else {
        shDef(false);
      };
  }, [scrollPercentage])

  return (
    <div className="scroll-container">
      <div className="progress-bar" style={{ width: `${scrollPercentage}%` }}></div>
    </div>
  );
};

export default ScrollPercentage;
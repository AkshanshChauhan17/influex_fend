import React, { useState, useEffect } from 'react';

const ImageLoader = ({ lowResSrc, highResSrc, alt, className, animate }) => {
  const [src, setSrc] = useState(lowResSrc);
  const [loaded, setLoaded] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(100);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const zoomLevel = 220 + (scrollPosition/10);

  useEffect(() => {
    const img = new Image();
    img.src = highResSrc;
    img.onload = () => {
      setSrc(highResSrc);
      setLoaded(true);
    };
    return ()=>{
      img.src = "";
      setLoaded(false);
    };
  }, [highResSrc]);

  return (
    <div
      className={className}
      alt={alt}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: `${animate ? "contain" : "cover"}`
      }}
    ></div>
  );
};

export default ImageLoader;
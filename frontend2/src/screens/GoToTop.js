import React, { useState, useEffect } from 'react';

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className={`top-btn ${isVisible ? 'visible' : ''}`} onClick={goToTop}>
      <div>
        <img className='arrow-icon' src='./images/arrow.png' alt="Go To Top" />
      </div>
    </div>
  );
}

export default GoToTop;

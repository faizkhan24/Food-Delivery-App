import React, { useEffect, useState } from 'react';
import './YourComponent.css'; // Import your component-specific CSS file

function BoxAnimation() {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    let lastAnimation = 0;
    const sections = Array.from(document.querySelectorAll('.box'));

    const handleScroll = (e) => {
      e.preventDefault();

      const timeNow = Date.now();
      const delta = e.deltaY;
      let newSection;

      if (timeNow - lastAnimation < 2000) {
        return;
      }

      if (e.deltaY < 0) {
        // Up
        newSection = currentSection > 0 ? currentSection - 1 : currentSection;
      } else {
        // Down
        newSection = currentSection < sections.length - 1 ? currentSection + 1 : currentSection;
      }

      if (currentSection !== newSection) {
        // newSection is currentSection now
        // And `old` currentSection is previousSection
        if (currentSection < newSection) {
          // Moving Down
          sections[newSection].classList.remove('under');
          sections[newSection].classList.add('current');
          sections[currentSection].classList.remove('current');
          sections[currentSection].classList.add('above');
        } else {
          // Moving Up
          sections[newSection].classList.remove('above');
          sections[newSection].classList.add('current');
          sections[currentSection].classList.remove('current');
          sections[currentSection].classList.add('under');
        }

        // Update currentSection
        setCurrentSection(newSection);

        sections.forEach((item, index) => {
          item.style.transform = `translateY(${(index - newSection) * 100}vh)`;
        });
      }

      lastAnimation = timeNow;
    };

    // Add the initial "current" class to the first section
    sections[currentSection].classList.add('current');

    // Prevent arrow key scrolling
    document.addEventListener('keydown', (ev) => {
      if (ev.keyCode === 38 || ev.keyCode === 40) {
        ev.preventDefault();
        return false;
      }
    }, false);

    // Handle wheel scrolling events
    document.addEventListener('wheel', handleScroll);

    return () => {
      // Cleanup by removing event listeners
      document.removeEventListener('keydown', (ev) => {
        if (ev.keyCode === 38 || ev.keyCode === 40) {
          ev.preventDefault();
          return false;
        }
      }, false);
      document.removeEventListener('wheel', handleScroll);
    };
  }, [currentSection]);

  return (
    <div className="container">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`box box_${index + 1} ${index === currentSection ? 'current' : ''}`}
          style={{ transform: `translateY(${(index - currentSection) * 100}vh)` }}
        >
          {/* Your section content goes here */}
        </div>
      ))}
    </div>
  );
}

export default BoxAnimation;

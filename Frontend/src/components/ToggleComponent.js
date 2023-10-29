import React, { useState } from 'react';

function ToggleComponent() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggleClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className={`background ${isToggled ? 'background--on' : ''}`}>
      <div className={`toggle-body ${isToggled ? 'toggle-body--on' : ''}`}>
        <button
          className={`toggle-btn ${isToggled ? 'toggle-btn--on' : ''} ${
            isToggled ? 'toggle-btn--scale' : ''
          }`}
          onClick={handleToggleClick}
        >
        </button>
      </div>
    </div>
  );
}

export default ToggleComponent;

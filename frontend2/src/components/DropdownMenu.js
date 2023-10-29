import React from 'react';
import '../components/style.css';

const DropdownMenu = ({ handleDropdownMouseEnter, handleDropdownMouseLeave }) => {
  return (
    <div className='drop-down' onMouseEnter={handleDropdownMouseEnter} onMouseLeave={handleDropdownMouseLeave}>
      <ul className='drop-list'>
        <li><a href='#'>Reservation</a></li>
        <li>Profile</li>
        <li>Profile</li>
      </ul>
    </div>
  );
};

export default DropdownMenu;

import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../components/LogoutToggle.css";
import { logoutUser } from "../actions/UserAction";

const LogoutToggle = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  const dispatch = useDispatch();

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    // Add a click event listener to the document
    document.addEventListener("click", handleDocumentClick);

    return () => {
      // Remove the click event listener when the component unmounts
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleDocumentClick = (e) => {
    // Check if the click is outside the dropdown
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      closeDropdown();
    }
  };

  return (
    <div className={`custom-dropdown ${isDropdownOpen ? "is-open" : ""}`}>
      <div className="dropdown-toggle" ref={dropdownRef}>
      <FontAwesomeIcon className="user-icon" icon={faUser} />
        {currentUser.name}
        <FontAwesomeIcon className="drop-icon" icon={faCaretDown} onClick={toggleDropdown} />
      </div>

      <div className="dropdown-menu">
        <div className="dropdown-item"  >
          Orders
        </div>
        <div className="dropdown-item" onClick={()=>{dispatch(logoutUser())}}>
          Logout
        </div>
      </div>
    </div>
  );
};

export default LogoutToggle;

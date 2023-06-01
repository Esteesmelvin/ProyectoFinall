import '../../styles/Header.css'
import React from 'react';
import {
  FaFacebook,
  FaSearch,
  FaHome,
  FaUsers,
  FaVideo,
  FaBell,
  FaCaretDown,
  FaEnvelope,
  FaUser,
  FaStore,
  FaGamepad
} from "react-icons/fa";
import ProfileDropdown from './ProfileDropdown';

const Header = () => {
  return (
    <header id="headerContainer">
      <div id="leftContainer">
        <div id="logoContainer">
          <FaFacebook className="icon" />
        </div>
        <div id="searchContainer">
          <FaSearch id="searchIcon" />
          <input
            type="text"
            placeholder="Search Facebook"
            id="searchInput"
          />
        </div>
      </div>
      <div id="centerContainer">
        <div id="iconContainer">
          <FaHome className="icon" />
        </div>
        <div id="iconContainer">
          <FaVideo className="icon" />
        </div>
        <div id="iconContainer">
          <FaStore className="icon" />
        </div>
        <div id="iconContainer">
          <FaUsers className="icon" />
        </div>
        <div id="iconContainer">
          <FaGamepad className="icon" />
        </div>
      </div>
      <div id="rightContainer">
        <div id="iconContainer">
          <FaCaretDown className="icon" />
        </div>
        <div id="iconContainer">
          <FaEnvelope className="icon" />
        </div>
        <div id="iconContainer">
          <FaBell className="icon" />
        </div>
        <div id="iconContainer">
          <ProfileDropdown />
        </div>

      </div>


    </header>
  );
};
export default Header;

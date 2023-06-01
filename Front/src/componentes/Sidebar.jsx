// Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';
import { FaUserFriends, FaClock, FaStar, FaSave } from 'react-icons/fa';


function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/amigos">
            <FaUserFriends className="sidebar-icon" />
            Amigos
          </Link>
        </li>
        <li>
          <Link to="/Feed">
            <FaClock className="sidebar-icon" />
            Más Reciente
          </Link>
        </li>
        <li>
          <Link to="/favoritos">
            <FaStar className="sidebar-icon" />
            Favoritos
          </Link>
        </li>
        <li>
          <Link to="/guardados">
            <FaSave className="sidebar-icon" />
            Guardados
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
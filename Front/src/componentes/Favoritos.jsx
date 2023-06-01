import React from 'react';
import { FaStar } from "react-icons/fa";
import { TiDelete } from 'react-icons/ti';
import post1 from '../images/post4.jpg';
import post2 from '../images/post5.jpg';
import post3 from '../images/post6.jpg';
import '../styles/Favoritos.css'
import Sidebar from './Sidebar';
import ChatList from './ChatList';
import Header from './Feed/Header';


function Favoritos() {
  return (
    <>
    <Header/>
    <Sidebar/>
    <ChatList/> 
    <div className="favoritos-container">
      <div className="favoritos-item">
        <img src={post1} alt="Post 1" />
        <div className="favoritos-item-overlay">
          <div className="favoritos-item-overlay-title">mi perritu</div>
          <div className="favoritos-item-overlay-text">
            que lindo que es
          </div>
          <div className="favoritos-item-overlay-actions">
            <FaStar />
            <TiDelete />
          </div>
        </div>
      </div>
      <div className="favoritos-item">
        <img src={post2} alt="Post 2" />
        <div className="favoritos-item-overlay">
          <div className="favoritos-item-overlay-title">mi ciudad</div>
          <div className="favoritos-item-overlay-text">
            fotito de hoy
          </div>
          <div className="favoritos-item-overlay-actions">
            <FaStar />
            <TiDelete />
          </div>
        </div>
      </div>
      <div className="favoritos-item">
        <img src={post3} alt="Post 3" />
        <div className="favoritos-item-overlay">
          <div className="favoritos-item-overlay-title">señora no se mate</div>
          <div className="favoritos-item-overlay-text">Bohemio</div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Favoritos;

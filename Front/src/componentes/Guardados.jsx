import React from 'react';
import { FaRegBookmark } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';
import post1 from '../images/post1.jpg';
import post2 from '../images/post2.jpg';
import post3 from '../images/post3.jpg';
import '../styles/Guardados.css';
import Header from './Feed/Header';
import Sidebar from './Sidebar';
import ChatList from './ChatList';

function Guardados() {
  return (
    <>
      <Header />
      <Sidebar />
      <ChatList />
      <div className="guardados-container">
        <div className="guardados-item">
          <img src={post1} alt="Post 1" />
          <div className="guardados-item-overlay">
            <div className="guardados-item-overlay-title">Gengar Oscuro</div>
            <div className="guardados-item-overlay-text">
              Hermoso pokemon, mejor como persona
            </div>
            <div className="guardados-item-overlay-actions">
              <FaRegBookmark />
              <TiDelete />
            </div>
          </div>
        </div>
        <div className="guardados-item">
          <img src={post2} alt="Post 2" />
          <div className="guardados-item-overlay">
            <div className="guardados-item-overlay-title">Punto.</div>
            <div className="guardados-item-overlay-text">
              La clase de hoy
            </div>
            <div className="guardados-item-overlay-actions">
              <FaRegBookmark />
              <TiDelete />
            </div>
          </div>
        </div>
        <div className="guardados-item">
          <img src={post3} alt="Post 3" />
          <div className="guardados-item-overlay">
            <div className="guardados-item-overlay-title">Ladrillo Minecraft</div>
            <div className="guardados-item-overlay-text">Bohemio</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Guardados;

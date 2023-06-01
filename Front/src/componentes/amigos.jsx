import React from 'react';
import Sidebar from './Sidebar';
import ChatList from './ChatList';
import '../styles/amigos.css';
import Header from './Feed/Header';

const users = [
  { name: 'Luisa Martinez', image: 'https://i.pravatar.cc/150?img=1' },
  { name: 'Pedro Mogollon', image: 'https://i.pravatar.cc/150?img=2' },
  { name: 'Mario Gutierrez', image: 'https://i.pravatar.cc/150?img=3' },
  { name: 'Sofía Trujillo', image: 'https://i.pravatar.cc/150?img=4' },
  { name: 'Benito Camelo', image: 'https://i.pravatar.cc/150?img=5' },
  { name: 'Fernando Hierro', image: 'https://i.pravatar.cc/150?img=6' },
  { name: 'Ana Jimenez', image: 'https://i.pravatar.cc/150?img=7' },
  { name: 'Juan Orjuela', image: 'https://i.pravatar.cc/150?img=8' },
  { name: 'Carla Soto', image: 'https://i.pravatar.cc/150?img=9' },
];

function Amigos() {
  return (
    <>
      <Header />
      <Sidebar />
      <ChatList />
      <div className="amigos-container">
        <div className="amigos-title">
          <h1>Amigos</h1>
        </div>
        <div className="amigos-grid">
          {users.map((user) => (
            <div className="amigos-item" key={user.name}>
              <img src={user.image} alt={user.name} />
              <div className="amigos-item-name">{user.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Amigos;
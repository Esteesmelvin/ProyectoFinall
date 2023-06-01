import React from 'react';
import '../styles/ChatList.css';

const ChatList = () => {
  // Lista de usuarios conectados (sólo para ejemplo)
  const users = [
    { id: 1, name: 'Juan Manuel Santos', isOnline: true },
    { id: 2, name: 'Gustavo Petro Urrego ', isOnline: false },
    { id: 3, name: 'Alvarito Uribe', isOnline: true },
    { id: 4, name: 'Nayib Bukele', isOnline: true },
    { id: 5, name: 'Donald Trump', isOnline: false },
    { id: 6, name: 'Andres Cepeda', isOnline: false },
    { id: 7, name: 'Alex Turner', isOnline: true },
    { id: 8, name: 'Enrique Iglesias', isOnline: false },
    { id: 9, name: 'Andres Calamaro', isOnline: false },
    { id: 10, name: 'Juanito Alimaña', isOnline: true },
    { id: 12, name: 'El Fruko', isOnline: false },
    { id: 13, name: 'Melvin Carabali', isOnline: false },
    { id: 14, name: 'Kylie Jenner', isOnline: true },
    { id: 15, name: 'Monster Peralta', isOnline: true },
    { id: 16, name: 'Cristiano Ronaldo', isOnline: true },
    { id: 16, name: 'Leonel Messi', isOnline: false },
    { id: 17, name: 'Santiago Gutierrez', isOnline: true },
    { id: 18, name: 'Anyi Yurley', isOnline: false },
    { id: 19, name: 'Orlando Orjuela', isOnline: false },
    { id: 20, name: 'Cristina Zorrilla', isOnline: true },
    { id: 21, name: 'Paulina Vega', isOnline: false },
    { id: 22, name: 'Ruben Doblas', isOnline: false },
    { id: 23, name: 'Radamel Falcao', isOnline: true },
    { id: 24, name: 'Juan Meneses', isOnline: false },
    { id: 25, name: 'Juan Pablo Montoya', isOnline: true },
    { id: 26, name: 'Marilyn Monroe', isOnline: true },
    { id: 27, name: 'Gustavo Ceratti', isOnline: false },
  ];

  return (
    <div className="chat-list-container">
      <h2>Conectados</h2>
      <ul className="chat-list">
        {users.map((user) => (
          <li key={user.id} className="chat-list-item">
            <div className={`chat-status ${user.isOnline ? 'online' : 'offline'}`} />
            <span className="chat-username">{user.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;

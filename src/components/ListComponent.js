// src/components/ListComponent.js
import React from 'react';
import './ListComponent.css';

function ListComponent() {
  const items = [
    { id: 1, text: 'React - це бібліотека для створення UI' },
    { id: 2, text: 'Компоненти - основні будівельні блоки' },
    { id: 3, text: 'JSX дозволяє писати HTML-подібний синтаксис в JavaScript' },
    { id: 4, text: 'Стан (state) та пропси (props) - ключові концепції' },
  ];

  return (
    <div className="list-container">
      <h2>Цікаві факти про React:</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListComponent;
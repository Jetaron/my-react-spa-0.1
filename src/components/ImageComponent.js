// src/components/ImageComponent.js
import React from 'react';
import './ImageComponent.css';

const imageUrl = process.env.PUBLIC_URL + '/images/my-react-logo.png';

function ImageComponent() {
  return (
    <div className="image-container">
      <h2>Картинка дня:</h2>
      <img src={imageUrl} alt="Логотип React" className="displayed-image" />
      <p>Це тестове зображення для демонстрації.</p>
    </div>
  );
}

export default ImageComponent;
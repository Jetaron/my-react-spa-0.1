// src/components/SliderComponent.js
import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import './SliderComponent.css';

const SOCKET_SERVER_URL = 'http://localhost:4000';

function SliderComponent() {
  const [sliderValue, setSliderValue] = useState(50);
  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = io(SOCKET_SERVER_URL);
    console.log('Підключення до Socket.IO сервера...');

    socketRef.current.on('sliderUpdate', (newValue) => {
      console.log('Отримано sliderUpdate від сервера:', newValue);
      setSliderValue(newValue);
    });

    return () => {
      if (socketRef.current) {
        console.log('Відключення від Socket.IO сервера...');
        socketRef.current.disconnect();
      }
    };
  }, []);

  const handleSliderChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setSliderValue(newValue);

    if (socketRef.current) {
      console.log('Надсилаємо sliderChange на сервер:', newValue);
      socketRef.current.emit('sliderChange', newValue);
    }
  };

  return (
    <div className="slider-container">
      <h3>Синхронізований слайдер</h3>
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
        className="slider"
      />
      <p>Поточне значення: {sliderValue}</p>
    </div>
  );
}

export default SliderComponent;
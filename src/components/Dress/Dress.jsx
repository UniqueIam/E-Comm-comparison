// src/components/DressList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dress.css'; // Add a CSS file for styling

const Dress = () => {
  const [dresses, setDresses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/dresses')
      .then(response => {
        setDresses(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the dresses!', error);
      });
  }, []);

  return (
    <div className="dress-list">
      <h1>Dress List</h1>
      <div className="dresses">
        {dresses.map(dress => (
          <div key={dress.id} className="dress-item">
            <img src={dress.image} alt={dress.name} className="dress-image" />
            <h2>{dress.name}</h2>
            <p>Size: {dress.size}</p>
            <p>Price: ${dress.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dress;

import React from 'react';
import '../photoCard/styles.css';

export const PhotoCard = ({ name, location, image, description }) => (
  <div className="photo-list">
    <div className="card">
      <img className="card--image" alt={description} src={image} width="50%" height="50%" />
      <div>
        <h2>{name}</h2>
        <p>{location}</p>
      </div>
    </div>
  </div>
);

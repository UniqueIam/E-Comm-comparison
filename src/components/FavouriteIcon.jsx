import React, { useState } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import './FavouriteIcon.css';

const FavoriteIcon = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="favorite-icon" onClick={toggleFavorite}>
      {isFavorited ? <MdFavorite /> : <MdFavoriteBorder />}
    </div>
  );
};

export default FavoriteIcon;

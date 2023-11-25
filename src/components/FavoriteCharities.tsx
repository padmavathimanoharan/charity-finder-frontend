// components/FavoriteCharities.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const FavoriteCharities: React.FC = () => {
  // Fetch and display favorite charities from local storage
  const favoriteCharities = JSON.parse(localStorage.getItem('favoriteCharities') || '[]');

  return (
    <div>
      <h2>Favorite Charities</h2>
      <ul>
        {favoriteCharities.map((charity: any) => (
          <li key={charity.id}>
            <Link to={`/charity/${charity.id}`}>{charity.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteCharities;

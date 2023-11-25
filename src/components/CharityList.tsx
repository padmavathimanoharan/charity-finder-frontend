// components/CharityList.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface CharityListProps {
  charities: Array<{ id: string; name: string }>;
}

const CharityList: React.FC<CharityListProps> = ({ charities }) => {
  return (
    <ul>
      {charities.map((charity) => (
        <li key={charity.id}>
          <Link to={`/charity/${charity.id}`}>{charity.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default CharityList;

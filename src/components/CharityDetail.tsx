// components/CharityDetail.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface CharityDetailProps {}

const CharityDetail: React.FC<CharityDetailProps> = () => {
  const { id } = useParams<{ id: string }>();
  const [charity, setCharity] = useState<any>(null);

  useEffect(() => {
    const fetchCharity = async () => {
      try {
        const response = await axios.get(
          `https://partners.every.org/v0.2/nonprofits/${id}?apiKey=${
            import.meta.env.VITE_API_KEY
          }`
        );
        setCharity(response.data);
      } catch (error) {
        console.error("Error fetching charity details:", error);
      }
    };

    fetchCharity();
  }, [id]);

  if (!charity) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{charity.name}</h2>
      <p>{charity.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default CharityDetail;

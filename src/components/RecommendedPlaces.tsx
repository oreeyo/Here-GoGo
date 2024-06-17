import React from 'react';
import './RecommendedPlaces.css';

const RecommendedPlaces: React.FC = () => {
  return (
    <div className="recommended-places">
      <h2>인기 추천 숙소</h2>
      <div className="places">
        <div className="place">숙소1</div>
        <div className="place">숙소2</div>
        <div className="place">숙소3</div>
      </div>
    </div>
  );
};

export default RecommendedPlaces;

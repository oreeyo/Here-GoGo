import React from 'react';
import './PopularDestinations.css';

const PopularDestinations: React.FC = () => {
  return (
    <div className="popular-destinations">
      <h2>국내 인기 여행지</h2>
      <div className="destinations">
        <div className="destination">제주도</div>
        <div className="destination">서울</div>
        <div className="destination">부산</div>
      </div>
    </div>
  );
};

export default PopularDestinations;

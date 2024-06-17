import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar: React.FC = () => {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [guests, setGuests] = useState<number>(1);
  return (
    <div className="search-bar">
      <p>국내부터 해외까지</p>
      <p>여행할때 여긴어때</p>

      <div className="tabs">
        <button className="tab active">국내 숙소</button>
        <button className="tab">해외 숙소</button>
      </div>
      <div className="search-box">
        <input type="text" placeholder="여행지나 숙소를 검색해보세요" className="search-input" />
        <div>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="date-input"
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="date-input"
          />
        </div>
        <input
          type="number"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          className="guests-input"
          min="1"
        />
        <button className="search-button">검색</button>
      </div>
    </div>
  );
};

export default SearchBar;

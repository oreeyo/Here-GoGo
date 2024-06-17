import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

const SearchBar: React.FC = () => {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [guests, setGuests] = useState<number>(1);
  const [destination, setDestination] = useState<string>('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/results', { state: { destination, startDate, endDate, guests } });
  };

  return (
    <div className="search-bar">
      <div className="tabs">
        <button className="tab active">국내 숙소</button>
        <button className="tab">해외 숙소</button>
      </div>
      <div className="search-box">
        <input
          type="text"
          placeholder="여행지나 숙소를 검색해보세요"
          className="search-input"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
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
        <input
          type="number"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          className="guests-input"
          min="1"
        />
        <button className="search-button" onClick={handleSearch}>
          검색
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

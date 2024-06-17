import React from 'react';
import { useLocation } from 'react-router-dom';
import './SearchResults.css';

const SearchResults: React.FC = () => {
    const location = useLocation();
    const { destination, startDate, endDate, guests } = location.state as any;

    return (
        <div className="search-results">
            <header className="results-header">
                <h1>‘{destination}’ 검색 결과</h1>
                <p>{startDate} - {endDate} | 인원 {guests}</p>
            </header>
            <div className="results-content">
                <div className="filter-sidebar">
                    <h2>필터</h2>
                    {/* 필터 내용 추가 */}
                </div>
                <div className="results-list">
                    <div className="result-item">
                        <img src="hotel-image-url" alt="호텔 이미지" />
                        <div className="result-details">
                            <h3>호텔 이름</h3>
                            <p>호텔 설명</p>
                            <p>가격 정보</p>
                        </div>
                    </div>
                    {/* 추가 검색 결과 항목 */}
                </div>
            </div>
        </div>
    );
};

export default SearchResults;

import React from 'react';
import './EventSection.css';

const EventSection: React.FC = () => {
  return (
    <div className="event-section">
      <h2>이벤트</h2>
      <div className="events">
        <div className="event">이벤트1</div>
        <div className="event">이벤트2</div>
        <div className="event">이벤트3</div>
      </div>
    </div>
  );
};

export default EventSection;

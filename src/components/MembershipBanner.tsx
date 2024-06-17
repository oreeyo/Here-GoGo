import React from 'react';
import './MembershipBanner.css';

const MembershipBanner: React.FC = () => {
  return (
    <div className="membership-banner">
      <h3>회원가입만 해도 받는 엘리트 멤버십 혜택</h3>
      <button>혜택 자세히 보기</button>
    </div>
  );
};

export default MembershipBanner;

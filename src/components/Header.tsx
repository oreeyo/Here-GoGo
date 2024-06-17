import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">여긴어때</div>
      <nav>
        <ul>
          <li>로그인/회원가입</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

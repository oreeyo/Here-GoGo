import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import EventSection from './components/EventSection';
import PopularDestinations from './components/PopularDestinations';
import MembershipBanner from './components/MembershipBanner';
import RecommendedPlaces from './components/RecommendedPlaces';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <EventSection />
      <PopularDestinations />
      <MembershipBanner />
      <RecommendedPlaces />
    </div>
  );
};

export default App;

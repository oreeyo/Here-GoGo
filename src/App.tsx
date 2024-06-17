import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import EventSection from './components/EventSection';
import PopularDestinations from './components/PopularDestinations';
import MembershipBanner from './components/MembershipBanner';
import RecommendedPlaces from './components/RecommendedPlaces';
import SearchResults from './components/SearchResults';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <EventSection />
                <PopularDestinations />
                <MembershipBanner />
                <RecommendedPlaces />
              </>
            }
          />
          <Route path="/results" element={<SearchResults />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

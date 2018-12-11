import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import WeatherList from './components/WeatherList';

const App = () => {
  return (
    <div>
      <Header />
      <SearchInput />
      <WeatherList />
      <Footer />
    </div>
  );
};

export default App;

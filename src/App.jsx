import React, { Component } from 'react';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import WeatherList from './components/WeatherList';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchInput />
        <WeatherList />
      </div>
    );
  }
}

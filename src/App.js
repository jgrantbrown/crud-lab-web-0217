import React, { Component } from 'react';
import RestaurantInput from './components/restaurants/RestaurantInput'
import Restaurants from './components/restaurants/Restaurants';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <RestaurantInput />
        <Restaurants />
      </div>
    );
  }
};

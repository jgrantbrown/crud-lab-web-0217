import React, { Component } from 'react';
import { connect } from 'react-redux';
import Restaurant from './Restaurant';


class Restaurants extends Component {

  const restaurantlist =  this.props.restaurants.map((restaurant, index) => {
              return   <Restaurant key={index} text={restaurant.text} />;
    })


  render() {

    return(
      <ul>
        Restaurants Component:
         {resturantlist}
      </ul>
    );
  }
};

const mapStateToProps = (state) =>{
  return { restaurants: state.restaurants }
}

// Need to connect mappropstostate using connect
export default connect(mapStateToProps)(Restaurants);

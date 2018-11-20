import React, { Component } from 'react';
import {addRestaurant} from '../../actions/restaurantactions';
import { connect } from 'react-redux';

class RestaurantInput extends Component {

  constructor(props) {
  super(props);
  this.state = {
    text: ''
  };
  }

  handleChange = (event) =>{
  this.setState({
    text: event.target.value
  })
  }

  submitRestaurant = event => {
    event.preventDefault()

    // Pass the local submit state to action reducer
    this.props.addRestaurant(this.state.text)

    // this.store.dispatch({type: 'ADD_RESTAURANT',
    // payload: this.state})
    // Reset Local State to blank after submisson
    this.setState({
      text: " "
    })
  }

  render() {
    return (
      <div>

         <form onSubmit={event => this.submitRestaurant(event)} >
          <input
            type="text"
            value={this.state.text}
            onChange={(event)=>this.handleChange(event)}
            />
            <span></span>
            <input type="submit" />
        </form>
      </div>
    );
  }
};



export default connect(null, { addRestaurant })(RestaurantInput);

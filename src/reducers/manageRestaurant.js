
import cuid from 'cuid';

export const cuidFn = cuid;

export default function manageRestaurants(state={
  restaurants:[]
}, action) {

  switch(action.type){

    case 'ADD_RESTAURANT':

      const restaurant={
        id: cuidFn(),
        text: action.payload
      }
      console.log("Restaurant:",restaurant)
      console.log("State:",state)
      console.log("comnbied:",[...state.restaurants,restaurant])
      return ([...state.restaurants,restaurant])

    default:

      return state
  }
}

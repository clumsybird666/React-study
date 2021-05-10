import { SUB_NUMBER, ADD_NUMBER } from './constants.js'

const defaultState = {
  counter: 0
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num }
      break;  
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num }
      break;
    default:
      return state
      break;
  }
}

export default reducer
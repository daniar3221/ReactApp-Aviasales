const defaultState = [];

const ticketsReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'GET-TICKETS':
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export default ticketsReducer;

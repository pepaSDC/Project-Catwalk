export default (state, action) => {
  switch(action.type) {
    case 'GET_ALL_REVIEWS':
      return {
        ...state,
        allReviews: action.payload
      }
    case 'UPDATE_AVERAGE_RATING':
      return {
        ...state,
        averageRating: action.payload
      }
    case 'GET_METADATA':
      return {
        ...state,
        meta: action.payload
      }
    default:
      return state;
  }
}
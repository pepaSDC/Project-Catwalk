export default (state, action) => {
  switch(action.type) {
    case 'GET_ALL_REVIEWS':
      return {
        ...state,
        allReviews: action.all,
        averageRating: action.average,
        totalRatings: action.total,
        meta: action.meta
      };
    case 'UPDATE_SORT':
      return {
        ...state,
        sortBy: action.sortBy
      }
    default:
      return state;
  }
}
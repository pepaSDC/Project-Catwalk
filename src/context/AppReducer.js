export default (state, action) => {
  switch(action.type) {
    case 'GET_ALL_PRODUCTS':
      return {
        ...state,
        allProducts: action.payload
      }
    case 'UPDATE_CURRENT_ID':
      return {
        ...state,
        currentProductId: action.payload
      }
      default:
        return state;
  }
}
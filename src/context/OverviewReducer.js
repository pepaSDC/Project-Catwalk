export default (state, action) => {
  switch(action.type) {
    case 'GET_PRODUCT_INFO':
      return {
        ...state,
        productInfo: action.payload
      }
    case 'GET_PRODUCT_STYLES':
      return {
        ...state,
        productStyles: action.payload
      }
      default:
        return state;
  }
}
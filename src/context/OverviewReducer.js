export default (state, action) => {
  switch(action.type) {
    case 'GET_PRODUCT_INFO':
      return {
        ...state,
        productInfoPayload: action.payload
      }
    case 'GET_PRODUCT_STYLES':
      return {
        ...state,
        productStylesPayload: action.payload
      }
      default:
        return state;
  }
}
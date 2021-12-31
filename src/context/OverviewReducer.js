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
    case 'UPDATE_CURRENT_STYLE':
      return {
        ...state,
        featuredStyleIndex: action.payload
      }
    case 'UPDATE_FEATURED_PHOTO':
      return {
        ...state,
        featuredProductImageIndex: action.payload
      }
    case 'UPDATE_SELECTED_ITEM_SKU':
      return {
      ...state,
      selectedItemSkuNumber: action.payload
      }
    case 'RESET_PRODUCT_VALUE':
      return {
        ...state,
        productStyles: action.payload
      }
    default:
        return state;
  }
}
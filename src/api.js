import API_Token from '../config.js';
import axios from 'axios';

const api = {
    address: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp',

    getAllProducts: (store) => {
      axios.get(`${api.address}/products`, {
        headers: {
          Authorization: API_Token
        },
        params: {
          page: 1,
          count: 2000
        }
      })
        .then((results) => store(results))
        .catch((err) => console.log(err))
    },

    getProductInfo: () => {},
    getProductStyles: () => {},
    getRelatedProducts: () => {},
    getReviews: () => {},
    getQA: () => {},
    postCart: () => {},
    getCart: () => {}

}

export default api;
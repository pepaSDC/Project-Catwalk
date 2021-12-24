const API_Token = require('../config.js');
const axios = require('axios');

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
        .then((results) => store(null, results))
        .catch((err) => store(err));
    },

    getProductInfo: (id, callback) => {
      axios.get(`${api.address}/products/${id}`, {
        headers: {
          Authorization: API_Token
        }
      })
        .then( (data) => callback(null, data) )
        .catch( (err) => callback(err) );
    },

    getProductStyles: (id, callback) => {
      axios.get(`${api.address}/products/${id}/styles`, {
        headers: {
          Authorization: API_Token
        }
      })
        .then( (data) => callback(null, data) )
        .catch( (err) => callback(err) );
    },

    getRelatedProducts: (id, callback) => {
      axios.get(`${api.address}/products/${id}/related`, {
        headers: {
          Authorization: API_Token
        }
      })
        .then( (data) => callback(null, data) )
        .catch( (err) => callback(err) );
    },

    getReviews: (id, sortBy, callback) => {
      axios.get(`${api.address}/reviews`, {
        headers: {
          Authorization: API_Token
        },
        params: {
          page: 1,
          count: 50,
          sort: sortBy,
          product_id: id
        }
      })
        .then( (data) => callback(null, data) )
        .catch( (err) => callback(err) );
    },
    getQA: () => {},
    postCart: () => {},
    getCart: () => {}

}

module.exports = api;
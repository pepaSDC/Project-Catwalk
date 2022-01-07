const API_Token = require('../config.js');
const axios = require('axios');
//import Promise from 'bluebird';

const api = {
    address: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp',

    // Products Info
    getAllProducts: (store) => {
      return axios({
        method: 'GET',
          url: `${api.address}/products`,
          params: {
            page: 1,
            count: 2000
          }
      })
      .then((results) => store(null, results))
    },

    getProductInfo: (id, callback) => {
      axios({
        method: 'GET',
          url: `${api.address}/products/${id}`,
          headers: {
            Authorization: API_Token
          }
      })
      .then( (data) => callback(null, data) )
    },

    getProductStyles: (id, callback) => {
      return axios({
        method: 'GET',
          url: `${api.address}/products/${id}/styles`,
          headers: {
            Authorization: API_Token
          }
      })
      .then( (data) => callback(null, data) )
    },

    getRelatedProducts: (id, callback) => {
      return axios({
        method: 'GET',
          url: `${api.address}/products/${id}/related`,
          headers: {
            Authorization: API_Token
          }
      })
      .then( (data) => callback(null, data) )
    },

    // Reviews Info
    getReviews: (id, sortBy, callback) => {
      return axios({
        method: 'GET',
          url: `${api.address}/reviews`,
          headers: {
            Authorization: API_Token
          },
          params: {
            page: 1,
            count: 100,
            sort: sortBy,
            product_id: id
          }
      })
      .then( (data) => callback(null, data) )
    },

    //Reviews Meta
    getMetaReviews: (id, callback) => {
      return axios({
        method: 'GET',
          url: `${api.address}/reviews/meta`,
          headers: {
            Authorization: API_Token
          },
          params: {
            product_id: id
          }
      })
      .then( (data) => callback(null, data) )
    },

    //Add a review
    addReview: (body, callback) => {
      return axios({
        method: 'POST',
          url: `${api.address}/reviews`,
          headers: {
            Authorization: API_Token
          }
      })
      .then( (data) => callback(null, data) )
    },
    //Reviews Meta
    updateHelpfulness: (id, callback) => {
      return axios({
        method: 'PUT',
          url: `${api.address}/reviews/${id}/helpful`,
          headers: {
            Authorization: API_Token
          },
          params: {
            review_id: id
          }
      })
      .then( (data) => callback(null, data) )
    },
    //
    updateReport: (id, callback) => {
      return axios({
        method: 'PUT',
          url: `${api.address}/reviews/${id}/report`,
          headers: {
            Authorization: API_Token
          },
          params: {
            review_id: id
          }
      })
      .then( (data) => callback(null, data) )
    },
    // Questions and Answers Info
    getQuestions: (pge, cnt, id, callback) => {
      return axios({
        method: 'GET',
          url: `${api.address}/qa/questions`,
          headers: {
            Authorization: API_Token
          },
          params: {
            page: pge,
            count: cnt,
            product_id: id
          }
      })
      .then( (data) => callback(null, data) )
    },

    getAnswers: (pge, cnt, id, callback) => {
      return axios({
        method: 'GET',
          url: `${api.address}/qa/questions/${id}/answers?page=${pge}&count=${cnt}`,
          headers: {
            Authorization: API_Token
          }
      })
      .then( (data) => callback(null, data) )
    },

    addQuestion: (bodyText, nameText, emailText, id, callback) => {

      return axios({
        method: 'POST',
          url: `${api.address}/qa/questions`,
          headers: {
            Authorization: API_Token
          },
          data: {
            body: bodyText,
            name: nameText,
            email: emailText,
            product_id: id
          }

      })
      .then( (data) => callback(null, data) )
    },

    addAnswer: (bodyText, nameText, emailText, photoLinks, id, callback) => {
      return axios({
          method: 'POST',
          url: `${api.address}/qa/questions`,
          headers: {
            Authorization: API_Token
          },
          data: {
            body: bodyText,
            name: nameText,
            email: emailText,
            photos: photoLinks
          }
      })
      .then( (data) => callback(null, data) )
    },


    markQuestion: (type, id, callback) => {
      return axios({
        method: 'PUT',
          url: `${api.address}/qa/questions/${id}/${type}`,
          headers: {
            Authorization: API_Token
          }
      })
      .then( (data) => callback(null, data) )
    },

    markAnswer: (type, id, callback) => {
      return axios({
        method: 'PUT',
          url: `${api.address}/qa/answers/${id}/${type}`,
          headers: {
            Authorization: API_Token
          }
      })
      .then( (data) => callback(null, data) )
    },

    getCart: () => {
      return axios({
        method: 'GET',
          url: `${api.address}/cart`,
          headers: {
            Authorization: API_Token
          }
      })
      .then( (data) => callback(null, data) )
    },

    postCart: (sku, quantity, callback) => {
      return axios({
        method: 'POST',
        url: `${api.address}/cart`,
        headers: {
          Authorization: API_Token
        },
        data: {
          sku_id: sku,
          count: quantity
        }
      })
      .then( (data) => callback(null, data) )
    },
}

module.exports = api;
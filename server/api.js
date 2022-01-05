const API_Token = require('../config.js');
const axios = require('axios');

const api = {
    address: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp',

    // Products Info
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

    // Reviews Info
    getReviews: (id, sortBy, callback) => {
      axios.get(`${api.address}/reviews`, {
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
        .catch( (err) => callback(err) );
    },

    //Reviews Meta
    getMetaReviews: (id, callback) => {
      axios.get(`${api.address}/reviews/meta`, {
        headers: {
          Authorization: API_Token
        },
        params: {
          product_id: id
        }
      })
        .then( (data) => callback(null, data) )
        .catch( (err) => callback(err) );
    },

    //Add a review
    addReview: (body, callback) => {
      axios.post(`${api.address}/reviews`, body, {
        headers: {
          Authorization: API_Token
        }})
        .then( (data) => callback(null, data) )
        .catch( (err) => callback(err) );
    },
    //Reviews Meta
    updateHelpfulness: (id, callback) => {
      axios.put(`${api.address}/reviews/${id}/helpful`,'', {
        headers: {
          Authorization: API_Token
        },
        params: {
          review_id: id
        }
      })
        .then( (data) => callback(null, data) )
        .catch( (err) => callback(err) );
    },
    //
    updateReport: (id, callback) => {
      axios.put(`${api.address}/reviews/${id}/report`,'', {
        headers: {
          Authorization: API_Token
        },
        params: {
          review_id: id
        }
      })
        .then( (data) => callback(null, data) )
        .catch( (err) => callback(err) );
    },
    // Questions and Answers Info
    getQuestions: (pge, cnt, id, callback) => {
      axios.get(`${api.address}/qa/questions`, {
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
        .catch( (err) => callback(err) );
    },

    getAnswers: (pge, cnt, id, callback) => {
      axios.get(`${api.address}/qa/questions/${id}/answers?page=${pge}&count=${cnt}`, {
        headers: {
          Authorization: API_Token
        }
      })
        .then( (data) => callback(null, data) )
        .catch( (err) => callback(err) );
    },

    addQuestion: (bodyText, nameText, emailText, id, callback) => {
      let data = {
        body: bodyText,
        name: nameText,
        email: emailText,
        product_id: id
      };
      axios.post(`${api.address}/qa/questions`, data, {
        headers: {
          Authorization: API_Token
        }
      })
        .then( (response) => callback(null, response) )
        .catch( (err) => callback(err) );
    },

    addAnswer: (bodyText, nameText, emailText, photoLinks, id, callback) => {
      let data = {
        body: bodyText,
        name: nameText,
        email: emailText,
        photos: photoLinks
      };
      axios.post(`${api.address}/qa/questions/${id}/answers`, data, {
        headers: {
          Authorization: API_Token
        }
      })
        .then( (response) => callback(null, response) )
        .catch( (err) => callback(err) );
    },

    markQuestion: (type, id, callback) => {
      axios.put(`${api.address}/qa/questions/${id}/${type}`, '', {
        headers: {
          Authorization: API_Token
        }
      })
        .then( (response) => callback(null, response) )
        .catch( (err) => callback(err) );
    },

    markAnswer: (type, id, callback) => {
      axios.put(`${api.address}/qa/answers/${id}/${type}`, '', {
        headers: {
          Authorization: API_Token
        }
      })
        .then( (response) => callback(null, response) )
        .catch( (err) => callback(err) );
    },

    // Cart Info
    postCart: () => {},
    getCart: () => {}

}

module.exports = api;
/*
address: https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/reviews
headers: {
  Authorization: <Github token>
}
query: {
  page: 1, (defaults to 1)
  count: 5, (defaults to 5)
  sort: newest || helpful || relevant
  product_id: 40344 (must be supplied)
}
*/

cont exampleReviews = {
  "product": "40344",
  "page": 0,
  "count": 5,
  "results": [
      {
          "review_id": 841407,
          "rating": 5,
          "summary": "Best Ever! ",
          "recommend": true,
          "response": null,
          "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ",
          "date": "2021-09-23T00:00:00.000Z",
          "reviewer_name": "chester",
          "helpfulness": 3,
          "photos": [
              {
                  "id": 1595448,
                  "url": "https://res.cloudinary.com/drbwyfh4x/image/upload/v1632370529/lixlgtng4vu3kyp4p8ah.png"
              }
          ]
      },
      {
          "review_id": 841207,
          "rating": 2,
          "summary": "Not a fan",
          "recommend": false,
          "response": null,
          "body": "I did not like this product it was not good I did not like it.",
          "date": "2021-09-19T00:00:00.000Z",
          "reviewer_name": "notafan",
          "helpfulness": 1,
          "photos": []
      },
      {
          "review_id": 841336,
          "rating": 5,
          "summary": "Very good",
          "recommend": true,
          "response": null,
          "body": "lorem ipsum",
          "date": "2021-09-22T00:00:00.000Z",
          "reviewer_name": "tester",
          "helpfulness": 0,
          "photos": [
              {
                  "id": 1595426,
                  "url": "https://res.cloudinary.com/drbwyfh4x/image/upload/v1632328878/pfrvwz00bnqhjympmxg4.png"
              },
              {
                  "id": 1595427,
                  "url": "https://res.cloudinary.com/drbwyfh4x/image/upload/v1632328889/xggvxej6ojsjn0r4j5eg.png"
              }
          ]
      },
      {
          "review_id": 841198,
          "rating": 1,
          "summary": "Test#5",
          "recommend": false,
          "response": null,
          "body": "TestTestTestTestTestTestTestTestTestTestTestTestTestTest",
          "date": "2021-09-18T00:00:00.000Z",
          "reviewer_name": "Test",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 1095126,
          "rating": 5,
          "summary": "dasfdsafd",
          "recommend": true,
          "response": null,
          "body": "fdsafef d s f d  n j d s k h f l d k b f du e2dsfa",
          "date": "2021-11-29T00:00:00.000Z",
          "reviewer_name": "dafas",
          "helpfulness": 0,
          "photos": []
      }
  ]
}

export default exampleReviews;
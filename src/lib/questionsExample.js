/*
address: https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/qa/questions
headers: {
  Authorization: <Github token>
}
query: {
  page: 1, (defaults to 1)
  count: 5, (defaults to 5)
  product_id: number (must be supplied)
}
*/

const exampleQuestions = {
  "product_id": "40344",
  "results": [
      {
          "question_id": 553458,
          "question_body": "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?",
          "question_date": "2021-11-10T00:00:00.000Z",
          "asker_name": "Anonymous",
          "question_helpfulness": 4449,
          "reported": false,
          "answers": {
              "5181052": {
                  "id": 5181052,
                  "body": "YES, I want ",
                  "date": "2021-11-10T00:00:00.000Z",
                  "answerer_name": "tes",
                  "helpfulness": 0,
                  "photos": []
              },
              "5181054": {
                  "id": 5181054,
                  "body": "asdasdasda",
                  "date": "2021-11-10T00:00:00.000Z",
                  "answerer_name": "xcxzc",
                  "helpfulness": 0,
                  "photos": []
              },
              "5181055": {
                  "id": 5181055,
                  "body": "what is ok",
                  "date": "2021-11-10T00:00:00.000Z",
                  "answerer_name": "sdsad",
                  "helpfulness": 0,
                  "photos": []
              },
              "5181056": {
                  "id": 5181056,
                  "body": "hello",
                  "date": "2021-11-10T00:00:00.000Z",
                  "answerer_name": "asdsa",
                  "helpfulness": 0,
                  "photos": []
              },
              "5181057": {
                  "id": 5181057,
                  "body": "HELLO WORLD",
                  "date": "2021-11-10T00:00:00.000Z",
                  "answerer_name": "asdasd",
                  "helpfulness": 0,
                  "photos": []
              },
              "5181404": {
                  "id": 5181404,
                  "body": "1",
                  "date": "2021-11-18T00:00:00.000Z",
                  "answerer_name": "2",
                  "helpfulness": 0,
                  "photos": []
              },
              "5181405": {
                  "id": 5181405,
                  "body": "1",
                  "date": "2021-11-18T00:00:00.000Z",
                  "answerer_name": "2",
                  "helpfulness": 0,
                  "photos": []
              },
              "5181406": {
                  "id": 5181406,
                  "body": "1",
                  "date": "2021-11-18T00:00:00.000Z",
                  "answerer_name": "2",
                  "helpfulness": 0,
                  "photos": []
              },
              "5181407": {
                  "id": 5181407,
                  "body": "1",
                  "date": "2021-11-18T00:00:00.000Z",
                  "answerer_name": "2",
                  "helpfulness": 0,
                  "photos": [
                      "!231080912"
                  ]
              },
              "5181408": {
                  "id": 5181408,
                  "body": "1",
                  "date": "2021-11-18T00:00:00.000Z",
                  "answerer_name": "2",
                  "helpfulness": 0,
                  "photos": []
              },
              "5181409": {
                  "id": 5181409,
                  "body": "1",
                  "date": "2021-11-18T00:00:00.000Z",
                  "answerer_name": "2",
                  "helpfulness": 0,
                  "photos": [
                      "a̷̯̠̙͚̳̘̜̱̼̤͉̳̰̿f̶̛͍̖͚͔̗͉̤͉̣̙̝̫́̍́̏́̎̆̀͐̚͜͝͝ḑ̵̛̩̖̦̞͇̬̩͔͌͛̈́s̵̨͓̠̿ṣ̶̢̢̺̖͕̘͕̮̻̹̯̝͔͆́̏̀̆͛͛̉̆̚̚͝ͅä̶̘͍̣̩̦͚̘̹̱̝́̐͂͘̕ͅd̶̖͍̱̄̈́͑̍̄"
                  ]
              }
          }
      },
      {
          "question_id": 426417,
          "question_body": "How do you feel the product?",
          "question_date": "2021-09-23T00:00:00.000Z",
          "asker_name": "Maple",
          "question_helpfulness": 52,
          "reported": false,
          "answers": {
              "3990394": {
                  "id": 3990394,
                  "body": "dsafdsaf",
                  "date": "2021-09-26T00:00:00.000Z",
                  "answerer_name": "fdsafsad",
                  "helpfulness": 1,
                  "photos": []
              },
              "5087444": {
                  "id": 5087444,
                  "body": "I'm answering a question about this product here. Here is my answer. I'm totally just filling space so don't bother reading this stuff",
                  "date": "2021-11-05T00:00:00.000Z",
                  "answerer_name": "user1234",
                  "helpfulness": 1,
                  "photos": []
              },
              "5087514": {
                  "id": 5087514,
                  "body": "I feel things",
                  "date": "2021-11-06T00:00:00.000Z",
                  "answerer_name": "user1234567",
                  "helpfulness": 0,
                  "photos": []
              },
              "5087517": {
                  "id": 5087517,
                  "body": "idk things",
                  "date": "2021-11-06T00:00:00.000Z",
                  "answerer_name": "dude123",
                  "helpfulness": 0,
                  "photos": []
              },
              "5087526": {
                  "id": 5087526,
                  "body": "I feel great!",
                  "date": "2021-11-06T00:00:00.000Z",
                  "answerer_name": "bt",
                  "helpfulness": 1,
                  "photos": []
              },
              "5087603": {
                  "id": 5087603,
                  "body": "gg",
                  "date": "2021-11-07T00:00:00.000Z",
                  "answerer_name": "eg",
                  "helpfulness": 0,
                  "photos": []
              },
              "5087654": {
                  "id": 5087654,
                  "body": "Yes",
                  "date": "2021-11-09T00:00:00.000Z",
                  "answerer_name": "tester",
                  "helpfulness": 0,
                  "photos": []
              },
              "5087655": {
                  "id": 5087655,
                  "body": "Hallo",
                  "date": "2021-11-09T00:00:00.000Z",
                  "answerer_name": "jeeeeeef",
                  "helpfulness": 0,
                  "photos": []
              },
              "5087682": {
                  "id": 5087682,
                  "body": "Hi",
                  "date": "2021-11-09T00:00:00.000Z",
                  "answerer_name": "tester",
                  "helpfulness": 11,
                  "photos": [
                      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-flower-bouquet-1588610191.jpg?crop=1.00xw:0.892xh;0,0.108xh&resize=980:*"
                  ]
              },
              "5087683": {
                  "id": 5087683,
                  "body": "Hi",
                  "date": "2021-11-09T00:00:00.000Z",
                  "answerer_name": "tester",
                  "helpfulness": 0,
                  "photos": [
                      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-flower-bouquet-1588610191.jpg?crop=1.00xw:0.892xh;0,0.108xh&resize=980:*"
                  ]
              },
              "5087703": {
                  "id": 5087703,
                  "body": "Hi",
                  "date": "2021-11-09T00:00:00.000Z",
                  "answerer_name": "tester",
                  "helpfulness": 0,
                  "photos": [
                      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spring-flowers-1613759017.jpg?crop=0.669xw:1.00xh;0.0635xw,0&resize=640:*"
                  ]
              },
              "5087706": {
                  "id": 5087706,
                  "body": "Yes",
                  "date": "2021-11-09T00:00:00.000Z",
                  "answerer_name": "tester1",
                  "helpfulness": 0,
                  "photos": [
                      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spring-flowers-1613759017.jpg?crop=0.669xw:1.00xh;0.0635xw,0&resize=640:*",
                      "https://media.self.com/photos/5ea9f52ea469834e6f5489e6/1:1/w_3204,h_3204,c_limit/peony_flowers_bouquet.jpg"
                  ]
              },
              "5087707": {
                  "id": 5087707,
                  "body": "Yes",
                  "date": "2021-11-09T00:00:00.000Z",
                  "answerer_name": "tester1",
                  "helpfulness": 0,
                  "photos": [
                      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spring-flowers-1613759017.jpg?crop=0.669xw:1.00xh;0.0635xw,0&resize=640:*",
                      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/diy-paper-flowers-1582662788.jpg?crop=0.631xw:0.945xh;0.0128xw,0.0504xh&resize=640:*",
                      "https://media.self.com/photos/5ea9f52ea469834e6f5489e6/1:1/w_3204,h_3204,c_limit/peony_flowers_bouquet.jpg"
                  ]
              },
              "5180925": {
                  "id": 5180925,
                  "body": "Could be",
                  "date": "2021-11-09T00:00:00.000Z",
                  "answerer_name": "tester",
                  "helpfulness": 0,
                  "photos": []
              },
              "5180926": {
                  "id": 5180926,
                  "body": "Could be",
                  "date": "2021-11-09T00:00:00.000Z",
                  "answerer_name": "tester",
                  "helpfulness": 0,
                  "photos": []
              },
              "5180927": {
                  "id": 5180927,
                  "body": "Yes",
                  "date": "2021-11-09T00:00:00.000Z",
                  "answerer_name": "tester3",
                  "helpfulness": 0,
                  "photos": []
              },
              "5180928": {
                  "id": 5180928,
                  "body": "Yes",
                  "date": "2021-11-09T00:00:00.000Z",
                  "answerer_name": "tester3",
                  "helpfulness": 0,
                  "photos": []
              },
              "5180929": {
                  "id": 5180929,
                  "body": "Hello",
                  "date": "2021-11-09T00:00:00.000Z",
                  "answerer_name": "tester",
                  "helpfulness": 0,
                  "photos": []
              },
              "5180930": {
                  "id": 5180930,
                  "body": "Could be",
                  "date": "2021-11-09T00:00:00.000Z",
                  "answerer_name": "tester1",
                  "helpfulness": 0,
                  "photos": [
                      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/diy-paper-flowers-1582662788.jpg?crop=0.631xw:0.945xh;0.0128xw,0.0504xh&resize=640:*"
                  ]
              },
              "5180987": {
                  "id": 5180987,
                  "body": "Hello",
                  "date": "2021-11-09T00:00:00.000Z",
                  "answerer_name": "tester1",
                  "helpfulness": 0,
                  "photos": [
                      "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg"
                  ]
              },
              "5181004": {
                  "id": 5181004,
                  "body": "Hello",
                  "date": "2021-11-10T00:00:00.000Z",
                  "answerer_name": "tester",
                  "helpfulness": 0,
                  "photos": []
              },
              "5181005": {
                  "id": 5181005,
                  "body": "Could be",
                  "date": "2021-11-10T00:00:00.000Z",
                  "answerer_name": "tester3",
                  "helpfulness": 0,
                  "photos": []
              },
              "5181038": {
                  "id": 5181038,
                  "body": "No",
                  "date": "2021-11-10T00:00:00.000Z",
                  "answerer_name": "shion",
                  "helpfulness": 0,
                  "photos": [
                      "https://cdn.discordapp.com/attachments/452414661971673088/906403719673954314/unknown.png"
                  ]
              },
              "5181039": {
                  "id": 5181039,
                  "body": "yes",
                  "date": "2021-11-10T00:00:00.000Z",
                  "answerer_name": "shion",
                  "helpfulness": 0,
                  "photos": [
                      "https://cdn.discordapp.com/attachments/452414661971673088/906403719673954314/unknown.png"
                  ]
              },
              "5181042": {
                  "id": 5181042,
                  "body": "I'm a corporate pilot and I frequently pack for 3-5 day trips. This bag fits everything I need. It's a little more snug than the previous 22 bag but that makes sense as this is a slightly smaller bag overall. I purchased this bag because the handles on my previous bag were beginning to wear, I wanted the extra protection of a hard shell, and I wanted a separate laptop/tech compartment so I didn't have to carry an additional backpack or risk the laptop being bent inside the suitcase. And also I didn't want to pay $4-500 on an airline quality case.",
                  "date": "2021-11-10T00:00:00.000Z",
                  "answerer_name": "rirrii",
                  "helpfulness": 0,
                  "photos": []
              },
              "5181043": {
                  "id": 5181043,
                  "body": "I'm a corporate pilot and I frequently pack for 3-5 day trips. This bag fits everything I need. It's a little more snug than the previous 22 bag but that makes sense as this is a slightly smaller bag overall. I purchased this bag because the handles on my previous bag were beginning to wear, I wanted the extra protection of a hard shell, and I wanted a separate laptop/tech compartment so I didn't have to carry an additional backpack or risk the laptop being bent inside the suitcase. And also I didn't want to pay $4-500 on an airline quality case.",
                  "date": "2021-11-10T00:00:00.000Z",
                  "answerer_name": "rirrii",
                  "helpfulness": 0,
                  "photos": []
              },
              "5181098": {
                  "id": 5181098,
                  "body": "test",
                  "date": "2021-11-11T00:00:00.000Z",
                  "answerer_name": "ahd",
                  "helpfulness": 0,
                  "photos": []
              },
              "5181099": {
                  "id": 5181099,
                  "body": "test",
                  "date": "2021-11-11T00:00:00.000Z",
                  "answerer_name": "ahd",
                  "helpfulness": 0,
                  "photos": [
                      "IMG_0897 2.JPG",
                      "20180825_171744_Original.jpg"
                  ]
              },
              "5181100": {
                  "id": 5181100,
                  "body": "42",
                  "date": "2021-11-11T00:00:00.000Z",
                  "answerer_name": "Java",
                  "helpfulness": 0,
                  "photos": [
                      "sharksforcheap.png",
                      "shawndrost.png"
                  ]
              },
              "5181101": {
                  "id": 5181101,
                  "body": "a",
                  "date": "2021-11-11T00:00:00.000Z",
                  "answerer_name": "a",
                  "helpfulness": 0,
                  "photos": []
              },
              "5181200": {
                  "id": 5181200,
                  "body": "I feel the product great",
                  "date": "2021-11-12T00:00:00.000Z",
                  "answerer_name": "bt",
                  "helpfulness": 0,
                  "photos": [
                      "http://placecorgi.com/250"
                  ]
              },
              "5181319": {
                  "id": 5181319,
                  "body": "Yep",
                  "date": "2021-11-15T00:00:00.000Z",
                  "answerer_name": "nope",
                  "helpfulness": 0,
                  "photos": [
                      "blob:http://localhost:3000/4e1b881f-b88f-4978-a72e-06d4fbebd436",
                      "blob:http://localhost:3000/4e582559-8cc0-4adc-8f04-10beef247395"
                  ]
              }
          }
      },
      {
          "question_id": 426420,
          "question_body": "Are they comfortable?",
          "question_date": "2021-09-23T00:00:00.000Z",
          "asker_name": "jack",
          "question_helpfulness": 13,
          "reported": false,
          "answers": {
              "3990307": {
                  "id": 3990307,
                  "body": "They are very comfortable!",
                  "date": "2021-09-24T00:00:00.000Z",
                  "answerer_name": "Seller",
                  "helpfulness": 5,
                  "photos": []
              },
              "3990321": {
                  "id": 3990321,
                  "body": "fdsafdsafdsa",
                  "date": "2021-09-24T00:00:00.000Z",
                  "answerer_name": "asdfff",
                  "helpfulness": 0,
                  "photos": []
              },
              "5087582": {
                  "id": 5087582,
                  "body": "Very comfortable",
                  "date": "2021-11-06T00:00:00.000Z",
                  "answerer_name": "test",
                  "helpfulness": 0,
                  "photos": []
              },
              "5087650": {
                  "id": 5087650,
                  "body": "Comfortable",
                  "date": "2021-11-08T00:00:00.000Z",
                  "answerer_name": "Seller",
                  "helpfulness": 2,
                  "photos": []
              },
              "5181206": {
                  "id": 5181206,
                  "body": "Answer",
                  "date": "2021-11-13T00:00:00.000Z",
                  "answerer_name": "Never gonna give them up",
                  "helpfulness": 0,
                  "photos": [
                      "https://www.nme.com/wp-content/uploads/2021/07/RickAstley2021.jpg"
                  ]
              }
          }
      }
  ]
}
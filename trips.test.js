const request = require('supertest');
const app = require('./app');

// Test 1 : récupérer un produit grâce à son ID : GET /products/byId/:id
// ⚠️ res.json( { product : {...} } ) doit renvoyer un objet.
it('GET /trips/:departure/:arrival/:date' , async () => {
    const res = await request(app).get('/trips/Lyon/Bruxelles/2024-07-02T08:32:03.428Z');

    except(res.statusCode).toBe(200);
    except(res.body.trips).toEqual( [
        {
          "_id": "6683c090307305310845d374",
          "departure": "Lyon",
          "arrival": "Bruxelles",
          "date": "2024-07-02T08:32:03.428Z",
          "price": 87
        },
        {
          "_id": "6683c090307305310845d385",
          "departure": "Lyon",
          "arrival": "Bruxelles",
          "date": "2024-07-02T11:12:16.222Z",
          "price": 81
        },
        {
          "_id": "6683c090307305310845d391",
          "departure": "Lyon",
          "arrival": "Bruxelles",
          "date": "2024-07-02T12:31:54.428Z",
          "price": 88
        },
        {
          "_id": "6683c090307305310845d3ab",
          "departure": "Lyon",
          "arrival": "Bruxelles",
          "date": "2024-07-02T16:20:13.956Z",
          "price": 96
        },
        {
          "_id": "6683c090307305310845d3ae",
          "departure": "Lyon",
          "arrival": "Bruxelles",
          "date": "2024-07-02T17:52:10.200Z",
          "price": 138
        },
        {
          "_id": "6683c090307305310845d3b6",
          "departure": "Lyon",
          "arrival": "Bruxelles",
          "date": "2024-07-02T19:01:38.141Z",
          "price": 61
        },
        {
          "_id": "6683c090307305310845d3bd",
          "departure": "Lyon",
          "arrival": "Bruxelles",
          "date": "2024-07-02T19:36:37.483Z",
          "price": 148
        }
      ])
} )
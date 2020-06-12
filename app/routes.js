const express = require('express');
const router = new express.Router;

const middlewareAuth  = require("./middlewares/auth");


const App = require('./controllers/app/app');
const Car = require('./controllers/car/car');
const Brand = require('./controllers/brand/brand');
const Rent = require('./controllers/rent/rent');
const Model = require('./controllers/model/model');
const User = require('./controllers/user/user');
const Register = require('./controllers/user/register');
const Auth = require('./controllers/auth/auth');
const Card = require('./controllers/card/card');
const Billet = require('./controllers/billet/billet');
const RentalCompany = require('./controllers/rentalCompany/rentalCompany');
const Payment = require('./controllers/payment/payment');

// App routes
router.post('/app', App.create);
router.get('/apps', App.find);

// Test
router.get('/',[middlewareAuth.verifyToken],App.test);

// Car routes
router.post('/car', Car.create);
router.get('/cars', Car.list);
router.post('/cars/search', Car.search);
router.get('/car/:id', Car.getCar);

// Brand routes
router.post('/brand', Brand.create);
router.get('/brands', Brand.find);
router.get('/brand/:id/models', Brand.modelsByBrand);

// Rent routes
router.post('/rent', [middlewareAuth.verifyToken], Rent.create);
router.get('/rents', [middlewareAuth.verifyToken], Rent.find);

// Payment
router.post('/payment/card', Payment.payWithCard);
router.post('/payment/billet', Payment.payWithBillet);

// Model routes
router.post('/brand/:id/model', Model.create);
router.get('/model/:id/brand', Model.brandByModel);

// User routes
router.post('/user/register', Register.register);

// Auth routes
router.post("/authenticate/signup", Auth.signup);
router.post("/authenticate/signin", Auth.signin);

//card
router.post("/card", [middlewareAuth.verifyToken], Card.create);
router.get("/cards", [middlewareAuth.verifyToken], Card.findCardsByUser);
router.get("/card/:id", [middlewareAuth.verifyToken], Card.findCardById);

router.post("/billet", Billet.create);
router.get("/billets", Billet.find);
router.get("/billet/:id", Billet.findById);

router.post("/rental-company", RentalCompany.create);
router.get("/rental-companies", RentalCompany.find);
router.get("/rental-company/:id", RentalCompany.findById);

module.exports = router;
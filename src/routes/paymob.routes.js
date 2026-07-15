const express = require("express");
const Router = express.Router();
const webhookController = require("../controllers/paymob/webhook");
const paymobControllers=require('../controllers/paymob/payment.controllers');

Router.get("/pay/:orderId",paymobControllers.paymentUrl);

Router.post('/webhook',webhookController.webhook);

module.exports = Router;

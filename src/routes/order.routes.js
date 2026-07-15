const express=require('express')
const Router = express.Router()
const {orderControllers}=require('../controllers/index.controllers')
const { protect } = require('../middlewares/auth.middleware')
const { validate } = require('../middlewares/validate.middleware');
const { createOrderSchema } = require('../validators/order.validators');
const {asyncWrapper}=require('../utils/wrapper')
Router.use(protect)
Router.post('/', validate(createOrderSchema), asyncWrapper( orderControllers.order))
Router.get('/',asyncWrapper (orderControllers.getUserOrders))
Router.get('/:orderId',asyncWrapper (orderControllers.getOneOrder))
Router.patch('/cancel/:orderId',asyncWrapper( orderControllers.cancelOneOrder))


module.exports=Router
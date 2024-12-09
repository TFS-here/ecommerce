import express from 'express'
import { placeorder, placeorderStripe, placeorderSslcommerz, allOrders, userOrders, updateStatus } from '../controllers/orderController.js'
import adminAuth from './../middleware/adminAuth.js';
import authUser from './../middleware/auth.js';

const orderRouter = express.Router()


//Admin Features
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

//Payment Features
orderRouter.post('/place', authUser, placeorder)
orderRouter.post('/stripe', authUser, placeorderStripe)
orderRouter.post('/sslcommerz', authUser, placeorderSslcommerz)

//User Feature
orderRouter.post('/userorders', authUser, userOrders)

export default orderRouter

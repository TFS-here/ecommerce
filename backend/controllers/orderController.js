import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";


//Placing order using COD Method
const placeorder = async (req, res) => {

    try {

        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)

        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, { cartData: {} })


        res.json({ success: true, message: "ORDER PLACED" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })


    }

}

//Placing order using Stripe Method
const placeorderStripe = async (req, res) => {

}

//Placing order using sslcommerz Method
const placeorderSslcommerz = async (req, res) => {

}

//All orders data for Admin Panel
const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({})
        res.json({ success: true, orders })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

//User Order Data for frontend
const userOrders = async (req, res) => {
    try {

        const { userId } = req.body

        const orders = await orderModel.find({ userId })
        res.json({ success: true, orders })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })

    }

}

//update order status from admin panel
const updateStatus = async (req, res) => {

    try {
        const { orderId, status } = req.body
        await orderModel.findByIdAndUpdate(orderId, { status })
        res.json({ success: true, message: 'STATUS UPDATED' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })

    }

}

export { placeorder, placeorderStripe, placeorderSslcommerz, allOrders, userOrders, updateStatus }
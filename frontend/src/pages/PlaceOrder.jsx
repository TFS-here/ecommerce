import React, { useContext, useState } from 'react'
import Title from './../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const PlaceOrder = () => {

  const [method, setMethod] = useState('cod');
  const { navigate, backendUrl, token, cartItems, setCartItems, getCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    division: '',
    zipcode: '',
    country: '',
    phone: ''
  })

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value

    setFormData(data => ({ ...data, [name]: value }))

  }

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {

      let orderItems = []
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if (itemInfo) {
              itemInfo.size = item
              itemInfo.quantity = cartItems[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      }

      switch (method) {


        //API calls for COD order
        case 'cod':

          const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } })


          if (response.data.success) {
            setCartItems({})
            navigate('/orders')


          }
          else {
            toast.error(response.data.message)
          }

          break;


        default:
          break;
      }


    } catch (error) {
      console.log(error)
      toast.error(error.message)


    }

  }



  return (
    <form onSubmit={onSubmitHandler} className=' flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* ------------Left Side ---------  */}
      <div className=' flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className=' text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />

        </div>
        <div className=' flex gap-3'>
          <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} className=' border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name' />
          <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} className=' border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name' />
        </div>
        <input required onChange={onChangeHandler} name='email' value={formData.email} className=' border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email address' />
        <input required onChange={onChangeHandler} name='street' value={formData.street} className=' border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' />

        <div className=' flex gap-3'>
          <input required onChange={onChangeHandler} name='city' value={formData.city} className=' border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
          <input required onChange={onChangeHandler} name='division' value={formData.division} className=' border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Division' />
        </div>
        <div className=' flex gap-3'>
          <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className=' border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zipcode' />
          <input required onChange={onChangeHandler} name='country' value={formData.country} className=' border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
        </div>
        <input required onChange={onChangeHandler} name='phone' value={formData.phone} className=' border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone number' />

      </div>
      {/* ------------------- Right Side -------------  */}
      <div className='mt-8'>
        <div className=' mt-8 min-w-80'>
          <CartTotal />

        </div>
        <div className=' mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          {/* ------------ PAYMENT METHOD SLECTION ---------  */}
          <div className=' flex gap-3 flex-col lg:flex-row'>
            <div onClick={() => setMethod('cod')} className=' flex items-center gap-3 border p-2 px-3 cursor-pointer '>
              <p className={` min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />

            </div>
            <div onClick={() => setMethod('cod')} className=' flex items-center gap-3 border p-2 px-3 cursor-pointer '>
              <p className={` min-w-3.5 h-3.5 border rounded-full ${method === 'sslcommerz' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.sslcommerz_logo} alt="" />

            </div>


            <div onClick={() => setMethod('cod')} className=' flex items-center gap-3 border p-2 px-3 cursor-pointer '>
              <p className={` min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className=' text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>

            </div>


          </div>

          <div className=' w-full flex justify-end items-center gap-4 mt-8'>
            <div className='w-full text-center mt-8'>
              <a href="https://m.me/veooon">
                <div className=' bg-green-500 text-white px-16 py-3 text-sm'>CHAT WITH US</div>
              </a>

            </div>

            <div className='w-full text-end mt-8'>
              <button type='submit' className=' bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>

            </div>

          </div>

        </div>

      </div>

    </form>
  )
}

export default PlaceOrder
import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img src={assets.logo} className='mb-5 w-32' alt="" />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, dolorem.
                    </p>
                </div>
                <div>
                    <p className=' text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>

                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+88 01886483771</li>
                        <li>veoon.fashion1100@gmail.com</li>

                    </ul>
                </div>
                {/* <div className=' flex justify-between'>
                <hr />
                <p className='py-5 text-sm '>Copyright 2024@ shop.com - All Right Reserved.</p>
                <p className='py-5 text-sm'>Developed by <Link to={'https://www.linkedin.com/in/md-tasnim-ferdous-972429240/'}>MD.TASNIM FERDOUS</Link> </p>
            </div> */}

            </div>
            <div className=' flex justify-around items-center'>
                <hr />
                <p className='py-5 text-sm '>Copyright 2024@ shop.com - All Right Reserved.</p>
                <p className='py-5 text-sm'>Developed by <Link to={'https://www.linkedin.com/in/md-tasnim-ferdous-972429240/'}>MD.TASNIM FERDOUS</Link> </p>
            </div>
        </div>
    )
}

export default Footer
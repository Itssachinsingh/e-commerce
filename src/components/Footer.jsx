import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

export const Footer = () => {
    return (
        <div className=''>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div >
                    <img src={assets.logo4} alt="" className='mb-5 w-32' />
                    <p className='w-full md:w-2/3 text-gray-600 text-start'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti esse saepe at incidunt hic sequi quisquam consectetur consequuntur dolore eligendi? Tempora nostrum nihil rem perspiciatis.
                    </p>
                </div>

                <div className='text-start'>
                    <p className='font-medium text-xl mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600 '>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div className='text-start'>
                    <p className='text-xl font-medium mb-5'>Get in Touch</p>
                    <ul className='flex flex-col gap-1 text-gray-600 '>
                        <li>+1 2734 73423</li>
                        <li>contact@urbannthreads.com</li>

                    </ul>
                </div>
            </div>

            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2024 @ Urbann Threads - All Right Reserved</p>
            </div>
        </div>
    )
}

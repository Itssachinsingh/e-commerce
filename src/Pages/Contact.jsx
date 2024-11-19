import React from 'react'
import { Title } from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import { NewsletterBox } from '../components/NewsletterBox'

export const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-start'>Manhatten, Avenue street, <br /> NYC, NY USA</p>
          <p className='text-start text-gray-500'>Tel: (+011) 555-0132 <br />Email: admin@urbannthreads.com</p>
          <p className='text-start font-semibold text-gray-600 text-xl'>Careers at Urbann Threads</p>
          <p className='text-start text-gray-500'>Learn more about our teams and job opening.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
<NewsletterBox/>

    </div>
  )
}
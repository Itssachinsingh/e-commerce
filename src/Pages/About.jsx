import React from 'react'
import { Title } from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';
import { NewsletterBox } from '../components/NewsletterBox';
export const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-colmd:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p className='text-start'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, minima! Repellendus illo nemo molestiae aut rerum, obcaecati, nisi doloribus distinctio reiciendis mollitia adipisci ad doloremque commodi optio, sapiente reprehenderit. Debitis maxime explicabo ratione commodi ab!</p>
              <p className='text-start'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis facilis reiciendis est alias numquam minima impedit voluptas in. Voluptas, saepe natus dolores sequi magnam repellat fugiat consequuntur impedit rerum, consequatur iure, perferendis voluptate corporis aut!</p>
              <b className='text-gray-800 text-start'>Our Mission</b>
              <p className='text-start'>Our mission is Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet maiores quas, dignissimos cumque similique nam soluta minima. Provident sunt ipsum hic voluptas quae sit nisi.</p>
          </div>
      </div>
      <div className='text-4xl py-4 text-start'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor repellat dicta exercitationem ut suscipit beatae odio aliquam a error ex.</p>
        </div>
        <div className='border px-10 md:px-16 py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor repellat dicta exercitationem ut suscipit beatae odio aliquam a error ex.</p>
        </div>
        <div className='border px-10 md:px-16 py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor repellat dicta exercitationem ut suscipit beatae odio aliquam a error ex.</p>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

import React from 'react'
import Title from './../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>
      <div className=' text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />

      </div>
      <div className=' my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className=' flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to VEOON, where fashion meets innovation. Established with a vision to redefine modern style, VEOON embodies boldness, creativity, and functionality in every collection. Our focus lies in delivering trendy, designer-inspired apparel crafted for the modern world.</p>
          <b className=' text-gray-800'>Our Mission</b>
          <p>At VEOON, our mission is to revolutionize modern fashion by blending bold, designer-inspired aesthetics with premium quality and comfort. We aim to empower individuals to express their unique style through thoughtfully crafted, trend-setting apparel that caters to every season and occasion.</p>
          <p>Guided by our commitment to innovation, sustainability, and excellence, we strive to create clothing that reflects the dynamic spirit of today’s world. By prioritizing creativity, functionality, and inclusivity, VEOON aspires to become a leading name in fashion, delivering timeless yet contemporary designs for the modern wardrobe.</p>

        </div>
      </div>
      <div className=' text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />

      </div>
      <div className=' flex flex-col md:flex-row text-sm mb-20'>
        <div className=' border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>At VEOON, we believe quality is the foundation of trust. That's why we source only the best materials, such as premium cotton fabric for our clothing, ensuring that every piece is soft, breathable, and long-lasting. Our designs go through a rigorous quality control process, covering every detail, from the strength of the stitching to the vibrancy of the colors. We prioritize durability and comfort while maintaining the bold, trendy designs that set our collections apart. Whether it's our stylish winter hoodies or upcoming seasonal collections, we deliver products that stand the test of time, providing customers with exceptional value.</p>
        </div>
        <div className=' border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convinience:</b>
          <p className='text-gray-600'>Modern life is busy, and we get that. That's why we've designed our shopping experience to be as effortless as possible. Our online store is easy to navigate, allowing customers to explore collections by season, style, or size in just a few clicks.Our designs are versatile enough to transition seamlessly from casual outings to semi-formal occasions, saving customers the hassle of maintaining multiple wardrobes. With fast and reliable delivery, VEOON ensures that convenience is at the core of the shopping experience.</p>
        </div>
        <div className=' border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exeptional Customer Service:</b>
          <p className='text-gray-600'>At VEOON, we value our customers as the heart of our brand. From the moment a customer visits our site to the moment they wear our clothing, we're here to ensure their experience is nothing short of exceptional. Our customer service team is available to assist with questions, provide styling advice, or resolve any issues promptly and professionally. If something doesn't meet expectations, our flexible return and exchange policy ensures a stress-free resolution. But we don't stop there—we actively gather and incorporate customer feedback to improve our products and services continually. Choosing VEOON means becoming part of a brand that genuinely cares about your satisfaction and style.

            This approach combines trust, ease, and customer focus to resonate with your audience. Let me know if you'd like further refinement!</p>
        </div>


      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
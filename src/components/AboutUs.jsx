
import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {

  useEffect(() => {
    AOS.init({
      offset: 200, // Offset (in px) from the original trigger point
      delay: 100, // Delay (in ms) before animation starts
      duration: 1000, // Duration (in ms) of the animation
      easing: "ease-in-out", // Easing function
      once: true, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);


  return (
    <>
    <section id='about' className='flex flex-col lg:flex-row  order-1 justify-center items-center gap-8 lg:order-1 lg:py-24 px-10 lg:px-20  bg-black w-full h-fit'>
        <div id='left' className='lg:w-[50%] w-full flex flex-col justify-end items-center lg:items-start gap-10 '>
          <h1 data-aos="zoom-in" className='text-white text-6xl text-center font-bold m-auto'>About <span className='text-yellow-400 font-bold'>Us</span></h1>
          <h1 data-aos="fade-out" className='text-white font-semibold font-mono m-auto mb-14'>WHERE INNOVATION MEETS DEDICATION.</h1>
          <p data-aos="zoom-in" className='text-white text-xl font-semibold text-center lg:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, voluptatibus at! Sapiente rerum delectus nemo ipsam sunt praesentium? Voluptate quidem, 
            expedita blanditiis facilis itaque iure sint ut quas corporis eligendi!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt nemo ut omnis earum rerum repellendus numquam beatae eaque dicta sequi veritatis quos laudantium quod, suscipit, provident, 
            asperiores explicabo delectus molestias.</p>
            <button data-aos="zoom-in-up" className='bg-orange-500 px-8 py-4 rounded-full  hover:bg-green-500 hover:text-black font-bold hidden '>READ MORE</button>
            <button data-aos="zoom-in-up" className='bg-orange-500 px-8 py-4 hidden rounded-full hover:bg-green-500 hover:text-black font-bold lg:block  '>READ MORE</button>

          
        </div>
        

        <div id='about-img' data-aos="zoom-in-down" className='order-2 flex flex-col  justify-around items-center lg:w-[50%] w-full lg:order-3'>
          <img src="./images/about-img.jpg" alt="" height={400} width={400} srcset="" className='rounded-xl mb-8' />
          <button data-aos="fade-in" className='bg-orange-500 order-3 px-8 py-4 rounded-full lg:order-2 lg:hidden hover:bg-green-500 hover:text-black font-bold mt-3 mb-3'>READ MORE</button>

        </div>
      </section>
    </>
  )
}

export default AboutUs
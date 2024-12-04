import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const LandPage = () => {

    useEffect(()=>{
        AOS.init({
            offset: 200,    // Offset (in px) from the original trigger point
            delay: 100,       // Delay (in ms) before animation starts
            duration: 1000, // Duration (in ms) of the animation
            easing: "ease-in-out", // Easing function
            once: true,     // Whether animation should happen only once
            mirror: false,  // Whether elements should animate out while scrolling past them
            });
        

    },[])
  return (

    <section id='home' className='w-full bg-black flex justify-between items-center text-white px-10 py-20 bg-cover bg-center' style={{ backgroundImage: `url('./images/bg-img.jpg')` }}>
        <div className='flex flex-col justify-center items-start gap-8 w-full lg:w2/3 pl-10 pr-2 lg:pl-32 lg:pr-10'>
        <div data-aos="slide-right"  id='box-circle' className='bg-green-500 p-10 w-60 rounded-full flex justify-center items-center flex-col gap-6 mt-5'>
        <h1 className='text-black font-bold text-6xl'>40%</h1>
        <h1 className='text-black font-bold text-2xl text-center'>BUSINESS <br /> LUNCH</h1>
        </div>
        <h1 data-aos="zoom-in-up" className='text-5xl font-semibold'>NEW RESTAURANT</h1>
        <h1 data-aos="zoom-in" className='text-3xl lg:text-6xl font-bold text-center lg:text-start'>Craving Something Delicious?<br /> We’ve Got You! Where every <br /> ingredient tells a story</h1>
        <button data-aos="zoom-in-up" className='bg-orange-500 px-8 py-4 rounded-full hover:bg-green-500 hover:text-black font-bold mt-3 '>VIEW MENU</button>

        </div>

    </section>


  )
}
export default LandPage
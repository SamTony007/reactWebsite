import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const BannerPage = () => {
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
    <section className='w-full bg-black h-lvh flex justify-between bg-fixed items-center text-white px-10 lg:px40 py20 bg-cover bg-center' style={{ backgroundImage: `url('./images/banner-bg.jpg')` }}>
    <div className='flex flex-col justify-center items-start gap-8 w-full lg:w2/3 pl-10 pr-2 lg:pl-32 lg:pr-10'>
        <div data-aos="slide-right"  id='box-circle' className='bg-green-400 p-10 w-60 rounded-full flex justify-center items-center flex-col gap-6 mt-5'>
        <h1 className='text-black font-bold text-6xl'>40%</h1>
        <h1 className='text-black font-bold text-2xl text-center'>BUSINESS <br /> LUNCH</h1>
        </div>
        <h1 data-aos="slide-up" data-aos-delay="300" className='lg:text-6xl text-4xl font-semibold'>Stay Up to Date with Us</h1>
        <h4 data-aos="slide-up" data-aos-delay="400" className='lg:text-2xl text-xl font-semibold'>The Tasteful Way to Stay Connected!</h4>

        <div data-aos="slide-right" className='flex flex-col lg:flex-row justify-start items-start w-full gap-6 mt-3 md:flex md:justify-center'>
            <input type="text" className='p-4 text-black font-normal w-full  rounded-full ' placeholder='Enter your valid email' />
            <button type='submit' className='bg-green-400 hover:bg-orange-400 px-10 py-4 rounded-full text-black font-bold text-lg'>SEND</button>

        </div>

        </div>
        <div id='about-img' data-aos="zoom-in-down" className=' flex flex-col justify-around items-center lg:w-[50%] w-full lg:order-3 '>
        <img src="./images/banner1-img.png" alt="Connect Image" height={400} width={400} srcset="" className='rounded-xl mb-8 md:block hidden ' />
    
        </div>


    </section>



    </>
)
}

export default BannerPage
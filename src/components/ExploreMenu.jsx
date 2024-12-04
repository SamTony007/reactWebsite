import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
// import Biryani from './components/images/biryani.jpg'

const ExploreMenu = () => {
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
    <section id='menu' className='bg-slate-950 w-full h-fit bg-cover bg-center bg-fixed' style={{backgroundImage: `url('./images/menu-bg.jpg')`}}>
              <h1 className='py-10 text-white font-semibold text-center text-6xl'>Explore Menu</h1>

      <section
        className="px-20 pt-12 pb-16 flex flex-row flex-wrap lg:flex-row justify-center lg:flex-wrap items-center gap-16"  >
        <div  data-aos="fade-up-right" data-aos-delay="100" className="flex justify-center items-center shadow-lg bg-center lg:h-[280px] lg:w-[230px] h-[350px] w-[500px] rounded-xl bg-cover" style={{backgroundImage: `url('./images/biryani.avif')`}} >
          <h1 className='text-white  font-bold text-2xl'>Biryani</h1>
        </div>
        <div  data-aos="fade-down" data-aos-delay="100" className="flex justify-center items-center bg-center shadow-inner  lg:h-[280px] lg:w-[230px] h-[350px] w-[500px]  rounded-xl bg-cover" style={{backgroundImage: `url('./images/north-indian-thali.avif')`}} >
          <h1 className='text-white font-bold  text-2xl'>North Indian Thali</h1>
        </div>
        <div  data-aos="fade-up" data-aos-delay="100" className="flex justify-center items-center bg-center shadow-inner  lg:h-[280px] lg:w-[230px] h-[350px] w-[500px] rounded-xl bg-cover" style={{backgroundImage: `url('./images/south-indian-thali.jpg')`}} >
          <h1 className='text-white font-bold  text-2xl'>South Indian Thali</h1>
        </div>
        <div  data-aos="fade-down-left" data-aos-delay="100" className="flex justify-center items-center bg-center shadow-inner  lg:h-[280px] lg:w-[230px] h-[350px] w-[500px] rounded-xl bg-cover" style={{backgroundImage: `url('./images/indian-beard.avif')`}} >
          <h1 className='text-white font-bold  text-2xl'>Indian Bread</h1>
        </div>
        <div  data-aos="fade-up-right" data-aos-delay="100" className="flex justify-center items-center bg-center shadow-inner  lg:h-[280px] lg:w-[230px] h-[350px] w-[500px] rounded-xl bg-cover" style={{backgroundImage: `url('./images/veg-curry.jpg')`}} >
          <h1 className='text-white font-bold  text-2xl'>Veg Curries</h1>
        </div>
        <div  data-aos="fade-up" data-aos-delay="100" className="flex justify-center items-center bg-center shadow-inner  lg:h-[280px] lg:w-[230px] h-[350px] w-[500px] rounded-xl bg-cover" style={{backgroundImage: `url('./images/non-veg-curry.jpg')`}} >
          <h1 className='text-white font-bold  text-2xl'>Non veg Curries</h1>
        </div>
        <div  data-aos="fade-down" data-aos-delay="100" className="flex justify-center items-center bg-center shadow-inner  lg:h-[280px] lg:w-[230px] h-[350px] w-[500px] rounded-xl bg-cover" style={{backgroundImage: `url('./images/pizza.jpg')`}} >
          <h1 className='text-white font-bold  text-2xl'>Pizza</h1>
        </div>
        <div  data-aos="fade-down-left" data-aos-delay="100" className="flex justify-center items-center bg-center shadow-inner  lg:h-[280px] lg:w-[230px] h-[350px] w-[500px] rounded-xl bg-cover" style={{backgroundImage: `url('./images/burgers.jpg')`}} >
          <h1 className='text-white font-bold  text-2xl'>Burger</h1>
        </div>
        <div  data-aos="fade-up-right" data-aos-delay="100" className="flex justify-center items-center bg-center shadow-inner  lg:h-[280px] lg:w-[230px] h-[350px] w-[500px] rounded-xl bg-cover" style={{backgroundImage: `url('./images/chicken.avif')`}} >
          <h1 className='text-white font-bold  text-2xl'>Chicken</h1>
        </div>
        <div  data-aos="fade-up" data-aos-delay="100" className="flex justify-center items-center bg-center shadow-inner  lg:h-[280px] lg:w-[230px] h-[350px] w-[500px] rounded-xl bg-cover" style={{backgroundImage: `url('./images/shawarma.jpg')`}} >
          <h1 className='text-white font-bold  text-2xl'>Shawarma</h1>
        </div>
        <div  data-aos="fade-down" data-aos-delay="100" className="flex justify-center items-center bg-center shadow-inner  lg:h-[280px] lg:w-[230px] h-[350px] w-[500px] rounded-xl bg-cover" style={{backgroundImage: `url('./images/momos.jpg')`}} >
          <h1 className='text-white font-bold  text-2xl'>Momos</h1>
        </div>
        <div  data-aos="fade-down-left" data-aos-delay="100" className="flex justify-center items-center bg-center shadow-inner  lg:h-[280px] lg:w-[230px] h-[350px] w-[500px] rounded-xl bg-cover" style={{backgroundImage: `url('./images/fast-foods.jpg')`}} >
          <h1 className='text-white font-semibold  text-2xl'>Fast Food</h1>
        </div>
      
        </section>
      </section>

    
      </>
  );
};



export default ExploreMenu;

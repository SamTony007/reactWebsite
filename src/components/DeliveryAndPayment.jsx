import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const DeliveryAndPayment = () => {
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
    
        <div id='services' className="bg-black text-white py-20 bg-cover bg-center flex flex-col"  style={{ backgroundImage: `url('./images/delivery-payment-bg.jpg')` }}>
    <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center md:flex-row " >
            {/* Image Section */}
            <div
                className="w-full md:w-5/12 flex justify-center order-1 md:order-2"
                data-aos="fade-right-right"
            >
                <img
                    src="./images/delivery-payment-section-img.png"
                    alt="Delivery and Payment"
                    className="rounded-lg shadow-lg w-10/12 mb-10"
                />
            </div>
            {/* Text Section */}
            <div
                className="w-full md:w-7/12 order-2 md:order-1 px-6"
                data-aos="fade-right">
                <h1 className="text-6xl font-bold mb-16 ">
                    Delivery and <span className='text-yellow-400'>Payment</span>
                </h1>
                <p className="text-2xl mb-6">
                    Enjoy hassle-free payment with the plenitude of payment options
                    available for you. Get live tracking and locate your food on a
                    live map. It's quite a sight to see your food arrive to your door.
                    Plus, you get a 5% discount on every order every time you pay
                    online.
                </p>
                <button data-aos="zoom-in" className='bg-orange-400 px-8 py-4 rounded-full font-bold hover:bg-green-500 hover:text-black mt-3 mb-3'>ORDER ONLINE</button>
            
                <div data-aos="fade-up" className="flex mt-6 space-x-4">
                    <img
                        src="./images/visa-card-img.png"
                        alt="Visa Card"
                        className="h-20"
                    />
                    <img
                        src="./images/master-card-img.png"
                        alt="Master Card"
                        className="h-20"
                    />
                    <img
                        src="./images/paypal-card-img.png"
                        alt="PayPal"
                        className="h-20"
                    />
                
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default DeliveryAndPayment

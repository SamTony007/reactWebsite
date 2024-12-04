import React, { useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; 
import AOS from "aos"; 
import "aos/dist/aos.css";



const FollowUsSection = () => {
    useEffect(() => {
        AOS.init({
            offset: 200, // Offset (in px) from the original trigger point
            delay: 100, // Delay (in ms) before animation starts
            duration: 1000, // Duration (in ms) of the animation
            easing: "ease-in-out", // Easing function
            
        });
    }, []);

    return (
        
        <>
        <section id='followUs' className="bg-black w-full px-10 py-8" >
            <div className="text-center mb-8" data-aos="zoom-in">
                    <h2 data-aos="slide-up" className="text-4xl font-bold mb-4 text-white">Follow Us</h2>
                    
                    <p 
                        className="text-lg text-gray-500">
                        Stay connected for updates, events, and exclusive offers!
                    </p>
                </div>


                <div  className="flex justify-center space-x-10 text-2xl" >
                    {/* Facebook */}
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600 transition"
                        aria-label="Follow us on Facebook" >
                        <i className="fab fa-facebook-f fa-lg md:fa-2x"></i>
                    </a>

                    {/* Instagram */}
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                        className="text-pink-500 hover:text-pink-600 transition"
                        aria-label="Follow us on Instagram" >
                        <i className="fab fa-instagram fa-2x" ></i>
                    </a>

                    {/* Twitter */}
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-500 transition"
                        aria-label="Follow us on Twitter">
                        <i className="fab fa-twitter fa-2x"></i>
                    </a>

                    {/* LinkedIn */}
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-800 transition"
                        aria-label="Follow us on LinkedIn">
                        <i className="fab fa-linkedin-in fa-2x"></i>
                    </a>
                </div>

        



        </section>
        </>
    );
};

export default FollowUsSection;

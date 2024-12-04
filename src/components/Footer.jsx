import React, { useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';
import { Link } from "react-scroll"
// import { Link, animateScroll as scroll } from 'react-scroll';


const Footer = () => {
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
            <footer className='flex flex-row justify-center items-center px-10 lg:py-12 gap-6 bg-slate-900 w-full '>
                <div className='flex lg:flex-row lg:justify-center items-center gap-x-20 sm:flex flex-col sm:justify-center sm:items-center space-y-10'>
                    <div data-aos="fade-up"  >
                        <h3 className="text-xl font-semibold mb-4 text-gray-700">Follow Us</h3>
                        <div className='flex space-x-6'>
                            {/* Facebook */}
                            <a href="https://facebook.com"
                                className="text-gray-500 hover:text-white transition"
                                aria-label="Facebook" >
                                <i className="fab fa-facebook-f fa-lg "></i>
                            </a>

                            {/* Instagram */}
                            <a href="https://instagram.com"
                                className="text-gray-500 hover:text-white transition"
                                aria-label="Instagram" >
                                <i className="fab fa-instagram fa-2x" ></i>
                            </a>

                            {/* Twitter */}
                            <a href="https://twitter.com"
                                className="text-gray-500 hover:text-white transition"
                                aria-label="Twitter">
                                <i className="fab fa-twitter fa-2x"></i>
                            </a>

                            {/* LinkedIn */}
                            <a href="https://linkedin.com"
                                className="text-gray-500 hover:text-white transition"
                                aria-label="LinkedIn">
                                <i className="fab fa-linkedin-in fa-2x"></i>
                            </a>
                        </div>
                    </div>


                    <div data-aos="fade-up">
                        <h3 className="text-xl font-semibold mb-4 text-gray-700">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#home" className="text-gray-400 hover:text-white transition">Home</a>
                            </li>
                            <li>
                                <a href="#about" className="text-gray-400 hover:text-white transition">  About Us</a>
                            </li>
                            <li>
                                <a href="#menu" className="text-gray-400 hover:text-white transition"> Explore Menu</a>
                            </li>
                            <li>
                                <a href="#services" className="text-gray-400 hover:text-white transition"> Services</a>
                            </li>

                            <li>
                                <a href="#contact" className="text-gray-400 hover:text-white transition"> Contact</a>
                            </li>
                        </ul>
                    </div>


                    <div data-aos="fade-up" >
                        <h3 className="text-xl font-semibold mb-4 text-gray-700">Contact Info</h3>
                        <p className="text-gray-400">Phone: +1 234 567 890</p>
                        <p className="text-gray-400">Email: contact@example.com</p>
                        <p className="text-gray-400 mb-5">Address: 4 Main rd, Indra Nagar, Bangalore</p>
                    </div>

                </div>
            </footer>
            <div className="bg-black  text-center text-gray-500 flex flex-col justify-center items-center">
                &copy; {new Date().getFullYear()}Designed & Developed by Sameer. All rights reserved.
                <div className='rounded-full border transition ease-in-out delay-150 cursor-pointer hover:bg-gray-600   fixed bottom-12 right-6'>
                    <Link to='home' spy={true} offset={-100} smooth={true} >
                        <i class="fa-solid fa-arrow-up   text-gray-300  p-4 hover:text-black"></i>

                    </Link>
                </div>
            </div>

        </>
    )
}

export default Footer
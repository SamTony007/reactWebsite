import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactSection = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            delay: 100,
            duration: 1000,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <>
        <section id="contact" className="bg-black text-white py-12 px-6">
            <div className="container mx-auto">
                <h2 
                    data-aos="fade-down" 
                    className="text-4xl font-bold text-center mb-8">
                    Contact Us
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {/* Phone */}
                    <div 
                        data-aos="fade-up" data-aos-delay="200"
                        className="bg-gray-900 p-6 rounded-lg shadow-lg">
                        <i className="fas fa-phone fa-2x text-green-500 mb-4"></i>
                        <h3 className="text-xl font-semibold mb-2">Phone</h3>
                        <p className="text-gray-400">+123 456 789</p>
                    </div>
                    {/* Email */}
                    <div 
                        data-aos="fade-up" data-aos-delay="400"
                        className="bg-gray-900 p-6 rounded-lg shadow-lg transition-opacity">
                        <i className="fas fa-envelope fa-2x text-blue-500 mb-4"></i>
                        <h3 className="text-xl font-semibold mb-2">Email</h3>
                        <p className="text-gray-400">contact@example.com</p>
                    </div>
                    {/* Map */}
                    <div 
                        data-aos="fade-up" data-aos-delay="600"
                        className="bg-gray-900 p-6 rounded-lg shadow-lg">
                        <i className="fas fa-map-marker-alt fa-2x text-red-500 mb-4"></i>
                        <h3 className="text-xl font-semibold mb-2">Location</h3>
                        <p className="text-gray-400">4 Main rd, Indra Nagar, Bangalore</p>
                    </div>
                </div>
            </div>
        </section>
</>
    );
};
export default ContactSection;

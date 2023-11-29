import { NavLink } from "react-router-dom";


export default function AboutUs() {
  return (
    <div className="flex justify-center align-middle m-10">
    <div className="bg-gray-100/75 p-6 md:p-12">
    <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-600 mb-6">
            At [Your Company Name], we believe that every journey should be memorable and stress-free. 
            We've been providing top-notch rental cars since [Year], ensuring our customers always 
            have access to the best vehicles for their needs. Whether you're planning a cross-country road trip 
            or need a reliable car for your daily commutes, we've got you covered. Our fleet is diverse, 
            featuring everything from eco-friendly compacts to luxury SUVs, all maintained to the highest standards 
            of safety and comfort. We're more than just a car rental service; we're your partners in travel, 
            committed to making your experience seamless and enjoyable.
        </p>
        <p className="text-gray-600 mb-8">
            Our team is passionate about cars and customer service, and we're here to assist you every step 
            of the way. With a user-friendly booking system, transparent pricing, and a dedication to excellence, 
            we strive to exceed your expectations. Choose us for your next journey, and experience the difference 
            that quality and care can make.
        </p>
        <NavLink 
  to="/contact-us" 
  className="text-white bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out py-3 px-6 rounded-lg font-bold"
>
  Contact Us
</NavLink>

    </div>
</div>
</div>

  )
}

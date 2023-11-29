import { NavLink } from "react-router-dom";


export default function AboutUs() {
  return (
    <div className="flex justify-center align-middle m-10">
    <div className="bg-gray-100/75 p-6 md:p-12">
    <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-600 mb-6">
            Welcome to GKI: Your Journey, Our Passion
At the heart of GKI lies the visionary collaboration of three close friends – Kostas, İlker, and Garen.
Fueled by a shared passion for excellence and a profound love for the open road, they embarked on a remarkable journey
to redefine the car rental experience. Today, GKI proudly stands as an international beacon of success, inspiring wanderers
to traverse the globe with unparalleled comfort, style, and the spirit of true friendship.
Our Story: From Zero to Million Euros
GKI’s story is more than a startup tale; it’s a testament to the power of friendship and shared dreams. Imagine three friends
with a vision to create a company that not only provides reliable transportation but also embodies the essence of camaraderie.
From late-night brainstorming sessions to overcoming challenges, Kostas, İlker, and Garen turned their dream into a million-euro
reality. Their journey is not just about business; it’s a story of genuine connections, shared laughter, and building something
meaningful together.
Passion for Excellence: Driving Success Together
At GKI, every journey is an opportunity for discovery and adventure. We meticulously curate our fleet to ensure a seamless blend
of luxury, comfort, and performance. Whether you’re cruising through city streets or exploring off-the-beaten-path destinations,
our diverse range of vehicles caters to every discerning traveler.
        </p>
        <p className="text-gray-600 mb-8">
            Customer-Centric Approach: Your Satisfaction, Our Priority
Our success is intricately woven with the satisfaction of our valued customers. Every trip is a unique experience, and our team is
dedicated to tailoring solutions that exceed expectations. From streamlined booking processes to personalized concierge services, we
prioritize your needs to make every drive memorable.
    
Global Reach, Local Touch: A World of Possibilities
    
GKI is not just a car rental company; it’s a gateway to a world of possibilities. With a presence in key international locations,
we facilitate seamless journeys across borders. Our local expertise combined with a global perspective ensures that your travel
experience is as enriching as it is hassle-free.
    
Sustainability at the Core: Driving Green Initiatives
    
Committed to making a positive impact on the environment, GKI integrates sustainable practices into every aspect of our operations.
From fuel-efficient vehicles to eco-friendly policies, we are dedicated to minimizing our carbon footprint and preserving the beauty
of the destinations we serve.
Join Us on the Road Ahead: Where Every Mile is a Memory
    
Embark on a journey with GKI and discover a world of possibilities on the open road. Whether you’re a business traveler seeking
efficiency, a family in pursuit of adventure, or a solo explorer chasing freedom, we invite you to experience the GKI difference.
Your journey begins here. Drive with passion, explore with purpose
    
GKI.
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

import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ title, subtitle, description }) => {


 

  return (

    <div className="relative group ">
    {/* Glowing border effect that appears on hover */}
    <div className="absolute inset-0 rounded-lg transition-opacity duration-400 ease-in-out ">
      {/* This creates the actual border */}
      <div className="absolute inset-0 rounded-lg blur-sm"></div>
    </div>
    
    {/* Card content */}
    <div className="bg-gray-800 rounded-lg p-8 h-full relative z-10 transition-transform duration-300 ease-in-out hover:scale-[1.02]">
      <p className="text-emerald-400 text-sm mb-2">{title}</p>
      <h2 className="text-white text-3xl font-bold mb-4">{subtitle}</h2>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  </div>

  );
}

export default SingleTestimonial;

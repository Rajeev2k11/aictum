'use client';
import { motion } from "framer-motion";

const SingleTestimonial = ({
  title,
  subtitle,
  description,
  image,
  isActive,
  onHover,
  onLeave,
  index
}) => {
  return (
    <div
      className={`relative h-full transition-all duration-500 ${
        isActive ? "w-full" : "xl:w-1/4 lg:w-1/3 w-full"
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Image Container */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
        <div className={`absolute inset-0 ${isActive ? 'bg-black/40' : 'xl:bg-black/60 bg-black/30'}`} />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-4 lg:p-6">
        <div>
          <p className="text-[#c38ff7] text-xs lg:text-sm font-medium mb-1">{title}</p>
          <h2 className="text-lg lg:text-xl font-bold">{subtitle}</h2>
        </div>
        
        {(isActive || typeof window !== 'undefined' && window.innerWidth <= 1024) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="pt-2 lg:pt-4"
          >
            <p className="text-gray-200 text-xs lg:text-sm">{description}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SingleTestimonial;
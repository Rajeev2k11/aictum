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
        {/* Full Overlay - Works as before */}
        <div className={`absolute inset-0 transition-all duration-300 ${
          isActive ? 'bg-black/70' : 'bg-black/20'
        }`} />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-4 lg:p-6">
        <div className={`transition-all duration-300 ${
          isActive ? 'opacity-100' : 'opacity-90'
        }`}>
          <p className="text-[#d8b4fe] text-xs lg:text-sm font-medium mb-1">{title}</p>
          <h2 className="text-lg lg:text-xl font-bold text-white">{subtitle}</h2>
        </div>
        
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="pt-4"
          >
            <p className="text-white text-sm lg:text-base">{description}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SingleTestimonial;
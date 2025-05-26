'use client';
import { FC } from "react";
import * as motion from "motion/react-client";

interface SingleTestimonialProps {
  title: string;
  subtitle: string;
  description: string;
}

const SingleTestimonial: FC<SingleTestimonialProps> = ({
  title,
  subtitle,
  description,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative group overflow-hidden rounded-xl"
    >
      {/* Glow Container */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute -inset-[2px] z-0 rounded-xl
                   pointer-events-none
                   bg-[conic-gradient(from_90deg_at_50%_50%,#9345E0_0%,#B873FF_50%,#9345E0_100%)]
                   blur-md"
      ></motion.div>

      {/* Radial Grid Background */}
      <div 
        className="absolute inset-0 rounded-xl overflow-hidden z-[1]
                   [background-image:radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)]
                   [background-size:16px_16px]"
      ></div>

      {/* Main Card Content */}
      <div
        className="relative z-10 bg-gradient-to-b from-gray-900/80 via-gray-800/80 to-purple-900/80 
                   border border-purple-900/50 p-6 sm:p-8 rounded-xl h-full 
                   transition-all duration-300 group-hover:border-purple-400 group-hover:border-2
                   backdrop-blur-sm"
      >
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-[#9345E0] text-xs sm:text-sm font-medium tracking-wide mb-2"
        >
          {title}
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4"
        >
          {subtitle}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-[#C9C9C9] text-sm sm:text-base leading-relaxed"
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default SingleTestimonial;


// 'use client';
// import { FC } from "react";
// import * as motion from "motion/react-client";

// interface SingleTestimonialProps {
//   title: string;
//   subtitle: string;
//   description: string;
// }

// const SingleTestimonial: FC<SingleTestimonialProps> = ({
//   title,
//   subtitle,
//   description,
// }) => {
//   return (
//     <motion.div
//       initial={{ rotateY: 0 }}
//       whileInView={{ rotateY: 360 }}
//       viewport={{ once: false }}
//       transition={{ duration: 0.4, ease: "easeInOut" }}
//       className="relative group overflow-hidden rounded-xl"
//     >
//       {/* Glow Container */}
//       <div
//         className="absolute -inset-[2px] z-0 rounded-xl
//                    opacity-0 group-hover:opacity-100 
//                    transition-all duration-300 ease-in-out
//                    pointer-events-none
//                    bg-[conic-gradient(from_90deg_at_50%_50%,#9345E0_0%,#B873FF_50%,#9345E0_100%)]
//                    blur-md"
//       ></div>

//       {/* Radial Grid Background */}
//       <div 
//         className="absolute inset-0 rounded-xl overflow-hidden z-[1]
//                    [background-image:radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)]
//                    [background-size:16px_16px]"
//       ></div>

//       {/* Main Card Content */}
//       <motion.div
//         className="relative z-10 bg-gradient-to-b from-gray-900/80 via-gray-800/80 to-purple-900/80 
//                    border border-purple-900/50 p-6 sm:p-8 rounded-xl h-full 
//                    transition-all duration-300 group-hover:border-purple-400 group-hover:border-2
//                    backdrop-blur-sm"
//         whileHover={{ scale: 1.02 }} // होवर पर थोड़ा स्केल
//       >
//         <p className="text-[#9345E0] text-xs sm:text-sm font-medium tracking-wide mb-2">
//           {title}
//         </p>
//         <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
//           {subtitle}
//         </h2>
//         <p className="text-[#C9C9C9] text-sm sm:text-base leading-relaxed">
//           {description}
//         </p>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default SingleTestimonial;


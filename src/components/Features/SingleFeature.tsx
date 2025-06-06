import { Feature } from "@/types/feature";
import * as motion from "motion/react-client";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <motion.div
      // Removed rotateY animation
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="w-[90%] sm:w-full max-w-[350px] min-h-[350px] md:h-[400px] p-5 rounded-xl bg-[#572b7dcc] border border-[#5C3D91] shadow-xl transition-all duration-300 ease-in-out mx-auto"
      style={{ backfaceVisibility: "hidden" }} // helps with 3D rotation
    >
      <div className="h-full flex flex-col">
        {/* Icon Wrapper */}
        <div className="bg-[#3d393f] text-[#d1aef1] mb-6 md:mb-10 flex h-[60px] w-[60px] md:h-[70px] md:w-[70px] items-center justify-center rounded-md shadow-md">
          {icon}
        </div>

        {/* Title */}
        <h3 className="mb-3 md:mb-4 text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl font-bold text-[#d8a7ef]">
          {title}
        </h3>

        {/* Paragraph */}
        <p className="text-white text-sm md:text-base leading-relaxed font-medium flex-grow">
          {paragraph}
        </p>
      </div>
    </motion.div>
  );
};

export default SingleFeature;
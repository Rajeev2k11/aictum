import { Feature } from "@/types/feature";
import * as motion from "motion/react-client"

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-[90%] sm:w-full max-w-[350px] min-h-[350px] md:h-[400px] border-pink-300 border-2 p-4 rounded-lg bg-[#e1b0ee] mx-auto"
    >
      <div className="wow fadeInUp h-full flex flex-col" data-wow-delay=".15s">
        <div className="bg-primary/10 text-primary mb-6 md:mb-10 flex h-[60px] w-[60px] md:h-[70px] md:w-[70px] items-center justify-center rounded-md">
          {icon}
        </div>
        <h3 className="mb-4 md:mb-5 text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl font-bold text-black dark:text-white">
          {title}
        </h3>
        <p className="text-body-color text-sm md:text-base leading-relaxed font-medium flex-grow">
          {paragraph}
        </p>
      </div>
    </motion.div>
  );
};

export default SingleFeature;
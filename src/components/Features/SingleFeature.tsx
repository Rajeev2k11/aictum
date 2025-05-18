import { Feature } from "@/types/feature";
import * as motion from "motion/react-client"

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <motion.div whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.8 }}
     className=" max-w-[400px] h-[450px] border-pink-300 border-2 p-4 rounded-lg bg-[#e1b0ee]">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="bg-primary/10 text-primary mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
          {title}
        </h3>
        <p className="text-body-color pr-[10px] text-base leading-relaxed font-medium">
          {paragraph}
        </p>
      </div>
    </motion.div>
  );
};

export default SingleFeature;

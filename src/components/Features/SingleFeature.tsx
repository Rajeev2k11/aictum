import { Feature } from "@/types/feature";
import * as motion from "motion/react-client";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { title, paragraph, bgImage } = feature;

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
      className="flex-shrink-0 w-[280px] sm:w-[320px] max-w-[320px] min-h-[420px] rounded-xl shadow-lg overflow-hidden relative select-none" // Added select-none here
      style={{ 
        backfaceVisibility: "hidden",
        willChange: 'transform',
        userSelect: 'none', // Additional cross-browser support
        WebkitUserSelect: 'none', // For Safari
        MozUserSelect: 'none', // For Firefox
        msUserSelect: 'none' // For IE/Edge
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
        <div className="absolute bottom-0 h-3/4 w-full bg-gradient-to-t from-black/95 via-black/70 to-transparent" />
      </div>

      <div 
        className="h-full flex flex-col justify-end relative z-10 p-6 pb-7"
        style={{
          userSelect: 'none', // Additional protection
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none'
        }}
      >
        <h3 
          className="text-xl font-bold text-white mb-3"
          style={{
            userSelect: 'none',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none'
          }}
        >
          {title}
        </h3>
        <p 
          className="text-white/90 text-sm leading-relaxed"
          style={{
            userSelect: 'none',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none'
          }}
        >
          {paragraph}
        </p>
      </div>
    </motion.div>
  );
};

export default SingleFeature;
import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { title, paragraph, bgImage } = feature;

  return (
    <div className="feature-card flex-shrink-0 w-[280px] sm:w-[320px] max-w-[320px] min-h-[420px] rounded-xl shadow-lg overflow-hidden relative select-none">
      {/* Image Container */}
      <div 
        className="feature-image absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
        <div className="absolute bottom-0 h-3/4 w-full bg-gradient-to-t from-black/95 via-black/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="h-full flex flex-col justify-end relative z-10 p-6 pb-7">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-white/90 text-sm leading-relaxed">{paragraph}</p>
      </div>
    </div>
  );
};

export default SingleFeature;
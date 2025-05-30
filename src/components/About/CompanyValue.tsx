import Image from "next/image";
import FadedToBold from "../Common/FadeToBold";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const CompanyValue = () => {
  const List = ({ text }) => (
    <p className="mb-3 flex items-start text-base font-medium text-gray-800 dark:text-gray-300 sm:mb-4 lg:text-lg">
      <span className="bg-purple-600/10 text-purple-600 dark:text-purple-400 mr-3 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-md sm:mr-4 sm:h-[30px] sm:w-[30px]">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section
      id="about"
      className="bg-[#1B1329] p-5 shadow-2xl sm:p-7 md:p-10 lg:p-14 xl:p-20"
    >
      <div className="border-b container border-white/10 pb-10 sm:pb-12 md:pb-16">
        <div className="mb-8 sm:mb-10 md:mb-12">
          <FadedToBold text="We Have Your Back" />
        </div>

        <div className="flex flex-col-reverse items-center gap-8 lg:flex-row lg:gap-12">
          {/* Text + List Section */}
          <div className="w-full px-1 lg:w-1/2 lg:px-3">
            <h2 className="mb-6 text-lg leading-relaxed text-white sm:mb-8 sm:text-xl md:text-2xl md:leading-relaxed">
              At every step of your digital journey, we're right beside you. From idea to launch — and beyond — we ensure your vision is built, scaled, and supported with care.
            </h2>

            <div className="mb-6 max-w-[570px] lg:mb-0">
              <div className="flex flex-wrap gap-y-4 sm:gap-y-5">
                <div className="w-full space-y-3 sm:w-1/2 sm:space-y-4">
                  <List text="Dedicated project managers" />
                  <List text="Fast, real-time collaboration" />
                  <List text="Scalable, future-proof builds" />
                  <List text="Post-launch support & evolution" />
                </div>
                <div className="w-full space-y-3 sm:w-1/2 sm:space-y-4">
                  <List text="Tailored strategies for each need" />
                  <List text="Expertise in Web3, AI, tech stack" />
                  <List text="Transparent processes & reports" />
                  <List text="Quality & security-first mindset" />
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full px-1 lg:w-1/2 lg:px-3">
            <div className="relative mx-auto aspect-[25/24] w-full max-w-[280px] sm:max-w-[350px] md:max-w-[420px] lg:max-w-[500px]">
              <Image
                src="/images/about/about-image.svg"
                alt="about-light"
                fill
                className="mx-auto hidden dark:hidden sm:block drop-shadow-lg"
                sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, (max-width: 1024px) 420px, 500px"
              />
              <Image
                src="/images/about/about-image-dark.svg"
                alt="about-dark"
                fill
                className="mx-auto hidden dark:block sm:block drop-shadow-lg"
                sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, (max-width: 1024px) 420px, 500px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyValue;
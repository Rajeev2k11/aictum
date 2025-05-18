import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import FadedToBold from "../Common/FadeToBold";


const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="text-body-color mb-5 flex items-center text-lg font-medium">
      <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="p-16 md:pt-20  rounded-md lg:pt-28 border-2 border-white container max-w-6xl mx-auto shadow-2xl">
      <div className="container">
       
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
        <FadedToBold text="We Have Your Back" />
          <div className="mx-4 flex flex-wrap items-center mt-8">
            <div className="w-full px-4 lg:w-1/2">
           
              
              <h1 className="text-2xl">At every step of your digital journey, we’re right beside you.
              From the first idea to the final launch — and beyond — our team ensures your vision is built, scaled, and supported with precision and care.</h1>

              <div
                className="mb-12 max-w-[570px] lg:mb-0 py-8"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap mb-10">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2 ">
                    <List text="Dedicated project managers" />
                    <List text="Fast communication and real-time collaboration" />
                    <List text="Scalable, Future-Proof Solutions" />
                    <List text="Post-launch support and continuous improvements" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text=" Tailored Strategies for Every Project" />
                    <List text="Deep Expertise in Web3, AI, and Emerging Technologies" />
                    <List text="Transparent Processes and Reporting" />
                    <List text="Commitment to Quality and Security" />
                  
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-25/24 max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/about-image-dark.svg"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;

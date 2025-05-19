import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import OurProcessCard from "./OurProcessCard";

const AboutSectionTwo = () => {
  const processSteps = [
    {
      title: "1. Discovery & Research",
      text: "We start by understanding your vision, business goals, and target audience. Detailed research ensures we build the right solution."
    },
    {
      title: "2. Planning & Strategy",
      text: "We design a clear roadmap, define project milestones, and select the right technologies to set the foundation for success."
    },
    {
      title: "3. Design & Prototyping",
      text: "Our design team creates intuitive, engaging, and user-centric prototypes to visualize the end product before development begins."
    },
    {
      title: "4. Development",
      text: "Our developers bring the design to life, focusing on performance, scalability, and clean code practices. We build with agility and precision."
    },
    {
      title: "5. Testing & Quality Assurance",
      text: "We rigorously test across devices and browsers to ensure the product is fast, secure, and flawless before launch."
    },
    {
      title: "6. Launch & Deployment",
      text: "Once everything is perfect, we launch your project smoothly and efficiently, ensuring zero downtime and maximum impact."
    },
    {
      title: "7. Support & Growth",
      text: "Our partnership doesn't end at launch. We offer ongoing support, updates, and strategies to help your product grow and adapt."
    }
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 max-w-6xl mx-auto px-4 sm:px-6">
      <SectionTitle
        title="Our Process"
        paragraph="We follow a proven process to bring your ideas to life with precision and quality."
        center
        mb="mb-8 md:mb-12"
      />
      
      {/* Process Cards - Visible on all screens */}
      <div className="flex flex-col gap-4 md:gap-6 mb-8 md:mb-12 lg:mb-16">
        {processSteps.map((step, i) => (
          <OurProcessCard 
            key={i} 
            text={step.title} 
            index={i} 
            
          />
        ))}
      </div>

      {/* Image and Detailed Steps - Mobile optimized */}
      <div className="lg:container">
        <div className="flex flex-col lg:flex-row lg:-mx-4 items-center">
          {/* Image - Mobile centered */}
          <div className="w-full lg:w-1/2 px-0 lg:px-4 mb-8 lg:mb-0">
            <div className="relative aspect-[25/24] w-full max-w-[500px] mx-auto">
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>

          {/* Process Details - Mobile optimized spacing */}
          <div className="w-full lg:w-1/2 px-0 lg:px-4">
            <div className="space-y-6 md:space-y-8">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`p-4 md:p-5 rounded-lg bg-white/50 dark:bg-gray-800/50 shadow-sm ${
                    index === 2 || index === 5 ? 'mb-2' : 'mb-6'
                  }`}
                >
                  <h3 className="text-lg md:text-xl font-bold text-black dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base font-medium leading-relaxed text-body-color">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
import SectionTitle from "../Common/SectionTitle";
import OurProcessCard from "./OurProcessCard";

const AboutSectionTwo = () => {
  const processSteps = [
    {
      title: "1. Discovery & Research",
      text: "We start by understanding your vision, business goals, and target audience. Detailed research ensures we build the right solution.",
    },
    {
      title: "2. Planning & Strategy",
      text: "We design a clear roadmap, define project milestones, and select the right technologies to set the foundation for success.",
    },
    {
      title: "3. Design & Prototyping",
      text: "Our design team creates intuitive, engaging, and user-centric prototypes to visualize the end product before development begins.",
    },
    {
      title: "4. Development",
      text: "Our developers bring the design to life, focusing on performance, scalability, and clean code practices. We build with agility and precision.",
    },
    {
      title: "5. Testing & Quality Assurance",
      text: "We rigorously test across devices and browsers to ensure the product is fast, secure, and flawless before launch.",
    },
    {
      title: "6. Launch & Deployment",
      text: "Once everything is perfect, we launch your project smoothly and efficiently, ensuring zero downtime and maximum impact.",
    },
    {
      title: "7. Support & Growth",
      text: "Our partnership doesn't end at launch. We offer ongoing support, updates, and strategies to help your product grow and adapt.",
    },
  ];

  return (
    <section className="px-5 py-16 sm:px-6 sm:py-20 lg:py-24 xl:py-28 text-white bg-[#120C1C]">
      <div className="mx-auto max-w-7xl">
        {/* Title Section */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            title="Our Process"
            paragraph="We follow a proven process to bring your ideas to life with precision and quality."
            center
            mb="mb-12 sm:mb-16 md:mb-20"
          />
        </div>

        {/* Process Cards */}
        <div className="mx-auto max-w-5xl 
                      [background-image:radial-gradient(circle,rgba(255,255,255,0.1)_1.5px,transparent_1px)] 
                      [background-size:20px_20px]
                      py-8 sm:py-10 px-4 sm:px-6 md:px-8 rounded-xl">
          <div className="flex flex-col gap-5 sm:gap-6 md:gap-7 lg:gap-8">
            {processSteps.map((step, i) => (
              <OurProcessCard
                key={i}
                title={step.title}
                text={step.text}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
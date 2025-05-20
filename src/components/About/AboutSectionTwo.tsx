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
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:py-24 bg-[#120C1C] text-white">
      <div className="mx-auto max-w-4xl text-center">
        <SectionTitle
          title="Our Process"
          paragraph="We follow a proven process to bring your ideas to life with precision and quality."
          center
          mb="mb-14 md:mb-20"
        />
      </div>

      {/* Process Cards */}
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
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
    </section>
  );
};

export default AboutSectionTwo;

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import OurProcessCard from "./OurProcessCard";

const AboutSectionTwo = () => {
  const items = ["1. Discovery & Research", "2. Planning & Strategy", "3. Design & Prototyping", "4. Development4", "5. Testing & Quality Assurance", "6. Launch & Deployment", "7. Support & Growth"];
 
  return (<>

   
   
    <section className="py-12 md:py-16 lg:py-20 max-w-6xl mx-auto">
      <SectionTitle
              title="Our Process"
              paragraph="We follow a proven process to bring your ideas to life with precision and quality."
              center
            />
    <div className="flex flex-col ">
      {items.map((item, i) => (
      
        <OurProcessCard key={i} text={item} index={i} />
       
     
      ))}
    </div>
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
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
          <div className="w-full px-4 lg:w-1/2">
         
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                1. Discovery & Research
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                We start by understanding your vision, business goals, and target audience.
                Detailed research ensures we build the right solution.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                2. Planning & Strategy
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                We design a clear roadmap, define project milestones, and select the right technologies to set the foundation for success.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                3. Design & Prototyping
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Our design team creates intuitive, engaging, and user-centric prototypes to visualize the end product before development begins.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                4. Development
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Our developers bring the design to life, focusing on performance, scalability, and clean code practices. We build with agility and precision.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                5. Testing & Quality Assurance
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                We rigorously test across devices and browsers to ensure the product is fast, secure, and flawless before launch.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                6. Launch & Deployment
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Once everything is perfect, we launch your project smoothly and efficiently, ensuring zero downtime and maximum impact.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                7. Support & Growth
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Our partnership doesn't end at launch. We offer ongoing support, updates, and strategies to help your product grow and adapt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default AboutSectionTwo;

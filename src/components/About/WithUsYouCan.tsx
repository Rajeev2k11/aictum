import * as motion from 'motion/react-client';

export const WithUsYouCan = () => {
  const steps = [
    {
      title: "Transform Your Business",
      description:
        "Leverage our expertise to completely reinvent your operations, customer experiences, and market positioning through digital transformation.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
      reverse: false,
    },
    {
      title: "Future-Proof Your Technology",
      description:
        "Our solutions are built with scalability and adaptability in mind, ensuring your tech stack evolves with your needs and the market.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
      reverse: true,
    },
    {
      title: "Accelerate Innovation",
      description:
        "Access our cutting-edge labs and innovation teams to co-create solutions that give you a competitive edge.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      reverse: false,
    },
    {
      title: "Optimize Operations",
      description:
        "Streamline your processes with our intelligent automation and AI-powered workflow solutions that reduce costs and improve efficiency.",
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
      reverse: true,
    },
  ];

  return (
    <section className="mb-16 md:mb-24 lg:mb-32 px-4 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 md:mb-12 text-purple-300 border-b border-purple-900 pb-2 md:pb-3"
      >
        With Us You Can
      </motion.h2>
      <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14">
        {steps.map((step, idx) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            viewport={{ once: false }}
            className={`
              flex flex-col ${step.reverse ? 'sm:flex-col-reverse md:flex-row-reverse' : 'sm:flex-col-reverse md:flex-row'}
              items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10
              bg-[#1e1835]/50 rounded-xl p-4 sm:p-6 md:p-8
              border border-purple-900/30 transition-all duration-300
            `}
          >
            {/* Text Content */}
            <div className="w-full md:w-1/2">
              <div className="mb-2 sm:mb-3">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-purple-200">
                  {step.title}
                </h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose">
                {step.description}
              </p>
            </div>
            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <motion.img
                src={step.image}
                alt={step.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: false }}
                className="rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover aspect-video"
                loading="lazy"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
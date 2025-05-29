import * as motion from 'motion/react-client';

export const OurStory = () => (
  <section className="mb-24 bg-gradient-to-b from-[#d5cee0e7] via-[#fdfbff] to-[#32124d] py-12 px-4 ">
    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-6xl mx-auto">
      <div className="flex-1">
        <h3 className="text-3xl font-medium mb-8 text-purple-900">Our Story</h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Founded in 2003 as a small startup with just three engineers, we've grown into a multinational 
          technology leader through relentless innovation and customer-focused solutions. Our journey has 
          been marked by milestones that reflect our commitment to pushing technological boundaries.
        </p>
        <p className="text-gray-700 leading-relaxed">
          What sets us apart is our culture of continuous learning and our belief that technology should 
          be both powerful and accessible. We invest heavily in research and development, with 30% of our 
          revenue dedicated to creating the next generation of solutions.
        </p>
      </div>
      <div className="flex-1 flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Our Story"
          className="rounded-xl shadow-lg w-full max-w-md md:max-w-lg object-cover h-[350px] md:h-[400px]"
        />
      </div>
    </div>
  </section>
);
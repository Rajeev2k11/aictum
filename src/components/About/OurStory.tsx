import * as motion from 'motion/react-client';
import Image from 'next/image';

export const OurStory = () => (
  <section className="mb-24 bg-gradient-to-b from-[#d5cee0e7] via-[#fdfbff] to-[#52217a9c] py-12 px-4 ">
    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-6xl mx-auto">
      <div className="flex-1">
        <h3 className="text-3xl font-medium mb-8 text-[#AE69DF]">Our Story</h3>
        <p className="text-black mb-6 leading-relaxed">
        At <span className='font-bold'>AICTUM</span>, we believe that the digital future belongs to those who innovate boldly and execute 
        precisely. Founded with the vision of seamlessly integrating the transformative powers of
        <span className='font-bold'>Artificial Intelligence</span> and  <span className='font-bold'>Blockchain Technology</span>, AICTUM is dedicated to delivering 
         excellence and empowering businesses to thrive in a rapidly evolving digital landscape.
        </p>
        <p className="text-black leading-relaxed">
        Our journey began with a simple yet powerful ambition—to make complex technologies 
        accessible, reliable, and impactful. From early challenges to strategic breakthroughs, 
        we&rsquo;ve consistently emphasized collaboration, innovation, and transparency.
        </p>

        <p className="text-black leading-relaxed">
        Today, AICTUM proudly partners with forward-thinking businesses, helping them navigate 
        and dominate through intelligent solutions tailored specifically to their unique needs.
         Driven by passion, guided by expertise, and committed to excellence, we invite you to become a part of our evolving story.<br />

<span className='font-bold '>Together, let&rsquo;s shape a smarter, secure, and more connected future.</span>

        </p>
      </div>
      <div className="flex-1 flex justify-center">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Our Story"
          className="rounded-xl shadow-lg w-full max-w-md md:max-w-lg object-cover h-[350px] md:h-[400px]"
        />
      </div>
    </div>
  </section>
);
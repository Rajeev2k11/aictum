'use client';

import emailjs from "@emailjs/browser";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cmhf5er', 'template_td5mnag', e.target, 'Wp2nwGffVrFwN0ib2')
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Thank you for your message! We'll get back to you soon.", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            style: {
              background: '#9345E0',
              color: '#ffffff',
              border: '1px solid #B76CFF',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(147, 69, 224, 0.3)',
              fontFamily: 'inherit',
              fontSize: '14px',
              fontWeight: '500'
            }
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Oops! Something went wrong. Please try again later.", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            style: {
              background: '#ff4d4f',
              color: '#ffffff',
              border: '1px solid #ff7875',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(255, 77, 79, 0.3)',
              fontFamily: 'inherit',
              fontSize: '14px',
              fontWeight: '500'
            }
          });
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#d5cee0e7] via-[#fdfbff] to-[#9d7db7]">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
      />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Content - Contact Info */}
          <div className="lg:w-5/12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Let&apos;s Build Something Amazing Together
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Got an idea or a project in mind? Share a few details, and we&apos;ll be in touch.
                  <br /><br />
                  No pressure, just a simple conversation.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+91 7209236123</p>
                    <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9am-6pm</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">team@aictum.com</p>
                    <p className="text-sm text-gray-500 mt-1">Typically replies within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Headquarters</h3>
                    <p className="text-gray-600">Noida</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:w-7/12">
            <div className="bg-gray-50 rounded-xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch</h3>
              <p className="text-gray-600 mb-6">We&apos;d love to hear about your project. Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
              
              <form onSubmit={sendEmail}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:bg-[#eccffae7] focus:text-black not-focus-within:text-black transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                  
                  {/* Last Name */}
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:bg-[#eccffae7] focus:text-black not-focus-within:text-black transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                  
                  {/* Email */}
                  <div className="md:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:bg-[#eccffae7] focus:text-black not-focus-within:text-black transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  {/* Phone */}
                  <div className="md:col-span-2">
                    <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="contactNumber"
                      name="contactNumber"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:bg-[#eccffae7] focus:text-black not-focus-within:text-black transition-all duration-300"
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>
                  
                  {/* Subject */}
                  <div className="md:col-span-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      What can we help you with? <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:text-black not-focus-within:text-black transition-all duration-300"
                    >
                      <option value="">Select an option</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Consultation">Consultation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  {/* Message */}
                  <div className="md:col-span-2">
                    <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-1">
                      Tell us about your project <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="projectDescription"
                      name="projectDescription"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:bg-[#eccffae7] focus:text-black not-focus-within:text-black transition-all duration-300"
                      placeholder="Briefly describe your project goals, timeline, and any specific requirements..."
                    ></textarea>
                  </div>
                  
                  {/* Privacy Policy */}
                  <div className="md:col-span-2">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="privacyPolicy"
                          name="privacyPolicy"
                          type="checkbox"
                          required
                          className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="privacyPolicy" className="text-gray-700">
                          I agree to the <Link href="/privacy-policy" className="text-purple-600 hover:text-purple-500">Privacy Policy</Link> and 
                          <Link href="/terms" className="text-purple-600 hover:text-purple-500"> Terms of Service</Link>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      className="w-full bg-purple-900 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-lg hover:shadow-xl"
                    >
                      Send Message
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
              
              <div className="mt-6 text-center text-sm text-gray-500">
                <p>We respect your privacy. Your information will never be shared.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
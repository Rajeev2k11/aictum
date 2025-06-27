'use client';

import emailjs from "@emailjs/browser";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Enquiry = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cmhf5er', 'template_9odzzwh', e.target, 'Wp2nwGffVrFwN0ib2')
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email sent successfully!", {
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
              boxShadow: '0 4px 12px rgba(147, 69, 224, 0.3)'
            }
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Email sending failed. Please try again.", {
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
              boxShadow: '0 4px 12px rgba(255, 77, 79, 0.3)'
            }
          });
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="overflow-hidden py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#d5cee0e7] via-[#fdfbff] to-[#9d7db7]">
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
        toastStyle={{
          fontFamily: 'inherit',
          fontSize: '14px',
          fontWeight: '500'
        }}
      />
      
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-start">
          {/* Left Content - Adjusted spacing */}
          <div className="w-full px-4 lg:w-5/12">
            <div className="lg:pr-8 lg:pt-4">
              <h2 className="mb-3 text-1xl font-bold text-purple-900">
                ENQUIRY
              </h2>
              <h3 className="mb-4 text-2xl font-bold text-purple-700">
                Build Smarter Tech with Expert-Led AI, Blockchain & Web3 Solutions
              </h3>
              <div className="space-y-5 mb-6">
                <p className="text-base text-[#141418]">
                  Start Your Project with a Free Strategy Call
                </p>
              </div>
              
              {/* Box for Stay Updated and Social Links - Hidden on mobile/tablet */}
              <div className="hidden lg:block mt-44 p-4 bg-[#141418] rounded-lg max-w-xs">
                <p className="text-sm text-[#CCCCCC] mb-4">
                  Stay up to date with what`s happening at Aictum
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-3">
                  <Link
                    href="#"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d5d4d7] text-black hover:bg-[#9345E0] hover:text-white transition-colors duration-300"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      className="fill-current"
                    >
                      <path d="M14.3442 0H1.12455C0.499798 0 0 0.497491 0 1.11936V14.3029C0 14.8999 0.499798 15.4222 1.12455 15.4222H14.2942C14.919 15.4222 15.4188 14.9247 15.4188 14.3029V1.09448C15.4688 0.497491 14.969 0 14.3442 0ZM4.57316 13.1088H2.29907V5.7709H4.57316V13.1088ZM3.42362 4.75104C2.67392 4.75104 2.09915 4.15405 2.09915 3.43269C2.09915 2.71133 2.69891 2.11434 3.42362 2.11434C4.14833 2.11434 4.74809 2.71133 4.74809 3.43269C4.74809 4.15405 4.19831 4.75104 3.42362 4.75104ZM13.1947 13.1088H10.9206V9.55183C10.9206 8.7061 10.8956 7.58674 9.72108 7.58674C8.52156 7.58674 8.34663 8.53198 8.34663 9.47721V13.1088H6.07255V5.7709H8.29665V6.79076H8.32664C8.64661 6.19377 9.37132 5.59678 10.4958 5.59678C12.8194 5.59678 13.2447 7.08925 13.2447 9.12897V13.1088H13.1947Z" />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d5d4d7] text-black hover:bg-[#9345E0] hover:text-white transition-colors duration-300"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      className="fill-current"
                    >
                      <path d="M15.5456 2.45429C14.1818 1.09091 12.3636 0.363636 10.3636 0.363636C7.09091 0.363636 3.81818 2.90909 2.90909 6.72727C1.45455 6.72727 0.363636 7.81818 0.363636 9.27273V14.5455C0.363636 15.6364 1.45455 16.3636 2.54545 16.3636H7.81818C8.90909 16.3636 9.63636 15.6364 9.63636 14.5455V9.27273H7.81818V14.5455H2.54545V9.27273C2.54545 8.72727 2.90909 8.36364 3.45455 8.36364H4.36364C5.09091 5.09091 8.36364 2.90909 10.3636 2.90909C11.8182 2.90909 13.0909 3.63636 14.0909 4.63636C15.0909 5.63636 15.8182 6.90909 15.8182 8.36364C15.8182 10.3636 14.5455 12.1818 12.7273 12.7273V10.9091C13.8182 10.5455 14.5455 9.45455 14.5455 8.36364C14.5455 6.72727 13.6364 5.09091 12 4.18182C10.3636 3.27273 8.72727 3.63636 7.45455 4.90909C6.18182 6.18182 5.81818 7.81818 6.72727 9.45455C7.63636 11.0909 9.27273 11.8182 10.9091 11.0909V13.0909C7.63636 12.7273 5.09091 9.81818 5.09091 6.72727C5.09091 4.72727 6.18182 3.09091 7.81818 2.18182C9.45455 1.27273 11.4545 1.63636 12.7273 2.90909C13.4545 3.63636 14.1818 4.72727 14.5455 5.81818H12.7273V7.63636H15.8182V4.54545C15.8182 3.45455 15.0909 2.45429 15.5456 2.45429Z" />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d5d4d7] text-black hover:bg-[#9345E0] hover:text-white transition-colors duration-300"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      className="fill-current"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="w-full px-4 lg:w-7/12">
            <div className="relative rounded-lg bg-[#141418] p-4 shadow-lg lg:ml-auto" style={{ maxWidth: '450px' }}>
              <form onSubmit={sendEmail}>
                <div className="-mx-3 flex flex-wrap">
                  {/* First Name & Last Name */}
                  <div className="w-full px-3 md:w-1/2">
                    <div className="mb-4">
                      <label
                        htmlFor="firstName"
                        className="mb-1 block text-xs font-medium text-[#d8a7ef]"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="First name"
                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-xs text-gray-700 placeholder:text-gray-600 focus:border-[#9345E0] focus:outline-none focus:ring-1 focus:ring-[#9345E0]"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 md:w-1/2">
                    <div className="mb-4">
                      <label
                        htmlFor="lastName"
                        className="mb-1 block text-xs font-medium text-[#d8a7ef]"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Last name"
                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-xs text-gray-700 placeholder:text-gray-600 focus:border-[#9345E0] focus:outline-none focus:ring-1 focus:ring-[#9345E0]"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="w-full px-3">
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="mb-1 block text-xs font-medium text-[#d8a7ef]"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="name@mycompany.com"
                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-xs text-gray-700 placeholder:text-gray-600 focus:border-[#9345E0] focus:outline-none focus:ring-1 focus:ring-[#9345E0]"
                        required
                      />
                    </div>
                  </div>

                  {/* Contact Number */}
                  <div className="w-full px-3">
                    <div className="mb-4">
                      <label
                        htmlFor="contactNumber"
                        className="mb-1 block text-xs font-medium text-[#d8a7ef]"
                      >
                        Contact Number
                      </label>
                      <input
                        type="tel"
                        name="contactNumber"
                        id="contactNumber"
                        placeholder="+33 01 23 45 67 89"
                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-xs text-gray-700 placeholder:text-gray-600 focus:border-[#9345E0] focus:outline-none focus:ring-1 focus:ring-[#9345E0]"
                      />
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="w-full px-3">
                   <div className="mb-4">
                      <label
                        htmlFor="budget"
                        className="mb-1 block text-xs font-medium text-[#d8a7ef]"
                      >
                        Budget
                      </label>
                      <select
                        name="budget"
                        id="budget"
                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-xs text-gray-700 placeholder:text-gray-600 focus:border-[#9345E0] focus:outline-none focus:ring-1 focus:ring-[#9345E0]"
                      >
                        <option value="Still Evaluating">Still Evaluating</option>
                        <option value="Less than $10K">Less than $10K</option>
                        <option value="$10K - $50K">$10K - $50K</option>
                        <option value="$50K - $100K">$50K - $100K</option>
                        <option value="More than $100K">More than $100K</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="w-full px-3">
                    <div className="mb-4">
                      <label
                        htmlFor="projectDescription"
                        className="mb-1 block text-xs font-medium text-[#d8a7ef]"
                      >
                        Describe Your Project
                      </label>
                      <textarea
                        id="projectDescription"
                        name="projectDescription"
                        rows={3}
                        placeholder="Write down all the details here"
                        className="w-full resize-none rounded-md border border-gray-300 bg-white px-3 py-2 text-xs text-gray-700 placeholder:text-gray-600 focus:border-[#9345E0] focus:outline-none focus:ring-1 focus:ring-[#9345E0]"
                        required
                      ></textarea>
                    </div>
                  </div>

                  {/* Privacy Policy Checkbox */}
                  <div className="w-full px-3 mb-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="privacyPolicy"
                        name="privacyPolicy"
                        className="h-3 w-3 rounded border-gray-900 text-[#9345E0] focus:ring-[#9345E0]"
                        required
                      />
                      <label htmlFor="privacyPolicy" className="ml-2 block text-[10px] text-[#ffffff]">
                        I acknowledge receipt of the brand Privacy Policy.
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="w-full px-3">
                    <button
                      type="submit"
                      className="w-full rounded-md bg-[#9345E0] px-4 py-2 text-xs font-medium text-white transition duration-300 hover:bg-[#B76CFF] hover:shadow-lg"
                    >
                      Request Proposal
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enquiry;
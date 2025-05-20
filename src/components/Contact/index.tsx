import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28 bg-[#1A1325]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Contact Form */}
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-md bg-[#473062] px-8 py-11 shadow-lg sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Interested in Working Together? Let's Talk!
              </h2>
              <p className="mb-12 text-base font-medium text-[#CCCCCC]">
                Our support team will get back to you ASAP via email.
              </p>

              <form>
                <div className="-mx-4 flex flex-wrap">
                  {/* Name */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        className="w-full rounded-md border border-transparent bg-[#2A1B3D] px-6 py-3 text-base text-white placeholder:text-[#999] focus:border-[#9345E0] focus:outline-none focus:ring-2 focus:ring-[#9345E0]"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="w-full rounded-md border border-transparent bg-[#2A1B3D] px-6 py-3 text-base text-white placeholder:text-[#999] focus:border-[#9345E0] focus:outline-none focus:ring-2 focus:ring-[#9345E0]"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder="Enter your message"
                        className="w-full resize-none rounded-md border border-transparent bg-[#2A1B3D] px-6 py-3 text-base text-white placeholder:text-[#999] focus:border-[#9345E0] focus:outline-none focus:ring-2 focus:ring-[#9345E0]"
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="rounded-md bg-[#9345E0] px-9 py-4 text-base font-medium text-white transition duration-300 hover:bg-[#B76CFF]"
                    >
                      Let's Talk
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Newsletter or Side Section */}
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

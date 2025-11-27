import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { ContactForm } from "./ContactForm";

const Contact = () => {
  return (
     <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="border-b-4 border-[#5dfeca] pb-2">
              Get In Touch
            </span>
          </h2>
          <div className="md:flex justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>
              <p className="mb-6 text-gray-300">
                Feel free to reach out if you're looking for a developer, have a
                question, or just want to connect.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <a
                    href="mailto:kjakria53@gmail.com"
                    className="flex items-center"
                  >
                    <svg
                      className="h-6 w-6 text-[#5dfeca] hover:text-[#008e6a] mr-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>kjakaria53@gmail.com</span>
                  </a>
                </div>
                <div className="flex items-center">
                  <a
                    href="https://wa.me/8801877639415"
                    className="flex items-center"
                  >
                    <svg
                      className="h-6 w-6 text-[#5dfeca] hover:text-[#008e6a] mr-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>+880 1877639415</span>
                  </a>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a
                    target="_blank"
                    href="https://github.com/jakariahossain12"
                    className="text-[#5dfeca]  hover:text-[#008e6a]  transition duration-300"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/jakariahossain12"
                    className="text-[#5dfeca]  hover:text-[#008e6a] transition duration-300"
                  >
                    <FaLinkedin className="text-2xl" />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/jakaria.khan.1848816"
                    className="text-[#5dfeca]  hover:text-[#008e6a] transition duration-300"
                  >
                    <FaFacebook className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
             {/* form */}
             <ContactForm/>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contact
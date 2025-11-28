


import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaLinkedin, FaFacebook } from "react-icons/fa";
import BackButton from "./BackButton";

const DetailsNev = () => {
    
  return (
     <nav className="sticky top-0 w-full  z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Back Button */}
            <div className="flex items-center">
             <BackButton/>

            </div>

            {/* Social Links */}

            <div className="flex items-center space-x-4">
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
      </nav>
  )
}

export default DetailsNev
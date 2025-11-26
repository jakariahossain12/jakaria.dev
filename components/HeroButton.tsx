"use client"
import { FaFileDownload } from "react-icons/fa"

const HeroButton = () => {
    


     const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    
  };



  return (
    <>
 <button
                  onClick={() => scrollToSection("projects")}
                  className="px-6 py-3 bg-[#16f1b1] hover:bg-[#00b280] rounded-lg font-medium transition duration-300"
                >
                  View My Work
                </button>
                {/* <button
                  onClick={() => scrollToSection("contact")}
                  className="px-6 py-3 border border-blue-400 text-blue-400 hover:bg-blue-900 hover:bg-opacity-30 rounded-lg font-medium transition duration-300"
                >
                  Contact Me
                </button> */}
                <a
                href="https://drive.google.com/uc?export=download&id=1ALXCLDJErAOY8F8SMflcWpJNcaa-sQXO"
                  download="Md_Jakaria_Resume.pdf"
                  className="relative overflow-hidden group px-6 py-3 hover:bg-gradient-to-r from-[#00d99c] to-[#00b280] text-white rounded-lg font-medium transition-all duration-500 shadow-lg hover:shadow-[#00d99c]/30"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <FaFileDownload className="text-xl animate-bounce" />
                    Get My Resume
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#00b280] to-[#008e6a] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></span>
                </a>
    </>
  )
}

export default HeroButton
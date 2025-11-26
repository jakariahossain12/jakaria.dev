import Image from "next/image"
import TextType from "@/components/TextType"
import HeroButton from "./HeroButton"

const Hero = () => {
  return (
      <section
        
        className="pt-10 pb-20 px-4 sm:px-6 lg:px-8 "
      >
        <div className="max-w-7xl mx-auto">
          <div className="md:flex items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Hi, I'm <span className="">Md Jakaria</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300">
                      <TextType 
                      text={["Full Stack Web Developer!"]}
                      typingSpeed={75}
                      pauseDuration={1500}
                      showCursor={true}
                      cursorCharacter="|"
                      />
              </h2>

              <p className="text-lg mb-8 text-gray-300">
                I build exceptional digital experiences with modern web
                technologies.
              </p>
              <div className="flex space-x-4">
               <HeroButton/>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#007055] shadow-xl">
                <Image
                  src="/images/profile.jpg"
                  width={80}
                  height={80}
                  alt="Professional portrait of Md Jakaria"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero
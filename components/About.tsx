import Image from "next/image"

const About = () => {
  return (
      <section id="about" className="py-20  px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="border-b-4 border-[#16f1b1] pb-2 pt-12">About Me</span>
          </h2>
          <div className="md:flex items-center">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#007055]">
                <Image
                  src="/images/profile.jpg"
                  alt="Md Jakaria working as a web developer"
                  className="w-full h-full object-cover"
                  width={48}
                  height={48}
                />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-12">
              <p className="text-lg mb-6">
                I'm a passionate full-stack web developer who recently completed
                the Programming Hero Level 1 course. I specialize in creating
                modern, responsive web applications using cutting-edge
                technologies.
              </p>
              <p className="text-lg mb-6">
                With expertise in both front-end (React, JavaScript) and
                back-end (Node.js, Express, MongoDB) development, I bring ideas
                to life with clean, efficient code and thoughtful user
                experiences.
              </p>
              <p className="text-lg">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or mentoring aspiring
                developers.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About

const Footer = () => {
  return (
     <footer className=" py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-lg font-bold text-[#00d99c]">Md Jakaria</span>
            <p className="text-gray-400 mt-1">Full Stack Web Developer</p>
          </div>
          <div>
            <p className="text-gray-400">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  )
}

export default Footer
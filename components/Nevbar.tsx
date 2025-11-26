
import Image from "next/image";
import Link from "next/link";
import GooeyNav from "@/components/GooeyNav";
import MobileMenu from "./MobileNev";
const Nevbar = () => {
  

  const items = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Project", href: "#project" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header>
      <nav>
        {/* Logo */}
        <Link href="/" className="logo">
          <Image src="/icons/logo.png" alt="logo" width={24} height={34} />
          <p>MD Jakaria</p>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex">
          <GooeyNav
            items={items}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>

       <MobileMenu items={items}/>
      </nav>
      
    </header>
  );
};

export default Nevbar;
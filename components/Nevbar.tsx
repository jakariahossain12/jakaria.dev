import Image from "next/image"
import Link from "next/link"
import GooeyNav from "@/components/GooeyNav"


const Nevbar = () => {
    const items = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Skills", href: "#" },
  { label: "Project", href: "#" },
  { label: "Contact", href: "#" },
];
  return (
    <header>
        <nav>
            <Link href='/' className="logo">
                <Image src="/icons/logo.png" alt="logo" width={24}  height={34}/>
                <p>MD Jakaria</p>
            </Link>
            
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

            
        </nav>
    </header>
  )
}

export default Nevbar
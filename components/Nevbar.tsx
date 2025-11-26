"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GooeyNav from "@/components/GooeyNav";
import { FaBars, FaTimes } from "react-icons/fa";

const Nevbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    { label: "Home", href: "#home" },
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

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-black/80 backdrop-blur-md md:hidden">
            <ul className="flex flex-col items-center gap-6 py-6">
              {items.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-white text-lg font-semibold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nevbar;
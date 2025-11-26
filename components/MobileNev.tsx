"use client";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

interface MobileMenuProps {
  items: { label: string; href: string }[];
  
}

const MobileMenu = ({ items }: MobileMenuProps) => {
 const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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
    </>
  );
};

export default MobileMenu;
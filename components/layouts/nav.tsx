import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuIcon from "../icons/menu";

export default function Nav() {
  const [lastScroll, setLastScroll] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [transparent, setTransparent] = useState(false);
  const pathname = usePathname();

  // Setup navbar display -----------------
  const handleScroll = () => {
    const currentScroll = window.scrollY;

    if (currentScroll === 0) {
      setTransparent(false);
      setHidden(false);
    } else if (currentScroll > lastScroll && currentScroll > 100) {
      setHidden(true);
    } else if (currentScroll < lastScroll) {
      setHidden(false);
      setTransparent(true);
    }

    setLastScroll(currentScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);

  return (
    <div
      className={`fixed z-[100] w-full transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        transparent
          ? "text-white text-opacity-70 bg-orange-600 bg-opacity-70"
          : "text-white bg-orange-600"
      }`}
    >
      <div className="header flex justify-between py-2 px-4">
        <div>
          <Link legacyBehavior href="/home" passHref>
            <Image
              src="/suitmed-logo.png"
              alt="logo"
              width="100"
              height="100"
              className="mr-2 rounded-sm"
            />
          </Link>
        </div>
        <div className="menu flex items-center">
          <ul className="hidden md:flex gap-5">
            <li>
              <Link className={`py-2 ${pathname === "/work" ? "border-b-2" : "hover:border-b-2"}`} href="/work">
                Work
              </Link>
            </li>
            <li>
              <Link className={`py-2 ${pathname === "/about" ? "border-b-2" : "hover:border-b-2"}`} href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className={`py-2 ${pathname === "/services" ? "border-b-2" : "hover:border-b-2"}`} href="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className={`py-2 ${pathname === "/" ? "border-b-2" : "hover:border-b-2"}`} href="/" >
                Ideas
              </Link>
            </li>
            <li>
              <Link className={`py-2 ${pathname === "/careers" ? "border-b-2" : "hover:border-b-2"}`} href="/careers">
                Careers
              </Link>
            </li>
            <li>
              <Link className={`py-2 ${pathname === "/contact" ? "border-b-2" : "hover:border-b-2"}`} href="/contact">
                Contact
              </Link>
            </li>
          </ul>
          {/* 
          We can implement responsive layout for the navbar
          (not in the requirements criteria)
          */}
          <button className="md:hidden menu-button">
            <MenuIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

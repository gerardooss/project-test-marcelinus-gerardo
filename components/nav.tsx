import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [lastScroll, setLastScroll] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [transparent, setTransparent] = useState(false);

  const pathname = usePathname();

  const handleScroll = () => {
    const currentScroll = window.scrollY;

    {
      /* Setup navbar display ----------------- */
    }
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
          ? "text-white text-opacity-60 bg-orange-600 bg-opacity-50"
          : "text-white bg-orange-600"
      }`}
    >
      <div className="header flex justify-between py-2 px-4">
        <div>
          <Image
            src="/suitmed-logo.png"
            alt="logo"
            width="100"
            height="100"
            className="mr-2 rounded-sm"
          />
        </div>
        <div className="menu flex items-center">
          <ul className="hidden md:flex gap-5">
            <Link href="">
              Work
            </Link>
            <li>
              <Link className={`py-2 ${pathname === "/about" ? "border-b-2" : ""}`} href="/about">About</Link>
            </li>
            <li>
              <Link className={`py-2 ${pathname === "/services" ? "border-b-2" : ""}`} href="/services">Services</Link>
            </li>
            <li>
              <Link className={`py-2 ${pathname === "/" ? "border-b-2" : ""}`}  href="/">Ideas</Link>
            </li>
            <li>
              <Link href="">Careers</Link>
            </li>
            <li>
              <Link href="">Contact</Link>
            </li>
          </ul>
          {/* 
          We can implement responsive layout for the navbar
          (not in the requirements criteria)
          */}
          <button className="md:hidden menu-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

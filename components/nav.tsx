import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  const [lastScroll, setLastScroll] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [transparent, setTransparent] = useState(false);

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
      className={`fixed w-full transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        transparent
          ? "text-white text-opacity-60 bg-orange-500 bg-opacity-50"
          : "text-white bg-orange-500"
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
        <div className="flex items-center">
          <ul className="flex gap-5">
            <li>
              <Link href="">Work</Link>
            </li>
            <li>
              <Link href="">About</Link>
            </li>
            <li>
              <Link href="">Services</Link>
            </li>
            <li>
              <Link href="">Ideas</Link>
            </li>
            <li>
              <Link href="">Careers</Link>
            </li>
            <li>
              <Link href="">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

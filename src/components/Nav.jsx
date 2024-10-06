import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { close } from "../assets/icons";
import { navLinks } from "../constants/index";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="padding-x py-8 fixed z-50 w-full bg-white mb-25">
        <nav
          className="flex justify-between items-center 
      max-container"
        >
          <a href="/">
            <img src={headerLogo} alt="Logo" width={130} height={29} />
          </a>
          <ul
            className="flex-1 flex justify-center items-center 
        gap-16 max-lg:hidden"
          >
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal 
              text-lg text-slate-gray hover:text-coral-red transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className={`max-lg:block hidden transition-all ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <img src={close} alt="hamburger" width={20} height={20} />
            ) : (
              <img src={hamburger} alt="hamburger" width={20} height={20} />
            )}
          </button>
        </nav>
        <div
          className={`fixed top-16 bg-white inset-0 flex lg:hidden 
          justify-center pt-28 transition-all duration-700 ${
            isOpen ? "-translate-x-0" : "-translate-x-[100vw]"
          }`}
        >
          <ul className="flex flex-col gap-16 items-center">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal font-bold
              text-lg text-slate-gray hover:text-coral-red transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Nav;

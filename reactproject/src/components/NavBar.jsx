import { useState } from "react";
import logoIcon from "/logo.jpg";
import { Bars3Icon } from "@heroicons/react/24/solid";

const navbarLinks = [
  { title: "Inicio", to: "#home" },
  { title: "Servicios", to: "#services" },
  { title: "Contacto", to: "#contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='top-0 left-0 w-full fixed flex justify-between items-center text-md font-medium z-50 h-16 bg-aqua-teal-200 px-2 md:px-12'>
      <ul className='flex items-center gap-4'>
        <li>
          <img src={logoIcon} alt='' className='h-12' />
        </li>
        <li>
          <a href='#home'>
            <h1 className='text-xl font-bold text-teal-950'>
              E&S Consultorías y Asesorías SAS
            </h1>
          </a>
        </li>
      </ul>
      <ul
        className={`${
          isOpen ? "left-0" : "-left-full"
        } transition-all duration-300 md:left-0 flex h-full items-center md:gap-2 fixed md:relative top-16 md:top-0 flex-col md:flex-row justify-start w-full max-w-sm bg-aqua-teal-500 md:bg-transparent md:w-auto`}
      >
        {navbarLinks.map(({ title, to }) => {
          return (
            <li
              key={title}
              className='w-full md:w-auto h-16 flex items-center justify-center'
            >
              <a
                href={to}
                onClick={() => setIsOpen(false)}
                className='w-full md:w-auto px-4 text-aqua-teal-900 md:text-aqua-teal-700 h-full hover:h-10 hover:text-aqua-teal-950 hover:bg-aqua-teal-100 duration-700 hover:border-y-4 border-aqua-teal-400 hover:border-aqua-teal-50 transition-all flex items-center justify-center'
              >
                {title}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='md:hidden'>
        <li className='p-3' onClick={() => setIsOpen(!isOpen)}>
          <Bars3Icon className='h-9 fill-aqua-teal-950' />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

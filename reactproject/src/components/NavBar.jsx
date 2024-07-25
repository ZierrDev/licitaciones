import logoIcon from "/logo.jpg";

const navbarLinks = [
  { title: "Inicio", to: "/" },
  { title: "Servicios", to: "/services" },
  { title: "Contacto", to: "/contact" },
];

const NavBar = () => {
  return (
    <nav className='top-0 left-0 w-full fixed flex justify-between items-center text-md font-medium z-50 h-16 bg-teal-400 px-12'>
      <ul className='flex items-center gap-4'>
        <li>
          <img src={logoIcon} alt='' className='h-12' />
        </li>
        <li>
          <a href='#'>
            <h1 className='text-xl font-bold text-teal-950'>
              E&S Consultoría SAS
            </h1>
          </a>
        </li>
      </ul>
      <ul className='flex h-full items-center gap-2'>
        {navbarLinks.map(({ title, to }) => {
          return (
            <li key={title} className='h-full flex items-center'>
              <a
                href={to}
                className='px-4 text-teal-700 h-full hover:h-10 hover:text-teal-950 hover:bg-teal-200 duration-700 hover:border-y-4 border-teal-400 hover:border-teal-50 transition-all flex items-center'
              >
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;

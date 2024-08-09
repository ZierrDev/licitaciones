import { PropTypes } from "prop-types";

import NavBar from "../components/NavBar";

const Header = ({ children }) => {
  return (
    <header className='flex flex-col items-center justify-center pt-24'>
      <NavBar />
      {children}
    </header>
  );
};
Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;

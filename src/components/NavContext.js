import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const NavContext = createContext();
console.log(window.location.pathname);

function NavContextProvider({ children }) {
  const [navIsOpen, setNavIsOpen] = useState(true);
  const windowLocation = window.location.href;
  console.log(windowLocation);

  const toggleNavIsOpen = () => {
    setNavIsOpen((prev) => !prev);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <NavContext.Provider value={{ navIsOpen, toggleNavIsOpen, setNavIsOpen }}>
      {children}
    </NavContext.Provider>
  );
}

NavContextProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
export default NavContextProvider;

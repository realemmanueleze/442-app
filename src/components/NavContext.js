/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const NavContext = createContext();

// export const useNavbarContext = useContext(NavContext);

function NavContextProvider({ children }) {
  const [navIsOpen, setNavIsOpen] = useState(true);
  // localStorage.setItem('navIsOpen', navIsOpen);

  const togglenavIsOpen = () => {
    setNavIsOpen((prev) => !prev);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <NavContext.Provider value={{ navIsOpen, togglenavIsOpen, setNavIsOpen }}>
      {children}
    </NavContext.Provider>
  );
}

NavContextProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
export default NavContextProvider;

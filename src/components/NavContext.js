import React, { useState, createContext, useContext } from 'react';
import PropTypes, { element } from 'prop-types';

export const NavContext = createContext();

export function useNavbarContext() {
  return useContext(NavContext);
}

function NavContextProvider({ children }) {
  const [hideNav, setHideNav] = useState(false);

  const toggleNav = () => {
    setHideNav(true);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <NavContext.Provider value={{ hideNav, toggleNav }}>
      {children}
    </NavContext.Provider>
  );
}

NavContextProvider.propTypes = {
  children: PropTypes.objectOf(element).isRequired,
};
export default NavContextProvider;

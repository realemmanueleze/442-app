import React, { useContext, useEffect } from 'react';
import { NavContext } from 'components/NavContext';

function Page404() {
  const { setNavIsOpen } = useContext(NavContext);
  useEffect(() => {
    setNavIsOpen(false);
  });
  const styles = {
    margin: '20px',
  };
  return <div style={styles}>404 - Page not found</div>;
}

export default Page404;

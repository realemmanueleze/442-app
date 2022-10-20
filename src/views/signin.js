import React, { useEffect, useContext } from 'react';
import SigninForm from 'components/SigninForm';
import { NavContext } from 'components/NavContext';

function SigninPage() {
  const { setNavIsOpen } = useContext(NavContext);
  useEffect(() => {
    setNavIsOpen(false);
  });
  return <SigninForm />;
}

export default SigninPage;

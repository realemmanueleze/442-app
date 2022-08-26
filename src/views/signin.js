import React from 'react';
import SigninForm from 'components/SigninForm';
import NavContextProvider from 'components/NavContext';

function SigninPage() {
  return (
    <NavContextProvider>
      <SigninForm />
    </NavContextProvider>
  );
}

export default SigninPage;

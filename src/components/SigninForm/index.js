import React from 'react';
import {
  $Container,
  $FormWrap,
  $Icon,
  $FormContent,
  $Form,
  $FormH1,
  $FormLabel,
  $FormInput,
  $FormButton,
  $Text,
} from './SigninFormStyles';

function SigninForm() {
  return (
    <$Container>
      <$FormWrap>
        <$Icon to="/">442</$Icon>
        <$FormContent>
          <$Form>
            <$FormH1>Sign in to your account</$FormH1>
            <$FormLabel htmlFor="email-sign-in"> Email</$FormLabel>
            <$FormInput type="email" id="email-sign-in" required />
            <$FormLabel htmlFor="password-sign-in">Password</$FormLabel>
            <$FormInput type="email" id="password-sign-in" required />
            <$FormButton type="submit">Sign in</$FormButton>
            <$Text>Forgot password</$Text>
            <$Text>Sign up instead?</$Text>
          </$Form>
        </$FormContent>
      </$FormWrap>
    </$Container>
  );
}

export default SigninForm;

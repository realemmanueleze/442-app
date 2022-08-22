import React from 'react';
import { FaBars } from 'react-icons/fa';
import PropTypes from 'prop-types';
import {
  $Nav,
  $NavbarContainer,
  $NavLogo,
  $MobileMenuIcon,
  $NavMenu,
  $NavItem,
  $NAvLinks,
  $NavBtn,
  $NavBtnLink,
} from './NavbarStyles';

export default function Navbar({ toggleMobileMenu }) {
  return (
    <$Nav>
      <$NavbarContainer>
        <$NavLogo to="/">442</$NavLogo>
        <$MobileMenuIcon onClick={toggleMobileMenu}>
          <FaBars />
        </$MobileMenuIcon>
        <$NavMenu>
          <$NavItem>
            <$NAvLinks to="about">About</$NAvLinks>
          </$NavItem>
          <$NavItem>
            <$NAvLinks to="discover">Discover</$NAvLinks>
          </$NavItem>
          <$NavItem>
            <$NAvLinks to="services">Services</$NAvLinks>
          </$NavItem>
          <$NavItem>
            <$NAvLinks to="signup">Sign Up</$NAvLinks>
          </$NavItem>
        </$NavMenu>
        <$NavBtn>
          <$NavBtnLink to="/signin">Sign In</$NavBtnLink>
        </$NavBtn>
      </$NavbarContainer>
    </$Nav>
  );
}

Navbar.propTypes = {
  toggleMobileMenu: PropTypes.func.isRequired,
};

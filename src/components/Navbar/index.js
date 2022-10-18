import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
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

export default function Navbar({
  toggleMobileMenu,
  navIsOpen,
  toggleNavIsOpen,
}) {
  const [scrollNav, setScrollNav] = useState(false);
  console.log(navIsOpen);
  console.log(toggleNavIsOpen);

  const navEffectOnScroll = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', navEffectOnScroll);
  }, []);

  return (
    <$Nav scrollNav={scrollNav} navIsOpen={navIsOpen}>
      <$NavbarContainer>
        <$NavLogo to="/" onClick={() => scroll.scrollToTop()}>
          442
        </$NavLogo>
        <$MobileMenuIcon onClick={toggleMobileMenu}>
          <FaBars />
        </$MobileMenuIcon>
        <$NavMenu>
          <$NavItem>
            <$NAvLinks
              to="about"
              smooth
              duration={500}
              spy
              exact="true"
              offset={-80}
              activeClass="active"
            >
              About
            </$NAvLinks>
          </$NavItem>
          <$NavItem>
            <$NAvLinks
              to="discover"
              smooth
              duration={500}
              spy
              exact="true"
              offset={-80}
              activeClass="active"
            >
              Discover
            </$NAvLinks>
          </$NavItem>
          <$NavItem>
            <$NAvLinks
              to="services"
              smooth
              duration={500}
              spy
              exact="true"
              offset={-80}
              activeClass="active"
            >
              Services
            </$NAvLinks>
          </$NavItem>
          <$NavItem>
            <$NAvLinks
              to="signup"
              smooth
              duration={500}
              spy
              exact="true"
              offset={-80}
              activeClass="active"
            >
              Sign Up
            </$NAvLinks>
          </$NavItem>
        </$NavMenu>
        <$NavBtn>
          <$NavBtnLink to="/signin" onClick={toggleNavIsOpen}>
            Sign In
          </$NavBtnLink>
        </$NavBtn>
      </$NavbarContainer>
    </$Nav>
  );
}

Navbar.propTypes = {
  toggleMobileMenu: PropTypes.func.isRequired,
  toggleNavIsOpen: PropTypes.func.isRequired,
  navIsOpen: PropTypes.bool.isRequired,
};

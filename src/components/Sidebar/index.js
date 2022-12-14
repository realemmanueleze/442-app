import React from 'react';
import PropTypes from 'prop-types';
import {
  $SidebarContainer,
  $Icon,
  $CloseIcon,
  $SidebarWrapper,
  $SidebarLink,
  $SidebarRoute,
  $SidebarBtnWrapper,
  $SidebarMenu,
} from './SidebarStyles';

function Sidebar({ toggleMobileMenu, isOpen, toggleNavIsOpen, navIsOpen }) {
  return (
    <$SidebarContainer isOpen={isOpen} navIsOpen={navIsOpen}>
      <$Icon onClick={toggleMobileMenu}>
        <$CloseIcon />
      </$Icon>
      <$SidebarWrapper onClick={toggleMobileMenu}>
        <$SidebarMenu>
          <$SidebarLink to="about" onClick={toggleMobileMenu}>
            About
          </$SidebarLink>
          <$SidebarLink to="discover" onClick={toggleMobileMenu}>
            Discover
          </$SidebarLink>
          <$SidebarLink to="services" onClick={toggleMobileMenu}>
            Services
          </$SidebarLink>
          <$SidebarLink to="signup" onClick={toggleMobileMenu}>
            Sign Up
          </$SidebarLink>
        </$SidebarMenu>
        <$SidebarBtnWrapper>
          <$SidebarRoute
            to="/signin"
            onClick={(toggleMobileMenu, toggleNavIsOpen)}
          >
            Sign In
          </$SidebarRoute>
        </$SidebarBtnWrapper>
      </$SidebarWrapper>
    </$SidebarContainer>
  );
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMobileMenu: PropTypes.func.isRequired,
  toggleNavIsOpen: PropTypes.func.isRequired,
  navIsOpen: PropTypes.bool.isRequired,
};
export default Sidebar;

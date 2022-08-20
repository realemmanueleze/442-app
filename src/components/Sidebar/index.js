import React from 'react'
import {$SidebarContainer, $Icon, $CloseIcon, $SidebarWrapper, $SidebarLink, $SidebarRoute, $SidebarBtnWrapper, $SidebarMenu } from './SidebarStyles'

function Sidebar({toggleMobileMenu, isOpen}) {

  return (
    <$SidebarContainer isOpen={isOpen} onClick={toggleMobileMenu}>
        <$Icon>
            <$CloseIcon onClick={toggleMobileMenu}/>
        </$Icon>
        <$SidebarWrapper>
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
                <$SidebarLink to="signup" onClick={toggleMobileMenu} >
                    Sign Up
                </$SidebarLink>
            </$SidebarMenu>
            <$SidebarBtnWrapper>
                <$SidebarRoute to="/" onClick={toggleMobileMenu}>
                    Sign In
                </$SidebarRoute>
            </$SidebarBtnWrapper>
        </$SidebarWrapper>
    </$SidebarContainer>
  )
}

export default Sidebar;
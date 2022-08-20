import React from "react";
import { $Nav, $NavbarContainer, $NavLogo, $MobileMenuIcon, $NavMenu, $NavItem, $NAvLinks, $NavBtn, $NavBtnLink } from "./NavbarStyles";
import {FaBars} from 'react-icons/fa'

export default function Navbar({setIsOpen}) {

  return (
    <$Nav>
        <$NavbarContainer>
            <$NavLogo to="/">442</$NavLogo>
            <$MobileMenuIcon onClick={()=>setIsOpen(true)}>
                <FaBars />
            </$MobileMenuIcon>
            <$NavMenu>
                <$NavItem>
                    <$NAvLinks to='about'>About</$NAvLinks>
                </$NavItem>
                <$NavItem>
                    <$NAvLinks to='discover'>Discover</$NAvLinks>
                </$NavItem>
                <$NavItem>
                    <$NAvLinks to='services'>Services</$NAvLinks>
                </$NavItem>
                <$NavItem>
                    <$NAvLinks to='signup'>Sign Up</$NAvLinks>
                </$NavItem>
            </$NavMenu>
            <$NavBtn>
                <$NavBtnLink to='/signin'>Sign In</$NavBtnLink>
            </$NavBtn>
        </$NavbarContainer>
    </$Nav>
  )
}
import React from 'react'
import {$SidebarContainer, $Icon, $CloseIcon, $SidebarWrapper, $SidebarLink, $SidebarRoute, $SidebarBtnWrapper, $SidebarMenu } from './SidebarStyles'

function Sidebar({setIsOpen, isOpen}) {

  return (
    <$SidebarContainer isOpen={isOpen}>
        <$Icon>
            <$CloseIcon onClick={()=> setIsOpen(false)}/>
        </$Icon>
        <$SidebarWrapper>
            <$SidebarMenu>
                <$SidebarLink to="about">
                    About
                </$SidebarLink>
                <$SidebarLink to="discover">
                    Discover
                </$SidebarLink>
                <$SidebarLink to="services">
                    Services
                </$SidebarLink>
                <$SidebarLink to="signup">
                    Sign Up
                </$SidebarLink>
            </$SidebarMenu>
            <$SidebarBtnWrapper>
                <$SidebarRoute to="/">
                    Sign In
                </$SidebarRoute>
            </$SidebarBtnWrapper>
        </$SidebarWrapper>
    </$SidebarContainer>
  )
}

export default Sidebar;
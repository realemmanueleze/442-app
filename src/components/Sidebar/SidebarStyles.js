import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';

export const $SidebarContainer = styled.aside`
  position: fixed;
  display: grid;
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: #0d0d0d;
  transition: 0.4s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  z-index: 999;
`;

export const $CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const $Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const $SidebarWrapper = styled.div`
  color: #fff;
`;

export const $SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  justify-items: center;

  @media (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const $SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-items: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #f5f5f5;
  cursor: pointer;

  &:hover {
    color: #4a919b;
    transition: 0.2s ease-in-out;
  }
`;

export const $SidebarBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const $SidebarRoute = styled(LinkRouter)`
  border-radius: 50px;
  background: #4a919b;
  white-space: nowrap;
  padding: 16px 64px;
  color: #f5f5f5;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #f5f5f5;
    color: #4a919b;
  }
`;

import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const $Nav = styled.nav`
  background-color: #000;
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: auto;
  z-index: 10;

  @media (max-width: 960px) {
    transition: 0.8 all ease;
  }
`;

export const $NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const $NavLogo = styled(LinkRouter)`
  color: #fff;
  display: flex;
  justify-self: start;
  cursor: pointer;
  margin-left: 24px;
  font-size: 1.5rem;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;

export const $MobileMenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;
export const $NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const $NavItem = styled.li`
  height: 80px;
`;

export const $NAvLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const $NavBtn = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  };
`;
export const $NavBtnLink = styled(LinkRouter)`
    border-radius: 50px;
    background-color: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;

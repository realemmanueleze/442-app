import React from 'react';
import {
  $FooterContainer,
  $FooterWrappper,
  $FooterLinksContainer,
  $FooterLinksWrapper,
  $FooterLinksItems,
  $FooterLinkTitle,
  $FooterLink,
} from './FooterStyles';

function Footer() {
  return (
    <$FooterContainer>
      <$FooterWrappper>
        <$FooterLinksContainer>
          <$FooterLinksWrapper>
            <$FooterLinksItems>
              <$FooterLinkTitle>About us</$FooterLinkTitle>
              <$FooterLink to="/sigin">How it works</$FooterLink>
              <$FooterLink to="/sigin">Testimonials</$FooterLink>
              <$FooterLink to="/sigin">Careers</$FooterLink>
              <$FooterLink to="/sigin">Investors</$FooterLink>
              <$FooterLink to="/sigin">Terms of Service</$FooterLink>
            </$FooterLinksItems>
            <$FooterLinksItems>
              <$FooterLinkTitle>About us</$FooterLinkTitle>
              <$FooterLink to="/sigin">How it works</$FooterLink>
              <$FooterLink to="/sigin">Testimonials</$FooterLink>
              <$FooterLink to="/sigin">Careers</$FooterLink>
              <$FooterLink to="/sigin">Investors</$FooterLink>
              <$FooterLink to="/sigin">Terms of Service</$FooterLink>
            </$FooterLinksItems>
          </$FooterLinksWrapper>
          <$FooterLinksWrapper>
            <$FooterLinksItems>
              <$FooterLinkTitle>About us</$FooterLinkTitle>
              <$FooterLink to="/sigin">How it works</$FooterLink>
              <$FooterLink to="/sigin">Testimonials</$FooterLink>
              <$FooterLink to="/sigin">Careers</$FooterLink>
              <$FooterLink to="/sigin">Investors</$FooterLink>
              <$FooterLink to="/sigin">Terms of Service</$FooterLink>
            </$FooterLinksItems>
            <$FooterLinksItems>
              <$FooterLinkTitle>About us</$FooterLinkTitle>
              <$FooterLink to="/sigin">How it works</$FooterLink>
              <$FooterLink to="/sigin">Testimonials</$FooterLink>
              <$FooterLink to="/sigin">Careers</$FooterLink>
              <$FooterLink to="/sigin">Investors</$FooterLink>
              <$FooterLink to="/sigin">Terms of Service</$FooterLink>
            </$FooterLinksItems>
          </$FooterLinksWrapper>
        </$FooterLinksContainer>
      </$FooterWrappper>
    </$FooterContainer>
  );
}

export default Footer;

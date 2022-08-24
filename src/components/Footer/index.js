import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import {
  $FooterContainer,
  $FooterWrappper,
  $FooterLinksContainer,
  $FooterLinksWrapper,
  $FooterLinksItems,
  $FooterLinkTitle,
  $FooterLink,
  $SocialMedia,
  $SocialMediaWrapper,
  $WebsiteRights,
  $SocialIcons,
  $SocialLogo,
  $SocialIconLink,
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
              <$FooterLinkTitle>Contact Us</$FooterLinkTitle>
              <$FooterLink to="/sigin">Contact</$FooterLink>
              <$FooterLink to="/sigin">Support</$FooterLink>
              <$FooterLink to="/sigin">Destination</$FooterLink>
              <$FooterLink to="/sigin">Sponsorship</$FooterLink>
              <$FooterLink to="/sigin">Mentorship</$FooterLink>
            </$FooterLinksItems>
          </$FooterLinksWrapper>
          <$FooterLinksWrapper>
            <$FooterLinksItems>
              <$FooterLinkTitle>Videos</$FooterLinkTitle>
              <$FooterLink to="/sigin">Submit Videos</$FooterLink>
              <$FooterLink to="/sigin">Ambassadors</$FooterLink>
              <$FooterLink to="/sigin">Agency</$FooterLink>
              <$FooterLink to="/sigin">Influencer</$FooterLink>
              <$FooterLink to="/sigin">Ads</$FooterLink>
            </$FooterLinksItems>
            <$FooterLinksItems>
              <$FooterLinkTitle>Business Links</$FooterLinkTitle>
              <$FooterLink to="/sigin">Forbes</$FooterLink>
              <$FooterLink to="/sigin">CNN</$FooterLink>
              <$FooterLink to="/sigin">Bloomberg</$FooterLink>
              <$FooterLink to="/sigin">Fox</$FooterLink>
              <$FooterLink to="/sigin">Coin Desk</$FooterLink>
            </$FooterLinksItems>
          </$FooterLinksWrapper>
        </$FooterLinksContainer>
        <$SocialMedia>
          <$SocialMediaWrapper>
            <$SocialLogo to="/">442</$SocialLogo>
            <$WebsiteRights>
              442 &copy; {new Date().getFullYear()}
            </$WebsiteRights>
            <$SocialIcons>
              <$SocialIconLink href="/" target="-blank" aria-label="Facebook">
                <FaFacebook />
              </$SocialIconLink>
              <$SocialIconLink href="/" target="-blank" aria-label="Instagram">
                <FaInstagram />
              </$SocialIconLink>
              <$SocialIconLink href="/" target="-blank" aria-label="Twitter">
                <FaTwitter />
              </$SocialIconLink>
              <$SocialIconLink href="/" target="-blank" aria-label="Youtube">
                <FaYoutube />
              </$SocialIconLink>
            </$SocialIcons>
          </$SocialMediaWrapper>
        </$SocialMedia>
      </$FooterWrappper>
    </$FooterContainer>
  );
}

export default Footer;

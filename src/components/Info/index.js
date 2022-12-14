import React from 'react';
import PropTypes from 'prop-types';
import {
  $InfoContainer,
  $InfoWrapper,
  $InfoRow,
  $Column1,
  $Column2,
  $TextWrapper,
  $TopLine,
  $Heading,
  $Subtitle,
  $BtnWrapper,
  $ImgWrapper,
  $Img,
} from './InfoStyles';
import { $Button } from '../Button';

export function Info({
  lightBg,
  id,
  imgStart,
  topLine,
  headline,
  lightText,
  description,
  buttonLabel,
  img,
  alt,
}) {
  return (
    <$InfoContainer lightBg={lightBg} id={id}>
      <$InfoWrapper>
        <$InfoRow imgStart={imgStart}>
          <$Column1>
            <$TextWrapper>
              <$TopLine>{topLine}</$TopLine>
              <$Heading lightText={lightText}>{headline}</$Heading>
              <$Subtitle lightText={lightText}>{description}</$Subtitle>
              <$BtnWrapper>
                <$Button
                  to="home"
                  smooth
                  duration={500}
                  spy
                  offset={-80}
                  primary
                  light
                  exact
                >
                  {buttonLabel}
                </$Button>
              </$BtnWrapper>
            </$TextWrapper>
          </$Column1>

          <$Column2>
            <$ImgWrapper>
              <$Img src={img} alt={alt} />
            </$ImgWrapper>
          </$Column2>
        </$InfoRow>
      </$InfoWrapper>
    </$InfoContainer>
  );
}

Info.propTypes = {
  lightBg: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  imgStart: PropTypes.bool.isRequired,
  topLine: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  lightText: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Info;

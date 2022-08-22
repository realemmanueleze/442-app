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
import { infoData } from './Data';

function Info() {
  const infoDataEl = infoData.map((data) => {
    return <InfoElements key={data.id} {...data} />;
  });

  return infoDataEl;
}

export function InfoElements({
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
  darkText,
}) {
  return (
    <$InfoContainer lightBg={lightBg} id={id}>
      <$InfoWrapper>
        <$InfoRow imgStart={imgStart}>
          <$Column1>
            <$TextWrapper>
              <$TopLine>{topLine}</$TopLine>
              <$Heading lightText={lightText}>{headline}</$Heading>
              <$Subtitle darkText={darkText}>{description}</$Subtitle>
              <$BtnWrapper>
                <$Button
                  to="home"
                  smooth
                  duration={500}
                  spy
                  offset={-80}
                  primary
                  dark
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

InfoElements.propTypes = {
  // data: PropTypes.object.isRequired,
  lightBg: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  imgStart: PropTypes.bool.isRequired,
  topLine: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  lightText: PropTypes.bool.isRequired,
  darkText: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Info;

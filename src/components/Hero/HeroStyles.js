import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const $HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 3;
  }
`;

export const $HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
`;
export const $VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  z-index: 2;
`;

export const $HeroH1 = styled.h1`
  position: relative;
  color: white;
  font-size: 48px;
  text-align: center;
  z-index: 5;

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

export const $HeroP = styled.p`
  position: relative;
  font-size: 24px;
  color: #fff;
  text-align: center;
  max-width: 600px;
  z-index: 5;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
export const $BtnWrapper = styled.div`
  position: relative;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;
`;

export const $ArrowFoward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const $ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

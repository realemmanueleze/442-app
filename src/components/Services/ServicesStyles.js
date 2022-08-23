import styled from 'styled-components';

export const $ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media (max-width: 768px) {
    height: 1100px;
  }
  @media (max-width: 480px) {
    height: 1300px;
  }
`;

export const $SectionTitle = styled.h2``;

export const $ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  text-align: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const $ServiceCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const $Icon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const $Heading = styled.h3`
  font-size: 1.5rem;
  color: #f5f5f5;
  margin-bottom: 34px;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const $SubHeading = styled.h4`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const $Body = styled.p`
  font-size: 1rem;
  text-align: center;
`;

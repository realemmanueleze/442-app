import React from 'react';
import {
  $ServicesContainer,
  $SectionTitle,
  $ServicesWrapper,
  $ServiceCard,
  $Icon,
  $Heading,
  $SubHeading,
  $Body,
} from './ServicesStyles';
import { ServicesData } from './Data';

function ServiceCards() {
  const services = ServicesData.map((service) => {
    const { id, icon, alt, heading, subheading, body } = service;
    return (
      <$ServiceCard key={id}>
        <$Icon src={icon} alt={alt} />
        <$Heading>{heading}</$Heading>
        <$SubHeading>{subheading}</$SubHeading>
        <$Body>{body}</$Body>
      </$ServiceCard>
    );
  });
  return services;
}

function Services() {
  return (
    <$ServicesContainer>
      <$SectionTitle>Our Services</$SectionTitle>
      <$ServicesWrapper>
        <ServiceCards />
      </$ServicesWrapper>
    </$ServicesContainer>
  );
}

export default Services;

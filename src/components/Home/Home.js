import React from 'react';
import { Section } from '../Section/Section';
import { Container } from './style';

export const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="/images/model-s.jpg"
        leftBtn="Customer Order"
        rightBtn="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="/images/model-3.jpg"
        leftBtn="Customer Order"
        rightBtn="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="/images/model-x.jpg"
        leftBtn="Customer Order"
        rightBtn="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="/images/model-y.jpg"
        leftBtn="Customer Order"
        rightBtn="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Penel in America"
        description="Money back guarantee"
        backgroundImg="/images/solar-panel.jpg"
        leftBtn="Order now"
        rightBtn="Learn more"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roofs Costs Less Then a New Roofs"
        backgroundImg="/images/solar-roof.jpg"
        leftBtn="Order now"
        rightBtn="Learn more"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="/images/accessories.jpg"
        leftBtn="Shop now"
      />
    </Container>
  );
};

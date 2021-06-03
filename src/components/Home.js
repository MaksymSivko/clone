import React from 'react';
import styled from 'styled-components/macro';
import { Section } from './Section';

const Container = styled.div`
  height: 100vh;
`;

export const Home = () => {
  return (
    <Container>
      <Section>Home</Section>
    </Container>
  );
};

import React from 'react';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import styled from 'styled-components/macro';

const AppContainer = styled.div``;

export const App = () => {
  return (
    <AppContainer>
      <Header />
      <Home />
    </AppContainer>
  );
};

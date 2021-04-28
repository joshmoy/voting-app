import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

import { Body } from './components/Body';
import { Header } from './components/Header';

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Body />
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
`;

import React from 'react';
import styled from 'styled-components';

import davido from '../assets/davido.jpeg';
import wizzy from '../assets/wizzy.jpeg';
import { Card } from './Card';

const Body = () => {
  return (
    <Container>
      <div className="question-box">
        <p>Who is your favorite artiste?</p>
      </div>
      <div className="poll-box">
        <Card name="Wizkid" image={wizzy} percentage="40" />
        <Card name="Davido" image={davido} percentage="60" />
      </div>
    </Container>
  );
};

export { Body };

const Container = styled.div`
  height: calc(100vh - 80px);
  background-color: #031827;
  padding-top: 10rem;
  .question-box {
    background-color: #0095eb;
    height: 60px;
    width: 800px;
    border-radius: 100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-weight: 300;
      color: #031827;
    }
  }
  .poll-box {
    display: flex;
    justify-content: space-between;
    width: 800px;
    margin: 5rem auto;
  }
`;

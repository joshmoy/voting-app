import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderDiv>
      <p className="logo">Poll-in</p>
      <CustomLink to="/login">Login</CustomLink>
    </HeaderDiv>
  );
};

export { Header };

const HeaderDiv = styled.div`
  background-color: #fff;
  height: 80px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    font-size: 1.8rem;
    font-weight: 700;
    color: #031827;
  }
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: #031827;
  font-weight: 400;
`;

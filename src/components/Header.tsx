import React from "react";
import styled from "styled-components";
import { Container } from "./shared/Container";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Container>
        <h1>Shops</h1>
      </Container>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

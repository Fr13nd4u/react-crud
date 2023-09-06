import React from "react";
import { Container } from "../components/shared/Container";
import ProductList from "../components/product/ProductList";
import ProductSearch from "../components/ProductSearch";

import styled from "styled-components";

const Main: React.FC = () => {
  return (
    <MainWrap>
      <Container>
        <ProductSearch />
        <ProductList />
      </Container>
    </MainWrap>
  );
};

const MainWrap = styled.main`
  padding: 100px 0;
`;

export default Main;

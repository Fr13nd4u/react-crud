/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";

import ProductItem from "./ProductItem";
import styled from "styled-components";
import { fetchProducts } from "../../redux/slices/products";
import ProductFilter from "./ProductFilter";

const ProductList: React.FC = () => {
  const { products, error, loading } = useSelector(
    (state: RootState) => state.products
  );
  const dispatch = useDispatch<AppDispatch>();

  React.useLayoutEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const [sortBy, setSortBy] = React.useState<string>("");
  const [filterBy, setFilterBy] = React.useState<string | null>(null);

  const handleSort = (columnName: string) => {
    setSortBy(columnName);
  };

  const handleFilter = (filterText: string | null) => {
    setFilterBy(filterText);
  };

  let filteredProducts = [...products];

  if (filterBy) {
    filteredProducts = products.filter((product: any) =>
      product.title.toLowerCase().includes(filterBy.toLowerCase())
    );
  }

  if (sortBy) {
    filteredProducts.sort((a: any, b: any) => b[sortBy] - a[sortBy]);
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ProductListWrap>
      <ProductFilter onFilter={handleFilter} />
      <Table>
        <thead>
          <tr>
            <th onClick={() => handleSort("id")}>Photo</th>
            <th onClick={() => handleSort("title")}>Title</th>
            <th onClick={() => handleSort("description")}>Description</th>
            <th onClick={() => handleSort("price")}>Price</th>
            <th onClick={() => handleSort("thumbnail")}>Thumbnail</th>
            <th onClick={() => handleSort("rating")}>Rating</th>
            <th onClick={() => handleSort("stock")}>Stock</th>
            <th onClick={() => handleSort("brand")}>Brand</th>
            <th onClick={() => handleSort("category")}>Category</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))}
        </tbody>
      </Table>
    </ProductListWrap>
  );
};

const ProductListWrap = styled.div`
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Table = styled.table`
  width: 100%;

  thead th {
    cursor: pointer;
    padding: 10px;
  }
`;
export default ProductList;

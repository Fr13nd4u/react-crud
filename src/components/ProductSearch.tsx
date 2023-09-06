import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { createProduct, searchProducts } from "../redux/slices/products";
import { AppDispatch } from "../redux/store";
import { Modal } from "./shared/Modal";
import ProductForm, { ProductFormValues } from "./product/ProductForm";

const ProductSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [modalActive, setModalActive] = React.useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = () => {
    dispatch(searchProducts(searchQuery));
  };

  const handleSubmit = (values: ProductFormValues) => {
    dispatch(createProduct(JSON.stringify(values)));

    setModalActive(false);
  };

  return (
    <SearchContainer>
      <input
        type="text"
        placeholder="Search by title or description..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={() => setModalActive(true)}>Add new</button>
      <Modal active={modalActive} setActive={setModalActive}>
        <ProductForm onSubmit={(values) => handleSubmit(values)} />
      </Modal>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0;
  justify-content: flex-end;
  gap: 10px;

  input {
    padding: 8px;
    background-color: #fff;
    min-width: 250px;
  }

  button {
    padding: 8px 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
};
`;
export default ProductSearch;

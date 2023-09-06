/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

import styled from "styled-components";
import { deleteProduct, updateProduct } from "../../redux/slices/products";
import { Modal } from "../shared/Modal";
import ProductForm, { ProductFormValues } from "./ProductForm";

interface ProductProp {
  product: any;
}

const ProductItem: React.FC<ProductProp> = ({ product }) => {
  const {
    id,
    thumbnail,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
  } = product;

  const [modalActive, setModalActive] = React.useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (values: any) => {
    dispatch(updateProduct({ id, values }));

    setModalActive(false);
  };

  const handleRemove = () => {
    dispatch(deleteProduct(id));
  };

  return (
    <ProductTableRow>
      <TableCell>
        {thumbnail && <ProductImage src={thumbnail} alt={title} />}
      </TableCell>
      <TableCell>{title || "-"}</TableCell>
      <TableCell>{description || "-"}</TableCell>
      <TableCell>${price || "-"}</TableCell>
      <TableCell>{discountPercentage || "-"}% off</TableCell>
      <TableCell>{rating || "-"}</TableCell>
      <TableCell>{stock || "-"}</TableCell>
      <TableCell>{brand || "-"}</TableCell>
      <TableCell>{category || "-"}</TableCell>
      <TableCell>
        <Button onClick={() => setModalActive(true)}>Update</Button>
        <ButtonRemove onClick={handleRemove}>Remove</ButtonRemove>
        <Modal active={modalActive} setActive={setModalActive}>
          <ProductForm
            onSubmit={(values) => handleSubmit(values)}
            initialValues={{ title, price, brand, rating }}
          />
        </Modal>
      </TableCell>
    </ProductTableRow>
  );
};

const ProductTableRow = styled.tr`
  border-bottom: 1px solid #ccc;
  background: #fff;
`;

const TableCell = styled.td`
  padding: 8px;
  max-width: 350px;
  min-width: 50px;
`;

const ProductImage = styled.img`
  width: 75px;
  height: auto;
  max-height: 50px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 6px 12px;
  cursor: pointer;
  margin-right: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

const ButtonRemove = styled(Button)`
  background-color: #dc3545;

  &:hover {
    background-color: #c82333;
  }
`;

export default ProductItem;

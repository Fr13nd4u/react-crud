import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  price: Yup.number()
    .positive("Price must be a positive number")
    .required("Price is required"),
  brand: Yup.string().required("Brand is required"),
  rating: Yup.number()
    .min(1, "Rating must be at least 1")
    .max(5, "Rating must be at most 5")
    .required("Rating is required"),
});

interface ProductFormProps {
  onSubmit: (values: ProductFormValues) => void;
  initialValues?: ProductFormValues;
}

export interface ProductFormValues {
  title: string;
  price: number;
  brand: string;
  rating: number;
}

const ProductForm: React.FC<ProductFormProps> = ({
  onSubmit,
  initialValues = {
    title: "",
    price: 0,
    brand: "",
    rating: 1,
  },
}) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
      formik.resetForm();
    },
  });

  return (
    <FormContainer>
      <h2>{initialValues.title ? "Edit Product" : "Add a New Product"}</h2>
      <form onSubmit={formik.handleSubmit}>
        <FormField>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title && (
            <ErrorMessage>{formik.errors.title}</ErrorMessage>
          )}
        </FormField>
        <FormField>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
          />
          {formik.touched.price && formik.errors.price && (
            <ErrorMessage>{formik.errors.price}</ErrorMessage>
          )}
        </FormField>
        <FormField>
          <label htmlFor="brand">Brand:</label>
          <input
            type="text"
            id="brand"
            name="brand"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.brand}
          />
          {formik.touched.brand && formik.errors.brand && (
            <ErrorMessage>{formik.errors.brand}</ErrorMessage>
          )}
        </FormField>
        <FormField>
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.rating}
          />
          {formik.touched.rating && formik.errors.rating && (
            <ErrorMessage>{formik.errors.rating}</ErrorMessage>
          )}
        </FormField>
        <SubmitButton type="submit">
          {initialValues.title ? "Save Changes" : "Add Product"}
        </SubmitButton>
      </form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  h2 {
    margin-bottom: 16px;
  }

  input {
    background: #ccc !important;
  }
`;

const FormField = styled.div`
  margin-bottom: 16px;

  label {
    display: block;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    padding: 8px;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default ProductForm;

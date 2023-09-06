import api from '../api';


const getAllProducts = () => {
  return api.get("/products?limit=25");
};

const getProductById = (id: string) => {
  return api.get(`/products/${id}`);
};

const createProduct = (data: unknown) => {
  return api.post("/products/add", data);
};

const updateProduct = ({id, data}: {id: string, data: unknown}) => {
  return api.put(`/products/${id}`, data);
};

const deleteProduct = (id: string) => {
  return api.delete(`/products/${id}`);
};

const searchProduct = (search: string) => {
  return api.get(`/products/search?q=${search}`);

}

const ProductService = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProduct
};

export default ProductService;
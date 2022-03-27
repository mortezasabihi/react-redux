import api from "../../config";

export const getAllProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};

export const getProductById = async (id: number) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const getAllCategories = async () => {
  const response = await api.get("/products/categories");
  return response.data;
};

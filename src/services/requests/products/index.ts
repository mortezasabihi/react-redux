import { Product, Products, Categories } from "@/types/products";
import api from "../../config";

/**
 *  Get all products
 * @async
 * @returns {Promise<Products>}
 */
export const getAllProducts = async (): Promise<Products> => {
  const response = await api.get<Products>("/products");
  return response.data;
};

/**
 * Get product by id
 * @param id
 * @async
 * @returns {Promise<Product>}
 */
export const getProductById = async (id: number): Promise<Product> => {
  const response = await api.get<Product>(`/products/${id}`);
  return response.data;
};

/**
 * Get all categories
 * @async
 * @returns {Promise<Categories>}
 */
export const getAllCategories = async (): Promise<Categories> => {
  const response = await api.get<Categories>("/products/categories");
  return response.data;
};

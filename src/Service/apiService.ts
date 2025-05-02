import { Product } from "../Type/Producst";

const API_BASE_URL = 'https://fakestoreapi.com';

export const getItems = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    return json as Product[];
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};
import { useEffect, useState } from "react";
import { getItems } from "../../Service/apiService";
import { Product } from "../../Type/Producst";
  
interface UseHomeControllerResult {
    products: Product[];
}

const useHomeController = (): UseHomeControllerResult => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const loadItems = async () => {
            try {
                const result = await getItems();
                setProducts(result);
            } catch (error) {
                console.log(error);
            }
        }
        loadItems();
    }, []);

    return {
        products,
    };
};

export default useHomeController;
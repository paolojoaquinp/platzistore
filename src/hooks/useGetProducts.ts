import { useEffect, useState } from "react";
import axios from "axios";

export interface Category {
  id: number;
  name: string;
  image: string;
}
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
}

const useGetProducts = (API: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async (): Promise<any> => {
      setLoading(true);
      try {
        const rta = await axios(API);
        setProducts(
          rta.data.filter((item: Product) => {
            return item.id < 200;
          })
        );
        /*             setProducts(rta.data); */
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  }, [API]);

  return { products, loading, error };
};

export default useGetProducts;

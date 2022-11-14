import React from "react";
import ProductItem from "../components/ProductItem";
import styles from "@styles/ProductList.module.scss";
import useGetProducts from "../hooks/useGetProducts";

const API = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
  const { products } = useGetProducts(API);

  return (
    <section className={styles["main-container"]}>
      <div className={styles.ProductList}>
        {products.map((el) => {
          return <ProductItem key={el.id} product={el} />;
        })}
      </div>
    </section>
  );
};

export default ProductList;

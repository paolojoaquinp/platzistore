import React, { useContext } from "react";
import styles from "@styles/components/ProductItem.module.scss";
import { Product } from "../hooks/useGetProducts";
import iconCart from "@icons/bt_add_to_cart.svg";
import AppContext from "../context/AppContext";
import Image from "next/image";
export interface IProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: IProductItemProps) => {
  const { addToCart } = useContext(AppContext) as any;

  const img: string = product.images[0];
  const handleClick = (item: Product) => {
    addToCart(item);
  };
  return (
    <div className={styles.ProductItem}>
      <Image src={img} width={240} height={240} alt={product.title} />
      <div className={styles["product-info"]}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product) as any}>
          <Image width={50} height={50} src={iconCart} alt="Icono carrito" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;

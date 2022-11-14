import React, { useContext } from "react";
import AppContext from "@context/AppContext";
import { Product } from "@hooks/useGetProducts";
/* import '../styles/components/OrderItem.scss'; */
import styles from "@styles/components/OrderItem.module.scss";
import Image from "next/image";
import iconClose from "@icons/icon_close.png";

interface IProps {
  product: Product;
}

const OrderItem = ({ product }: IProps) => {
  const { removeFromCart } = useContext(AppContext) as any;
  const handleRemove = (product: Product) => {
    removeFromCart(product);
  };
  const img = product.images || [""];
  return (
    <div className={styles.OrderItem}>
      <figure>
        <Image width={200} height={200} src={img[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <Image
        src={iconClose}
        alt="close"
        onClick={() => handleRemove(product) as any}
      />
    </div>
  );
};

export default OrderItem;

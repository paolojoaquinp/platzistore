import React, { useContext } from "react";
import Link from "next/link";
import OrderItem from "../components/OrderItem";
import AppContext from "../context/AppContext";
import { Product } from "../hooks/useGetProducts";
/* import '../styles/MyOrder.scss'; */
import styles from "@styles/MyOrder.module.scss";
import arrowIcon from "@icons/flechita.svg";
import Image from "next/image";
const MyOrder = () => {
  const { state } = useContext(AppContext) as any;

  const sumTotal = () => {
    const reducer = (accumulator: any, currentValue: Product) =>
      accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className={styles.MyOrder}>
      <div className="title-container">
        <Image width={10} height={10} src={arrowIcon} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map((item: Product) => (
          <OrderItem key={`orderItem-${item.id}`} product={item} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <Link className="primary-button" href="/checkout">
          Checkout
        </Link>
      </div>
    </aside>
  );
};

export default MyOrder;

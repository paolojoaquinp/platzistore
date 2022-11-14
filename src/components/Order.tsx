import React from "react";
import "../styles/components/Order.scss";
import Image from "next/image";

const Order = () => {
  return (
    <div className="Order">
      <p>
        <span>03.25.21</span>
        <span>6 articles</span>
      </p>
      <p>$560.00</p>
      <Image width={40} height={40} src="./icons/flechita.svg" alt="arrow" />
    </div>
  );
};

export default Order;

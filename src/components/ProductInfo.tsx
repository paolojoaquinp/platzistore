import React from "react";
import "../styles/components/ProductInfo.tsx";
import Image from "next/image";
const ProductInfo = () => {
  return (
    <div className="ProductInfo">
      <p>$35,00</p>
      <p>Bike</p>
      <p>
        With its practical position, this bike also fulfills a decorative
        function, add your hall or workspace.
      </p>
      <button className="primary-button add-to-cart-button">
        <Image
          width={40}
          height={40}
          src="./icons/bt_add_to_cart.svg"
          alt="add to cart"
        />
        Add to cart
      </button>
    </div>
  );
};

export default ProductInfo;

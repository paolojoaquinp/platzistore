import React, { useState, useContext } from "react";
import Image from "next/image";
import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import shoppingCart from "@icons/icon_shopping_cart.svg";
import Menu from "@components/Menu";
import MyOrder from "@containers/MyOrder";
import Link from "next/link";
import AppContext from "../context/AppContext";
/* import '@styles/Header.scss'; */
import styles from "@styles/Header.module.scss";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext) as any;

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <nav className={styles.Nav}>
      <Image src={menu} alt="menu" className={styles.menu} />
      <div className={styles["navbar-left"]}>
        <Link href="/">
          <Image src={logo} alt="logo" className={styles["nav-logo"]} />
        </Link>
        <ul>
          <li>
            <Link href="/">All</Link>
          </li>
          <li>
            <Link href="/">Clothes</Link>
          </li>
          <li>
            <Link href="/">Electronics</Link>
          </li>
          <li>
            <Link href="/">Furnitures</Link>
          </li>
          <li>
            <Link href="/">Toys</Link>
          </li>
          <li>
            <Link href="/">Others</Link>
          </li>
        </ul>
      </div>
      <div className={styles["navbar-right"]}>
        <ul>
          {/* para varias clases NEXT.JS SASS: className={`${styles["more-clickable-area"]} ${styles["navbar-email"]} ${styles.pointer}`} */}
          <li className={styles["navbar-email"]} role="button" onClick={handleToggle}>
            platzi@example.com
          </li>
          <li
            className={styles["navbar-shopping-cart"]}
            onClick={() => setToggleOrders(!toggleOrders) as any}
            role="button" 
          >
            <Image src={shoppingCart} alt="shopping cart" />
            {state?.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;

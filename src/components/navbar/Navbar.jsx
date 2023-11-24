import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navigationBar}>
      <h1 className={styles.header}>Voucher - Minimal coupon</h1>

      <div className={styles.rightNav}>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search..."/>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-search"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
        </div>

        {/* SELECT BOX */}
        <select name="select" id="">
          <option value="Account">Account</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;

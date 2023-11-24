import React from "react";
import styles from "./Footer.module.css"


const Footer = () => {
  return (
    <div className={styles.footerCase}>
     
        
        <button className={styles.backBtn}> <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-arrow-narrow-left"
          width="24"
          height="24"
          color= "var(--main-color)"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l14 0" />
          <path d="M5 12l4 4" />
          <path d="M5 12l4 -4" />
        </svg>Back</button>
      


      <button className={styles.confirmBtn}>Confirm</button>
    </div>
  );
};

export default Footer;

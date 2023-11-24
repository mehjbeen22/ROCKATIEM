import React from "react";
import styles from "./Vouchers.module.css";

import { cardData } from "./data/data";

const Vouchers = () => {
  const asideContent = [
    "All sizes",
    "Facebook",
    "Google display netwrok",
    "Linkedin",
    "Others",
  ];

  return (
    <div className={styles.container}>
      <aside className={styles.leftCase}>
        {asideContent.map((items, index) => (
          <p className={styles.asideCaseItmes} key={index}>
            {items}
          </p>
        ))}
      </aside>

      {/* RIGHT CONTAINER */}
      <div className={styles.rightCase}>
        <form action="" className={styles.CheckBox}>
          <input type="checkbox" />
          <label htmlFor="choose">Choose sizes from All Category</label>
        </form>

        <div className={styles.cardCase}>
          {cardData.map((value, index) => {
            return (
              <div className={styles.OuterBox} key={index}>
                <div className={styles.middleBox}>
                  <div className={styles.shapes}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-checkbox"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 11l3 3l8 -8" />
                      <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
                    </svg>
                    <div style={{ height: "10rem" }}></div>
                  </div>
                </div>
                <p className={styles.title}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-photo"
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
                    <path d="M15 8h.01" />
                    <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />
                    <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
                    <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />
                  </svg>
                  {value.title}
                </p>
                <p className={styles.title}>
                  {value.dimension.width} X {value.dimension.height}{" "}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Vouchers;

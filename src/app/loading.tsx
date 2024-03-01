"use client";

import { ColorRing } from "react-loader-spinner";
import styles from "./loading.module.css";

export default function Loading(): JSX.Element {
  return (
    <main className={`${styles.container} page`}>
      <h2>Ładowanie strony...</h2>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#008001", "#ff5050", "#008001", "#ff5050", "#008001"]}
      />
    </main>
  );
};
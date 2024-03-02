import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Program",
};

export default function Program(): JSX.Element {
  return (
    <main className={`${styles.container} page`}>
      <h1>Program</h1>
      <p>Program zostanie opublikowany niebawem.</p>
    </main>
  );
};
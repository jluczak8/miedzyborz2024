import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Program",
};

export default function Program(): JSX.Element {
  return (
    <main className={`${styles.container} page`}>
      <h1>Program</h1>
      <p>Program jest składany w jeden spójny dokument. Kiedy tylko będzie gotowy umieścimy go tutaj.</p>
    </main>
  );
};
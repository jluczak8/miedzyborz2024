import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Kandydaci",
};

export default function Candidates(): JSX.Element {
  return (
    <main className={`${styles.container} page`}>
      <h1>Kandydaci</h1>
      <p>Pełna lista kandydatów zostanie opublikowana niebawem.</p>
    </main>
  );
};
import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound(): JSX.Element {
  return (
    <main className={`${styles.container} page`}>
      <h1>Błąd 404</h1>
      <h4>Szukana strona nie istnieje lub została usunięta.</h4>
      <ol>
        <li>Sprawdź czy wpisałeś poprawny adres strony;</li>
        <li>Skorzystaj z menu nawigacyjnego, aby dotrzeć do szukanej strony;</li>
        <li>Lub skorzystaj z przycisku poniżej aby wrócić na stronę główną.</li>
      </ol>
      <Link href="/">Powrót do strony głównej</Link>
    </main>
  );
};
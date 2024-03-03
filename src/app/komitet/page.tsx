import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Komitet",
};

export default function Committee(): JSX.Element {
  return (
    <main className={`${styles.container} page`}>
      <section className={styles.intro}>
        <div className={styles.box}>
          <h1>Wybory samorządowe 2024</h1>
          <h2>KOMITET WYBORCZY WYBORCÓW MIĘDZYBÓRZ 2024</h2>
          <p>wystawiający kandydatów do Rady Miejskiej oraz kandydata na Burmistrza Miasta i Gminy Międzybórz (kod teryt. 021405)</p>
        </div>
      </section>
      <section className={styles.info}>
        <div className={styles.decision}>
          <h4>Informacja:</h4>
          <p>Dnia 31 stycznia 2024 Komisarz Wyborczy we Wrocławiu II przyjął zawiadomienie o utworzeniu komitetu wyborczego o nazwie KOMITET WYBORCZY WYBORCÓW MIĘDZYBÓRZ 2024 w celu zgłaszania kandydatów na radnych w wyborach organów jednostek samorządu terytorialnego zarządzonych na dzień 7 kwietnia 2024.</p>
          <p>Postanowienie Komisarza Wyborczego w sprawie przyjęcia zawiadomienia o utworzeniu komitetu wyborczego wyborców:</p>
          <a href="/postanowienie.pdf" target="_blank">ZOBACZ POSTANOWIENIE</a>
        </div>
        <hr />
        <div className={styles.details}>
          <h4>Dane komitetu wyborczego:</h4>
          <p><span>Nazwa komitetu wyborczego: </span><strong>KOMITET WYBORCZY WYBORCÓW MIĘDZYBÓRZ 2024</strong></p>
          <p><span>Skrót nazwy komitetu wyborczego: </span><strong>KWW MIĘDZYBÓRZ 2024</strong></p>
          <p><span>Siedziba komitetu wyborczego: </span><strong>ul. Kolejowa 47, 56-513 Międzybórz</strong></p>
          <p><span>Pełnomocnik wyborczy komitetu wyborczego: </span><strong>Jakub Łuczak</strong></p>
          <p><span>NIP: </span><strong>9112051119</strong></p>
          <p><span>REGON: </span><strong>527660010</strong></p>
          <p><span>Rejestr kredytów: </span><strong><a href="/rejestrkredytow.pdf" target="_blank">LINK</a></strong></p>
          <p><span>Rejestr wpłat: </span><strong><a href="/rejestrwplat.pdf" target="_blank">LINK</a></strong></p>
        </div>
      </section>
    </main>
  );
};
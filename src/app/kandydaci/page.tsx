import { Metadata } from "next";
import Image from "next/image";
import mayorImage from "@/assets/images/kornelpacholak.png";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Kandydaci",
};

export default function Candidates(): JSX.Element {
  return (
    <main className={`${styles.container} page`}>
      <section className={styles.mayor}>
        <div className={styles.mayorContainer}>
          <div className={styles.mayorInfo}>
            <h1>Kandydat na Burmistrza <span className={styles.name}>Miasta i Gminy </span> <span className={styles.lastname}>Międzybórz</span></h1>
            <h2>Kornel Mateusz PACHOLAK</h2>
          </div>
          <div className={styles.mayorImage}>
            <Image
              src={mayorImage}
              alt="Kandydat na Burmistrza - Kornel Pacholak"
              quality={95}
              priority={true}
            />
          </div>
        </div>
      </section>
      <section className={styles.councillors}>
        <div className={styles.divider}>
          <div className={styles.dividerGreen} />
          <div className={styles.dividerRed} />
        </div>
        <div className={styles.box}>
          <h2>Kandydaci do Rady Miejskiej</h2>
          <ul>
            <li>Okręg nr. 1 - Nikodem RUBELEK</li>
            <li>Okręg nr. 2 - Hubert Jakub WAJNERT</li>
            <li>Okręg nr. 3 - Bartosz SMOLIS</li>
            <li>Okręg nr. 4 - Edyta Barbara PACHOLAK</li>
            <li>Okręg nr. 5 - Karolina ZIELONKA</li>
            <li>Okręg nr. 6 - Dominik RZĄDKOWSKI</li>
            <li>Okręg nr. 7 - Grzegorz CHRZUŚCIEL</li>
            <li>Okręg nr. 9 - Denis Dominik KIECKA</li>
            <li>Okręg nr. 10 - Łukasz Czesław KOWALCZYK</li>
            <li>Okręg nr. 12 - Barbara Maria KUBIAK</li>
            <li>Okręg nr. 13 - Agata KAMZOL</li>
          </ul>
        </div>
      </section>
    </main>
  );
};
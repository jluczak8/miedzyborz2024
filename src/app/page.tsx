import Link from "next/link";
import Image from "next/image";
import facebookIcon from "@/assets/icons/facebook.svg";
import programImage from "@/assets/images/program.jpg";
import candidatesImage from "@/assets/images/candidates.jpg";
import committeeImage from "@/assets/images/committee.jpg";
import event1Image from "@/assets/images/event1.jpg";
import event2Image from "@/assets/images/event2.jpg";
import event3Image from "@/assets/images/event3.jpg";
import event4Image from "@/assets/images/event4.jpg";
import styles from "./page.module.css";

export default function Home(): JSX.Element {
  return (
    <main className={`${styles.container} page`}>
      <section className={styles.welcome}>
        <div className={styles.tiles}>
          <div className={styles.tile}>
            <div className={styles.tileText}>
              <h3>Program</h3>
              <p>Poznaj nasze pomysły na funkcjonowanie nowoczesnej gminy.</p>
              <hr />
              <Link href="/program">
                Sprawdź nasz program
              </Link>
            </div>
            <div className={styles.tileImage}>
              <Image
                src={programImage}
                alt="Program wyborczy."
                priority={true}
              />
            </div>
          </div>
          <div className={styles.tile}>
            <div className={styles.tileImage}>
              <Image
                src={candidatesImage}
                alt="Nasi kandydaci."
                priority={true}
              />
            </div>
            <div className={styles.tileText}>
              <h3>Kandydaci</h3>
              <p>Zapoznaj się z ludźmi startującymi w wyborach z naszego ramienia.</p>
              <hr />
              <Link href="/kandydaci">
                Poznaj naszych kandydatów
              </Link>
            </div>
          </div>
          <div className={styles.tile}>
            <div className={styles.tileText}>
              <h3>Komitet</h3>
              <p>Zdobądź informacje o naszym komitecie wyborczym.</p>
              <hr />
              <Link href="/komitet">
                Zobacz informacje o komitecie
              </Link>
            </div>
            <div className={styles.tileImage}>
              <Image
                src={committeeImage}
                alt="Informacje o komitecie."
                priority={true}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.news}>
        <div className={styles.info}>
          <div className={styles.infoText}>
            <h2>Aktualności</h2>
            <p>Śledź aktualne wydarzenia oraz poczynania komitetu na naszych social mediach:</p>
          </div>
          <a
            href="https://www.facebook.com/profile.php?id=61553674289158"
            target="_blank"
          >
            <Image
              src={facebookIcon}
              alt="Facebook"
              width={50}
              height={50}
            />
          </a>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <Image
              src={event1Image}
              alt="1"
            />
          </div>
          <div className={styles.card}>
            <Image
              src={event2Image}
              alt="2"
            />
          </div>
          <div className={styles.card}>
            <Image
              src={event3Image}
              alt="3"
            />
          </div>
          <div className={styles.card}>
            <Image
              src={event4Image}
              alt="4"
            />
          </div>
        </div>
      </section>
      <section className={styles.register}>
        <div className={styles.content}>
          <div>
            <h3>Rejestr wpłat</h3>
            <a href="/rejestrwplat.pdf" target="_blank">Sprawdź</a>
          </div>
          <div>
            <h3>Rejestr kredytów</h3>
            <a href="/rejestrkredytow.pdf" target="_blank">Sprawdź</a>
          </div>
        </div>
      </section>
      <section className={styles.contact}>
        <div className={styles.box}>
          <p>Masz do nas jakieś pytanie?</p>
          <p>Przychodzą Ci do głowy pomysły na naszą gminę?</p>
          <p>Chciał(a)byś nas wspomóc w kampanii?</p>
          <Link href="/kontakt">
            Skontaktuj się z nami
          </Link>
          <p>już teraz!</p>
        </div>
      </section>
    </main>
  );
};
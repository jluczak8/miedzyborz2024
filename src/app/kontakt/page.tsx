import { Metadata } from "next";
import Image from "next/image";
import locationIcon from "@/assets/icons/location.svg";
import phoneIcon from "@/assets/icons/phone.svg";
import envelopeIcon from "@/assets/icons/envelope.svg";
import ContactForm from "@/ui/kontakt/contact-form";
import styles from "./page.module.css";


export const metadata: Metadata = {
  title: "Kontakt",
};

export default function Contact(): JSX.Element {
  return (
    <main className={`${styles.container} page`}>
      <div className={styles.box}>
      <section className={styles.details}>
        <h4>Informacje kontaktowe KWW MIĘDZYBÓRZ 2024</h4>
        <div className={styles.detailsPart}>
          <div className={styles.icon}>
            <Image
              src={locationIcon}
              alt="Adres siedziby komitetu:"
              width={20}
              height={20}
            />
          </div>
          <div className={styles.content}>
            <span>ul. Kolejowa 47</span>
            <br />
            <span>56-513 Międzybórz</span>
          </div>
        </div>
        <div className={styles.detailsPart}>
          <div className={styles.icon}>
            <Image
              src={phoneIcon}
              alt="Numer telefonu:"
              width={20}
              height={20}
            />
          </div>
          <div className={styles.content}>
            <span>538 411 041</span>
          </div>
        </div>
        <div className={styles.detailsPart}>
          <div className={styles.icon}>
            <Image
              src={envelopeIcon}
              alt="Adres email:"
              width={20}
              height={20}
            />
          </div>
          <div className={styles.content}>
            <a href="mailto:miedzyborz2024@gmail.com">
              <span>miedzyborz2024@gmail.com</span>
            </a>
          </div>
        </div>
      </section>
      <hr />
      <section className={styles.form}>
        <h4>Formularz kontaktowy</h4>
        <ContactForm />
      </section>
      </div>
    </main>
  );
};
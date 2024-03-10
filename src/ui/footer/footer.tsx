import Image from "next/image";
import facebookIcon from "@/assets/icons/facebook.svg";
import styles from "./footer.module.css";

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.container}>
      <div className={styles.info}>
        <p>
          © KWW MIĘDZYBÓRZ 2024 | Strona wykonana przez: <a href="https://github.com/jluczak8" target="_blank">Jakub Łuczak</a>
        </p>
      </div>
      <div className={styles.socials}>
        <a
          href="https://www.facebook.com/profile.php?id=61553674289158"
          target="_blank"
        >
          <Image
            src={facebookIcon}
            alt="Facebook"
            width={40}
            height={40}
            priority={true}
          />
        </a>
      </div>
    </footer>
  );
};
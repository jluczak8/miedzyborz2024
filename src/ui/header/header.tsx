import Link from "next/link";
import Image from "next/image";
import logoImage from "@/assets/images/logo.png";
import Navbar from "../navbar/navbar";
import styles from "./header.module.css";

export default function Header(): JSX.Element {
  return (
    <header className={styles.container}>
      <div>
        <Link href="/">
          <Image
            src={logoImage}
            alt="Międzybórz 2024"
            quality={95}
            priority={true}
          />
        </Link>
      </div>
      <div className={styles.menu}>
        <Navbar />
      </div>
    </header>
  );
};
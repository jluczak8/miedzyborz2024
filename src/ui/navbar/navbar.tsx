"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar(): JSX.Element {
  const [buttonClass, setButtonClass] = useState<string>(
    `${styles.bar} ${styles.closed}`
  );
  const [menuClass, setMenuClass] = useState<string>(`${styles.menu} ${styles.hidden}`);
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);

  const updateMenu = (): void => {
    if (!isMenuClicked) {
      setButtonClass(`${styles.bar} ${styles.open}`);
      setMenuClass(`${styles.menu} ${styles.visible}`);
      document.body.classList.add("no-scroll");
    } else {
      setButtonClass(`${styles.bar} ${styles.close}`);
      setMenuClass(`${styles.menu} ${styles.hidden}`);
      document.body.classList.remove("no-scroll");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return(
    <nav className={styles.container}>
      <div className={styles.button} onClick={updateMenu}>
        <div className={buttonClass}></div>
        <div className={buttonClass}></div>
        <div className={buttonClass}></div>
      </div>
      <div className={menuClass}>
        <ul className={styles.list}>
          <li>
            <Link href="/" onClick={updateMenu}>
              Strona główna
            </Link>
          </li>
          <li>
            <Link href="/program" onClick={updateMenu}>
              Program
            </Link>
          </li>
          <li>
            <Link href="/kandydaci" onClick={updateMenu}>
              Nasi kandydaci
            </Link>
          </li>
          <li>
            <Link href="/komitet" onClick={updateMenu}>
              Komitet wyborczy
            </Link>
          </li>
          <li>
            <Link href="/kontakt" onClick={updateMenu}>
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
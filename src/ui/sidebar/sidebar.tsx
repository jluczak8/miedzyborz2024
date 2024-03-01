import Image from "next/image";
import facebookIcon from "@/assets/icons/facebook.svg";
import styles from "./sidebar.module.css";

export default function Sidebar(): JSX.Element {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
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
        </li>
      </ul>
    </div>
  );
};
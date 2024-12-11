import Image from "next/image";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <Image
        src={"/logo.png"}
        width={50}
        height={50}
        alt={"Arno Firdaus"}
        className={styles.image}
      />
    </nav>
  );
}

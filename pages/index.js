import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/about">
        <h1>Hello</h1>
      </Link>
      <Link href="/work">
        <h1>I am</h1>
      </Link>
      <Link href="/contact">
        <h1>Satyam</h1>
      </Link>
    </div>
  );
}

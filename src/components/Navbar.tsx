import Link from "next/link";
import styles from "@/styles/layout.module.css";
import React from "react";

export default function Navbar(): React.ReactElement {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          Movie Junction
        </Link>
        <div className={styles.navlinks}>
          <Link href="/" className={styles.navlink}>
            Home
          </Link>
          <Link href="/movies" className={styles.navlink}>
            Movies
          </Link>
          <Link href="/tv" className={styles.navlink}>
            TV Series
          </Link>
          <Link href="/actor" className={styles.navlink}>
            Actors
          </Link>
        </div>
      </div>
    </nav>
  );
}

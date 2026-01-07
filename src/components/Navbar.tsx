import Link from "next/link";
import styles from "@/styles/layout.module.css";
import React from "react";

export default function Navbar(): React.ReactElement {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          MovieJunction
        </Link>
        <div className={styles.navlinks}>
          <Link href="/" className={styles.navlink}>
            Home
          </Link>
          <Link href="/trending-movies" className={styles.navlink}>
            Trending Movies
          </Link>
          <Link href="/trending-tv" className={styles.navlink}>
            Trending TV
          </Link>
          <Link href="/actor" className={styles.navlink}>
            Actors
          </Link>
        </div>
      </div>
    </nav>
  );
}

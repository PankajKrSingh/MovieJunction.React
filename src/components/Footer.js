import styles from "@/styles/layout.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container + " " + styles.textCenter}>
        © 2026 MovieJunction — Built for demo. Inspired by public movie directories.
      </div>
    </footer>
  );
}

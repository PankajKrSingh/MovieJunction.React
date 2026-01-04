"use client";
import styles from "@/styles/layout.module.css";

export default function PopularActors() {
  const actors = [1, 2, 3, 4];

  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.h4}>Popular Actors</h2>
        <a className={styles.smallLink} href="/actor">See all</a>
      </div>

      <div className={styles.gridCols}>
        {actors.map((i) => (
          <div key={i} className={styles.card}>
            <img src={`/images/actor-${i}.svg`} alt={`Actor ${i}`} className={styles.cardImg} />
            <div className={styles.cardBody}>
              <h5 className={styles.cardTitle}>Actor Name</h5>
              <p className={styles.cardText}>Known for: Movie A, Movie B</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

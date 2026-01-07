import styles from "@/styles/layout.module.css";
import { getAll } from "@/lib/db";

export default async function TrendingTV() {
  const shows = await getAll("tv");
  return (
    <main className={styles.container}>
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.h4}>Trending TV</h2>
        </div>
        <div className={styles.gridCols}>
          {(shows || []).map((s: any) => (
            <div key={s.id} className={styles.card}>
              <img className={styles.cardImg} src={s.img || '/images/trend-1.svg'} alt={s.title} />
              <div className={styles.cardBody}>
                <h5 className={styles.cardTitle}>{s.title}</h5>
                <p className={styles.cardText}>{s.meta || 'Short tagline'}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

import styles from "@/styles/layout.module.css";

export default function TrendingMovies() {
  return (
    <main className={styles.container}>
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.h4}>Trending Movies</h2>
        </div>
        <div className={styles.gridCols}>
          {[1,2,3,4].map((i)=> (
            <div key={i} className={styles.card}>
              <img className={styles.cardImg} src={`/images/trend-${((i-1)%2)+1}.svg`} alt={`Trend ${i}`} />
              <div className={styles.cardBody}>
                <h5 className={styles.cardTitle}>Trending Movie {i}</h5>
                <p className={styles.cardText}>Short tagline</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

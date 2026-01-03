import styles from "@/styles/layout.module.css";
import FeaturedSlider from "@/components/FeaturedSlider";

export default function Home() {
  return (
    <main className={styles.container}>

      <header className={styles.hero}>
        <FeaturedSlider />
      </header>

      <div className={styles.container}>
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.h4}>Popular Actors</h2>
            <a className={styles.smallLink} href="/actor">See all</a>
          </div>

          <div className={styles.gridCols}>
            {[1, 2, 3, 4].map((i) => (
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

        <section id="trending" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.h4}>Trending This Week</h2>
            <div>
              <a className={styles.btnSmall} href="/trending-movies">Movies</a>
              <a className={styles.btnSmallSecondary} href="/trending-tv">TV Series</a>
            </div>
          </div>

          <div className={styles.gridCols}>
            {[1, 2].map((i) => (
              <div key={i} className={styles.card}>
                <img src={`/images/trend-${i}.svg`} alt={`Trend ${i}`} className={styles.cardImg} />
                <div className={styles.cardBody}>
                  <h5 className={styles.cardTitle}>Trending Movie {i}</h5>
                  <p className={styles.cardText}>Short tagline</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}

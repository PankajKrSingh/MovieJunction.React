import React, { useEffect, useState } from "react";
import styles from "@/styles/layout.module.css";

export default function TrendingThisWeek(): React.ReactElement {
  const [tab, setTab] = useState("movies");
  const [movies, setMovies] = useState<any[]>([]);
  const [tv, setTv] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/movies').then(r=>r.json()).then(d=>setMovies(d || [])).catch(()=>{});
    fetch('/api/tv').then(r=>r.json()).then(d=>setTv(d || [])).catch(()=>{});
  }, []);

  const trendingItems = tab === "movies" ? movies : tv;

  return (
    <section id="trending" className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.h4}>Trending This Week</h2>
        <div>
          <button
            type="button"
            className={styles.btnSmall}
            aria-pressed={tab === "movies"}
            onClick={() => setTab("movies")}
          >
            Movies
          </button>
          <button
            type="button"
            className={styles.btnSmallSecondary}
            aria-pressed={tab === "tv"}
            onClick={() => setTab("tv")}
          >
            TV Series
          </button>
        </div>
      </div>

      <div className={styles.gridCols}>
        {trendingItems.map((item) => (
          <div key={item.id} className={styles.card}>
            <img src={item.img || '/images/trend-1.svg'} alt={item.title} className={styles.cardImg} />
            <div className={styles.cardBody}>
              <h5 className={styles.cardTitle}>{item.title}</h5>
              <p className={styles.cardText}>{item.meta || 'Short tagline'}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

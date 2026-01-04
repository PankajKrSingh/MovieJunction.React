"use client";
import { useState } from "react";
import styles from "@/styles/layout.module.css";

export default function TrendingThisWeek() {
  const [tab, setTab] = useState("movies");

  const trendingMovies = [
    { id: 1, title: "Trending Movie 1", img: "/images/trend-1.svg" },
    { id: 2, title: "Trending Movie 2", img: "/images/trend-2.svg" },
  ];

  const trendingTv = [
    { id: 1, title: "Trending TV 1", img: "/images/trend-1.svg" },
    { id: 2, title: "Trending TV 2", img: "/images/trend-2.svg" },
  ];

  const trendingItems = tab === "movies" ? trendingMovies : trendingTv;

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
            <img src={item.img} alt={item.title} className={styles.cardImg} />
            <div className={styles.cardBody}>
              <h5 className={styles.cardTitle}>{item.title}</h5>
              <p className={styles.cardText}>Short tagline</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

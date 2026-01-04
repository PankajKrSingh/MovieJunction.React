"use client";
import styles from "@/styles/layout.module.css";
import FeaturedSlider from "@/components/FeaturedSlider";
import PopularActors from "@/components/PopularActors";
import TrendingThisWeek from "@/components/TrendingThisWeek";

export default function Home() {
  return (
    <main className={styles.container}>

      <header className={styles.hero}>
        <FeaturedSlider />
      </header>

      <div className={styles.container}>
        <PopularActors />
        <TrendingThisWeek />
      </div>
    </main>
  );
}

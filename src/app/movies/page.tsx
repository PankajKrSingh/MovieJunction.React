import styles from "@/styles/layout.module.css";
import { getAll } from "@/lib/db";
import Link from "next/link";

export default async function TrendingMovies() {
  const movies = await getAll("movies");
  return (
    <main className={styles.container}>
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.h4}>Trending Movies</h2>
        </div>
        <div className={styles.gridCols}>
          {(movies || []).map((m: any) => (
            <Link key={m.id} className={styles.card} href={`/movies/${m.id}`}>
              <img className={styles.cardImg} src={m.img || '/images/trend-1.svg'} alt={m.title} />
              <div className={styles.cardBody}>
                <h5 className={styles.cardTitle}>{m.title}</h5>
                <p className={styles.cardText}>{m.meta || 'Short tagline'}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

import styles from "@/styles/layout.module.css";

export default function MoviePage() {
  return (
    <main className={styles.container}>
      <section className={styles.section}>
        <div style={{display:'flex',gap:24,alignItems:'flex-start'}}>
          <img src="/images/movie-poster.svg" alt="Poster" style={{width:300,borderRadius:8}} />
          <div>
            <h1 style={{marginTop:0}}>Featured Movie Title</h1>
            <p className={styles.metaText}>Action • 2h 10m • 2025</p>
            <p style={{maxWidth:680}}>This is a longer synopsis for the movie page. It summarizes story, cast, director and critical notes. Replace with dynamic data as needed.</p>
            <div style={{marginTop:12}}>
              <a className={styles.btnPrimary} href="#">Watch Trailer</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

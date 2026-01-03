import styles from "@/styles/layout.module.css";

export default function ActorPage() {
  return (
    <main className={styles.container}>
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.h4}>Actors</h2>
        </div>

        <div className={styles.gridCols}>
          {[1,2,3,4,5,6].map((i)=> (
            <div key={i} className={styles.card}>
              <img className={styles.cardImg} src={`/images/actor-${i}.svg`} alt={`Actor ${i}`} />
              <div className={styles.cardBody}>
                <h5 className={styles.cardTitle}>Actor Name</h5>
                <p className={styles.cardText}>Known for: Movie A</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

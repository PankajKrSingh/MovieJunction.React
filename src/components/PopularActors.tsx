import React, { useEffect, useState } from "react";
import styles from "@/styles/layout.module.css";

export default function PopularActors(): React.ReactElement {
  const [actors, setActors] = useState<any[]>([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetch('/api/actors').then(r=>r.json()).then(d=>setActors(d || [])).catch(()=>{});
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.h4}>Popular Actors</h2>
        <a className={styles.smallLink} href="/actor">See more</a>
      </div>

      <div className={styles.gridCols}>
        {actors.map((a) => (
          <div key={a.id} className={styles.card}>
            <img src={a.img || '/images/actor-1.svg'} alt={a.name} className={styles.cardImg} />
            <div className={styles.cardBody}>
              <h5 className={styles.cardTitle}>{a.name}</h5>
              <p className={styles.cardText}>{a.knownFor ? `Known for: ${a.knownFor}` : ''}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

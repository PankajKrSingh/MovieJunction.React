"use client";
import { useState, useEffect } from "react";
import styles from "./featuredSlider.module.css";

const SLIDES = [
  {
    title: "Featured Movie One",
    img: "/images/featured-1.svg",
    rating: "8.4",
    meta: "Action • 2h 10m • 2025",
    desc: "An exciting action-packed thriller with stunning visuals."
  },
  {
    title: "Featured Movie Two",
    img: "/images/featured-2.svg",
    rating: "7.9",
    meta: "Drama • 1h 50m • 2024",
    desc: "A moving drama about family, choices and redemption."
  },
  {
    title: "Featured Movie Three",
    img: "/images/featured-3.svg",
    rating: "8.7",
    meta: "Sci-Fi • 2h 30m • 2025",
    desc: "A bold sci-fi adventure exploring unknown horizons."
  },
  {
    title: "Featured Movie Four",
    img: "/images/featured-4.svg",
    rating: "7.5",
    meta: "Comedy • 1h 40m • 2023",
    desc: "A witty, fast-paced comedy that keeps you laughing."
  },
  {
    title: "Featured Movie Five",
    img: "/images/featured-5.svg",
    rating: "8.1",
    meta: "Thriller • 2h 0m • 2024",
    desc: "A tense thriller with twists and strong performances."
  },
];

export default function FeaturedSlider({ interval = 4000 }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, interval);
    return () => clearInterval(id);
  }, [paused, interval]);

  function prev() {
    setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  }

  function next() {
    setIndex((i) => (i + 1) % SLIDES.length);
  }

  return (
    <div
      className={styles.slider}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={styles.track}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {SLIDES.map((s, i) => (
          <div className={styles.slide} key={i}>
            <img src={s.img} alt={s.title} className={styles.image} />
            <div className={styles.caption}>
              <h2 className={styles.title}>{s.title}</h2>
              <div className={styles.metaRow}>
                <span className={styles.rating}>{s.rating}</span>
                <small className={styles.metaText}>{s.meta}</small>
              </div>
              <p className={styles.desc}>{s.desc}</p>
              <div className={styles.ctas}>
                <a className={styles.btnPrimary} href="/movie">View Details</a>
                <a className={styles.btnOutline} href="#trending">Trending</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className={styles.prev} onClick={prev} aria-label="Previous slide">‹</button>
      <button className={styles.next} onClick={next} aria-label="Next slide">›</button>

      <div className={styles.dots}>
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === index ? styles.active : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

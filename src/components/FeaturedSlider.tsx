"use client";
import React, { useState, useEffect } from "react";
import styles from "./featuredSlider.module.css";

import type { Movie } from "@/types/models";
import Link from "next/link";

type Slide = Partial<Movie>;

export default function FeaturedSlider({ interval = 4000 }: { interval?: number }): React.ReactElement {
  const [index, setIndex] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);
  const [slides, setSlides] = useState<Slide[]>([]);

  useEffect(() => {
    let mounted = true;
    fetch("/api/featured")
      .then((r) => r.json())
      .then((data) => {
        if (mounted) setSlides(data || []);
      })
      .catch(() => { });
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % Math.max(1, slides.length));
    }, interval);
    return () => clearInterval(id);
  }, [paused, interval, slides.length]);

  function prev() {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }

  function next() {
    setIndex((i) => (i + 1) % slides.length);
  }

  return (
    <div
      className={styles.slider}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={styles.track} style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((s, i) => (
          <div className={styles.slide} key={(s.id as any) || i}>
            <img src={s.img} alt={s.title} className={styles.image} />
            <div className={styles.caption}>
              <h2 className={styles.title}>
                <Link href={`/movies/${s.id}`}>
                  {s.title}
                </Link>
              </h2>
              <div className={styles.metaRow}>
                <span className={styles.rating}>{s.rating}</span>
                <small className={styles.metaText}>{s.meta}</small>
              </div>
              <p className={styles.desc}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <button className={styles.prev} onClick={prev} aria-label="Previous slide">
        ‹
      </button>
      <button className={styles.next} onClick={next} aria-label="Next slide">
        ›
      </button>

      <div className={styles.dots}>
        {slides.map((_, i) => (
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

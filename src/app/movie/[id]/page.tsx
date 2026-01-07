"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/layout.module.css";
import { useParams } from "next/navigation";

export default function MoviePage(): React.ReactElement {
  const params = useParams();
  const id = params?.id as string | undefined;
  const [movie, setMovie] = useState<any | null>(null);
  const [reviews, setReviews] = useState<any[]>([]);
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState(8);
  const [comment, setComment] = useState('');
  
  useEffect(() => {
    let mounted = true;
    if (!id) return () => { mounted = false; };
    fetch(`/api/movies/${id}`).then(r=>r.json()).then(d=>{ if(mounted) setMovie(d); }).catch(()=>{});
    return ()=> mounted = false;
  }, [id]);

  useEffect(() => {
    if (!movie) return;
    fetch(`/api/reviews?itemType=movie&itemId=${movie.id}`).then(r=>r.json()).then(d=>setReviews(d || [])).catch(()=>{});
  }, [movie]);

  async function addReview(e: React.FormEvent) {
    e.preventDefault();
    if (!movie) return;
    const res = await fetch('/api/reviews', { method: 'POST', body: JSON.stringify({ itemType: 'movie', itemId: movie.id, author, rating, comment }), headers: { 'Content-Type': 'application/json' } });
    const json = await res.json();
    setReviews((s)=>[json, ...s]);
    setAuthor(''); setRating(8); setComment('');
  }

  return (
    <main className={styles.container}>
      <section className={styles.section}>
        {movie ? (
          <div style={{display:'flex',gap:24,alignItems:'flex-start'}}>
            <img src={movie.img || '/images/movie-poster.svg'} alt="Poster" style={{width:300,borderRadius:8}} />
            <div>
              <h1 style={{marginTop:0}}>{movie.title}</h1>
              <p className={styles.metaText}>{movie.meta}</p>
              <p style={{maxWidth:680}}>{movie.desc}</p>
              <div style={{marginTop:12}}>
                <a className={styles.btnPrimary} href="#">Watch Trailer</a>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading movie...</p>
        )}

        <div style={{marginTop:24}}>
          <h3>Reviews</h3>
          <form onSubmit={addReview} style={{display:'flex',flexDirection:'column',gap:8,maxWidth:600}}>
            <input placeholder="Your name" value={author} onChange={(e)=>setAuthor(e.target.value)} />
            <input type="number" min="1" max="10" value={rating} onChange={(e)=>setRating(Number(e.target.value))} />
            <textarea placeholder="Comment" value={comment} onChange={(e)=>setComment(e.target.value)} />
            <button className={styles.btnPrimary} type="submit">Add Review</button>
          </form>

          <div style={{marginTop:12}}>
            {reviews.map((r) => (
              <div key={r.id} style={{borderTop:'1px solid #eee',paddingTop:8}}>
                <strong>{r.author}</strong> — <small>{r.rating}/10</small>
                <p style={{margin:4}}>{r.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

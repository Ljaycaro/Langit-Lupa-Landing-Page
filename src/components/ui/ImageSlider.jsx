import { useState, useEffect, useRef } from 'react'
import styles from './ImageSlider.module.css'

export default function ImageSlider({ images }) {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)

  if (!images || images.length === 0) return null

  const goTo = (i) => setCurrent(i)
  const prev = () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1))

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((i) => (i === images.length - 1 ? 0 : i + 1))
    }, 4000)
    return () => clearInterval(timerRef.current)
  }, [images.length])

  const resetTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent((i) => (i === images.length - 1 ? 0 : i + 1))
    }, 4000)
  }

  return (
    <div className={styles.slider}>
      <div className={styles.viewport}>
        <img
          key={current}
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className={styles.slide}
        />
        {images.length > 1 && (
          <>
            <button
              type="button"
              className={`${styles.arrow} ${styles.arrowLeft}`}
              onClick={() => { prev(); resetTimer(); }}
              aria-label="Previous slide"
            >
              &#10094;
            </button>
            <button
              type="button"
              className={`${styles.arrow} ${styles.arrowRight}`}
              onClick={() => { next(); resetTimer(); }}
              aria-label="Next slide"
            >
              &#10095;
            </button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className={styles.thumbStrip}>
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              className={`${styles.thumb} ${i === current ? styles.thumbActive : ''}`}
              onClick={() => { goTo(i); resetTimer(); }}
            >
              <img src={img} alt={`Thumbnail ${i + 1}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

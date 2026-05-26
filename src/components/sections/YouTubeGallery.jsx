import styles from './YouTubeGallery.module.css'
import { youtubeVideos } from '../../data/youtubeVideos'

export default function YouTubeGallery() {
  return (
    <section id="videos" className={styles.gallery}>
      <div className="container">
        <h2 className={styles.heading}>Watch Our Videos</h2>
        <p className={styles.subheading}>Check out our latest content on YouTube</p>
        <div className="row g-4">
          {youtubeVideos.map((video) => (
            <div key={video.id} className="col-12 col-md-6 col-lg-4">
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <div className={styles.thumbnail}>
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    loading="lazy"
                  />
                  <span className={styles.playIcon}>&#9654;</span>
                </div>
                <div className={styles.info}>
                  <h3 className={styles.videoTitle}>{video.title}</h3>
                  <p className={styles.videoDesc}>{video.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { Button, ImageSlider } from '../ui'
import { ctaCards } from '../../data/ctaCards'
import wishlistBtn from '../../assets/ui/wishlist-button.png'
import third_person from '../../assets/ui/3rd_person.png'
import new_office from '../../assets/ui/new_office.png'
import office_wars from '../../assets/ui/office_wars.png'
import trailerThumb from '../../assets/Section-Images/trailer_thumbnail.png'
import trailerBtn from '../../assets/ui/trailer_button.png'
import presskitImg from '../../assets/ui/presskit.png'
// TODO: Replace with '../assets/ui/point_hand.png' once file is added
import pointHandImg from '../../assets/ui/point_hand.png'
import styles from './CallToAction.module.css'

const TRAILER_ID = '1cciedCL_zc'

export default function CallToAction() {
  const [trailerOpen, setTrailerOpen] = useState(false)

  return (
    <section id="cta" className={styles.cta}>
      <div className={styles.header}>
        <h4 className={styles.subheading}>Your childhood, just got promoted.</h4>
        <h1 className={styles.mainHeading}>The Office is the Battlefield Now.</h1>
        <a
          href="https://store.steampowered.com/app/3428410/Langit_Lupa_Office_Wars/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.wishlistLink}
        >
          <img src={wishlistBtn} alt="Wishlist on Steam" className={styles.wishlistBtn} />
        </a>
        <h4 className={styles.steamText}>on STEAM</h4>
      </div>
      <div className={styles.cardsRow}>
        {ctaCards.map((card) => (
          <div key={card.id} className={styles.card} style={{ ...card.offset, maxWidth: card.maxWidth }}>
            {card.type === 'slider' && (
              <>
                <ImageSlider images={card.images} />
                <p className={styles.description}>
                  Langit Lupa: Fast-paced multiplayer chase game set in an office environment, inspired by a classic Filipino childhood game, where you leap across desks and chairs to avoid the floor and outmaneuver your coworkers.
                </p>
                <div className={styles.featuresRow}>
                  <div className={styles.feature}>
                    <img src={third_person} alt="Point of View" className={styles.featureImg} />
                    <span className={styles.featureLabel}>Point of View</span>
                  </div>
                  <div className={styles.feature}>
                    <img src={new_office} alt="New_Office" className={styles.featureImg} />
                    <span className={styles.featureLabel}>Battlefield Map</span>
                  </div>
                  <div className={styles.feature}>
                    <img src={office_wars} alt="Office_Wars" className={styles.featureImg} />
                    <span className={styles.featureLabel}>Office Wars</span>
                  </div>
                </div>
                <div className={styles.trailerCard}>
                  {trailerOpen ? (
                    <iframe
                      className={styles.player}
                      src={`https://www.youtube.com/embed/${TRAILER_ID}?autoplay=1`}
                      title="Langit Lupa Trailer"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <button type="button" className={styles.trailerLink} onClick={() => setTrailerOpen(true)}>
                        <img src={trailerThumb} alt="Trailer" className={styles.trailerThumb} />
                      </button>
                      <button
                        type="button"
                        className={styles.trailerBtn}
                        style={{ filter: 'drop-shadow(4px 6px 14px rgba(0, 0, 0, 0.5))' }}
                        onClick={() => setTrailerOpen(true)}
                      >
                        <img src={trailerBtn} alt="Watch Trailer" />
                      </button>
                    </>
                  )}
                </div>
              </>
            )}
            {card.type === 'image' && (
              <div className={styles.imageCard}>
                <img src={card.image} alt={card.alt} className={styles.cardImage} />
                {card.button && (
                  <div className={styles.presskitWrapper}>
                    <a
                      href={card.button.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.presskitLink}
                    >
                      <img src={presskitImg} alt="Presskit" />
                    </a>
                    <img src={pointHandImg} alt="" className={styles.pointHand} />
                  </div>
                )}
              </div>
            )}
            {card.type === 'video' && (
              <div className={styles.videoCard}>
                <h3 className={styles.videoTitle}>{card.title}</h3>
                <p className={styles.videoDesc}>{card.description}</p>
                <Button variant="danger" href={card.videoUrl}>
                  {card.buttonLabel}
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

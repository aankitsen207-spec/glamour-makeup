'use client'

import { Container, Row, Col } from 'react-bootstrap'
import styles from './Gallery.module.css'

export default function Gallery() {
  const images = [
    { id: 1, emoji: '💄', name: 'Makeup Look 1' },
    { id: 2, emoji: '💅', name: 'Makeup Look 2' },
    { id: 3, emoji: '✨', name: 'Makeup Look 3' },
    { id: 4, emoji: '👄', name: 'Makeup Look 4' },
    { id: 5, emoji: '🎀', name: 'Makeup Look 5' },
    { id: 6, emoji: '💎', name: 'Makeup Look 6' },
  ]

  return (
    <section id="gallery" className={styles.gallery}>
      <Container>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Glamour Gallery</h2>
          <p className={styles.subtitle}>See our products in action</p>
        </div>

        <Row className="g-3">
          {images.map((item) => (
            <Col key={item.id} sm={6} lg={4}>
              <div className={styles.galleryItem}>
                <div className={styles.galleryImage}>{item.emoji}</div>
                <p className={styles.galleryName}>{item.name}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

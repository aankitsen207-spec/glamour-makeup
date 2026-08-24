'use client'

import { Container, Row, Col } from 'react-bootstrap'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className={styles.content}>
            <h1 className={styles.title}>
              Unleash Your <span className={styles.highlight}>Glamour</span>
            </h1>
            <p className={styles.subtitle}>
              Experience premium makeup products that enhance your natural beauty and confidence. Professional quality, luxury feel, affordable prices.
            </p>
            <button className={`${styles.ctaBtn} btn btn-lg`}>
              Shop Now
            </button>
          </Col>
          <Col lg={6} className={styles.imageContainer}>
            <div className={styles.imagePlaceholder}>
              <p>🎀 GLAMOUR MAKEUP 🎀</p>
              <p className={styles.subtext}>Premium Beauty Collection</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

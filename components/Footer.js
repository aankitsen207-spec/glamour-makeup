'use client'

import { Container, Row, Col } from 'react-bootstrap'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row className="mb-4">
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className={styles.footerTitle}>GLAMOUR MAKEUP</h5>
            <p className={styles.footerText}>
              Premium makeup products for everyone. Quality, affordability, and beauty in every product.
            </p>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className={styles.footerTitle}>Quick Links</h5>
            <ul className={styles.footerList}>
              <li><a href="#products">Products</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#testimonials">Reviews</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className={styles.footerTitle}>Follow Us</h5>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>Facebook</a>
              <a href="#" className={styles.socialLink}>Instagram</a>
              <a href="#" className={styles.socialLink}>Twitter</a>
            </div>
          </Col>
        </Row>
        <div className={styles.divider}></div>
        <Row>
          <Col className="text-center">
            <p className={styles.copyright}>
              &copy; 2024 Glamour Makeup. All rights reserved. | Made with ❤️
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

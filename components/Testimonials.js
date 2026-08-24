'use client'

import { Container, Row, Col } from 'react-bootstrap'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Singh',
      role: 'Makeup Artist',
      text: 'The quality of these products is outstanding! My clients absolutely love them.',
      rating: 5
    },
    {
      id: 2,
      name: 'Anjali Sharma',
      role: 'Beauty Blogger',
      text: 'Best makeup collection I have ever used. Highly recommended for everyone!',
      rating: 5
    },
    {
      id: 3,
      name: 'Neha Patel',
      role: 'Bride',
      text: 'Perfect for my wedding day. Long-lasting and beautiful finish!',
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className={styles.testimonials}>
      <Container>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>What Our Customers Say</h2>
          <p className={styles.subtitle}>Real reviews from happy customers</p>
        </div>

        <Row className="g-4">
          {testimonials.map((testimonial) => (
            <Col key={testimonial.id} md={6} lg={4}>
              <div className={styles.testimonialCard}>
                <div className={styles.stars}>
                  {'⭐'.repeat(testimonial.rating)}
                </div>
                <p className={styles.testimonialText}>"{testimonial.text}"</p>
                <div className={styles.testimonialAuthor}>
                  <h4 className={styles.authorName}>{testimonial.name}</h4>
                  <p className={styles.authorRole}>{testimonial.role}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

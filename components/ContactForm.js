'use client'

import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './ContactForm.module.css'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for contacting us! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className={styles.contact}>
      <Container>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.subtitle}>Have questions? We'd love to hear from you!</p>
        </div>

        <Row className="justify-content-center">
          <Col lg={6}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Your Name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="your.email@example.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className={styles.textarea}
                  placeholder="Your message here..."
                />
              </div>

              <button type="submit" className={`${styles.submitBtn} btn btn-lg`}>
                Send Message
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

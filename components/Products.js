'use client'

import { Container, Row, Col } from 'react-bootstrap'
import styles from './Products.module.css'

export default function Products() {
  const products = [
    {
      id: 1,
      name: 'Luxury Lipstick',
      price: '$24.99',
      image: '💄',
      description: 'Long-lasting, moisturizing formula'
    },
    {
      id: 2,
      name: 'Foundation Pro',
      price: '$32.99',
      image: '💅',
      description: 'Full coverage, natural finish'
    },
    {
      id: 3,
      name: 'Eye Shadow Palette',
      price: '$28.99',
      image: '✨',
      description: '24 stunning shades'
    },
    {
      id: 4,
      name: 'Mascara Deluxe',
      price: '$18.99',
      image: '👁️',
      description: 'Volume & length in one stroke'
    },
    {
      id: 5,
      name: 'Blush & Glow',
      price: '$22.99',
      image: '🌸',
      description: 'Adds natural radiance'
    },
    {
      id: 6,
      name: 'Highlighter Shine',
      price: '$20.99',
      image: '⭐',
      description: 'Luminous & long-lasting'
    }
  ]

  return (
    <section id="products" className={styles.products}>
      <Container>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Our Premium Collection</h2>
          <p className={styles.subtitle}>Handpicked makeup products for every beauty enthusiast</p>
        </div>

        <Row className="g-4">
          {products.map((product) => (
            <Col key={product.id} md={6} lg={4}>
              <div className={styles.productCard}>
                <div className={styles.productImage}>{product.image}</div>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productDescription}>{product.description}</p>
                <div className={styles.productFooter}>
                  <span className={styles.price}>{product.price}</span>
                  <button className={`${styles.addBtn} btn btn-sm`}>Add to Cart</button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

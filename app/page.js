'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Testimonials from '@/components/Testimonials'
import Gallery from '@/components/Gallery'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Products />
      <Gallery />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  )
}

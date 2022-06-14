import React from 'react'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Recommend from './components/Recommend'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'





const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Recommend />
      <Testimonial />
      <Footer />
    </>
  )
}

export default App

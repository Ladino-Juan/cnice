import React from 'react';
import { Navbar, Products, About, Feedback, CTA, Footer } from './components';
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Products />
   
      <Feedback />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
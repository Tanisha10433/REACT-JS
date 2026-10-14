import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
function Home() {
  const name = "Learn Coding";

  return (
    <div>
      <Navbar />
      <div>Home {name}</div>
      <Footer />
    </div>
  )
}

export default Home
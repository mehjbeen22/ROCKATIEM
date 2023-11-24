import './App.css'

import React from 'react'
import Vouchers from './components/Vouchers'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
    <Navbar />
      <Vouchers/>
    <Footer/>
    </div>
  )
}

export default App

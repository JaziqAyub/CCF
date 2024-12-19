import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import "./global.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from './components/About'
import Contact from './components/Contact'



const App = () => {

    const username = "Welcome"

    return (

        <BrowserRouter>
            <Navbar />
            <div className='main'>

                <Routes>
                    <Route path='/' element={<Home user={username} />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>

            </div>

            <Footer />
        </BrowserRouter>

    )
}
export default App

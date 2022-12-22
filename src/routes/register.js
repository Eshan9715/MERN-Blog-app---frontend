import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Nav'
import Register from '../components/Register'

const register = () => {
    return (
        <>
            <Navbar />
            <div className='mt-[80px]'>
            <Register />
            </div>
            <Footer />
        </>
    )
}

export default register

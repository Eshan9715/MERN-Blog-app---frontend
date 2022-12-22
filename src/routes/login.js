import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Nav'
import Login from '../components/Login'

const login = () => {
    return (
        <>
            <Navbar />
            <div className='mt-[80px]'>
            <Login />
            </div>
            <Footer />
        </>
    )
}

export default login;

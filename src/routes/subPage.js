import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Nav'
import BlogDetail from '../pages/BlogDetail'

const subPage = () => {
    return (
        <>
            <Navbar />
            <div className='mt-[120px]'>
            <BlogDetail />
            </div>            
            <Footer />
        </>
    )
}

export default subPage

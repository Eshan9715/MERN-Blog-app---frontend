import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Nav'
import MyBlogs from '../pages/UserBlogs'

const myBlogs = () => {
    return (
        <>
            <Navbar />
            <div className='mt-[120px]'>
            <MyBlogs />
            </div>
            <Footer />
        </>
    )
}

export default myBlogs

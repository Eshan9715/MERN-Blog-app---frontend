import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Nav'
import AddBlog from '../pages/AddBlog'

const addBlog = () => {
    return (
        <>
            <Navbar />
            <div className='mt-[80px]'>
            <AddBlog />
            </div>
            
            <Footer />
        </>
    )
}

export default addBlog;

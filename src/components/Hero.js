import React from 'react'
import b from '../assets/14.gif'
import Button from './button';
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="h-[70vh] w-screen bg-gray-900">
        <div className="flex md:max-w-7xl md:mx-auto">
            <div className='flex w-full items-center justify-between'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex-col justify-center md:max-w-2xl md:mx-auto items-center m-10 md:m-2'>
                        <h1 className="mb-4 my-16 text-2xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white md:mx-5">Start your career, Blogger is with you.</h1>
                        <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 md:mx-5">From now, you can write and read blogs & enhance your knowledge, cheers!</p>

                        <div className='flex flex-col md:flex-row'>
                            <Link to='/login' className='text-gray-800 hover:text-gray-400 duration-500 font-Monserrat '><Button name='Get started' ></Button></Link>
                            <Link to='/addBlog' className='text-gray-800 hover:text-gray-400 duration-500 font-Monserrat '><Button name='See more' ></Button></Link>
                        </div>
                    
                    </div>
                
                </div>

                <div className='flex justify-end items-center'>
                    <img src={b} alt="mockup" className='hidden md:flex md:w-4/6 p-3 m-3'/>
                </div>

            </div>
        </div>

      
        {/* <div className="grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7 ml-6 xl:ml-0">
                <h1 className="max-w-2xl mb-4 text-2xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">Start your career, Blogger is with you.</h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From now, you can write and read blogs & enhance your knowledge, cheers!</p>
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Get started
                    <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    See more
                </a> 
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src={b} alt="mockup"/>
            </div>                
        </div> */}
    </div>
  )
}

export default Hero
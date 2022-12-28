import React from 'react'

const Button = ({handleClick, name}) => {
  return (
    <button className='bg-indigo-600 text-white font-Monserrat py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
    duration-500 w-[250px] mt-5 md:w-[150px] md:mt-2 min-w-[200px]' onClick={handleClick}>{name}
    </button>
  )
}

export default Button

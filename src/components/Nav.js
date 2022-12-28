import React, { useState, useEffect } from 'react'
import Button from './button';
import { Link } from 'react-router-dom'
//import blog from '../assets/blog.png'
import {useDispatch, useSelector} from 'react-redux';
import { authActions } from '../store';


const Nav = () => {
  const isLoggedIn = useSelector((state)=> state.isLoggedIn);
  const dispatch = useDispatch();
  const [data, setData] = useState('');

  useEffect(() => {
    const localStorageItems = JSON.parse(localStorage.getItem('items'));
    console.log(localStorageItems);
    if (localStorageItems) {
        setData(localStorageItems);
    }
}, []);

  const handleAuth = ()=>{
    dispatch(authActions.logout());
    localStorage.removeItem('items')
  }

  // console.log(data.userName.slice(0,5))


    let Links =[
      {name:"Home",link:"/"},
      {name:"Blogs",link:"/myBlogs"},
      {name:"Write",link:"/addBlog"},
    ];
    let [open,setOpen]=useState(false);

  return (
    <div className='shadow-md w-full fixed bg-white z-50 top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-2 md:px-10 px-7'>
        <div className='font-bold text-xl cursor-pointer flex items-center font-Monserrat 
        text-gray-800'>
          <div className='w-8 md:w-12 lg:w-16'>
            <img src='https://flowbite.com/docs/images/logo.svg' alt=''/>
          </div>
          Blogger
        </div>
      
        <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-2 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close':'menu'}></ion-icon>
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
          {
            Links.map((link)=>(
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-3'>
                <Link to={link.link} className='text-gray-800 hover:text-gray-400 duration-500 font-Monserrat '>{link.name}</Link>
              </li>
            ))
          }
         
          <div className='flex flex-col md:flex-row'>
            {isLoggedIn && <div className='bg-orange-600 text-white text-center font-Monserrat font-bold py-2 px-6 rounded md:ml-8 hover:bg-orange-400 
            duration-500 w-[250px] mt-5 md:w-[150px] md:mt-2'>Hi {data && data.nickName}</div>}
            {!isLoggedIn && <> 
                        {/* <Link to='/login' className='text-gray-800 hover:text-gray-400 duration-500 font-Monserrat '><Button>Sign In</Button></Link> */}
                        <Link to='/register' className='text-gray-800 hover:text-gray-400 duration-500 font-Monserrat '><Button name='Sign up'></Button></Link>
                         </>
            }
            {isLoggedIn && <Link to='/login' className='text-gray-800 hover:text-gray-400 duration-500 font-Monserrat '><Button name='logout' handleClick={handleAuth} >logout</Button></Link>
            }
          </div>
        

        </ul>
      </div>
    </div>
               
  )
}

export default Nav;


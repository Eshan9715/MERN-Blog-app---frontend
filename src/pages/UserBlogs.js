import axios from 'axios';
import React, { useEffect, useState } from 'react'
//import CardRow from '../components/CardRow'
import { useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux';
import man from '../assets/man.png'
import write from '../assets/14.gif'

import CardRow from '../components/CardRow';

const UserBlogs = () => {
  const isLoggedIn = useSelector((state)=> state.isLoggedIn);
  const[user, setUser] = useState('')
  // const [items, setItems] = useState([]);


  const navigate = useNavigate();
  const localStorageItems = JSON.parse(localStorage.getItem('items'));
  console.log(localStorageItems);
  // if (localStorageItems) {
  //     setItems(localStorageItems);
  // }


  const id  = localStorageItems.userID;
  console.log(id);


  //console.log(localStorageItems.userID)

  // const id = localStorage.getItem("userID");
  // console.log("user id >>>>>> :" + id)

  const sendRequest = async ()=>{
    const res = await axios.get(`http://localhost:5000/api/blogs/user/${id}`)
    .catch(err=>console.log(err));
    const data = await res.data;
    return data;
  }


  useEffect(()=>{
      sendRequest()
      .then((data)=>setUser(data.user))
      .then((data)=>console.log(data.user))

  },[]);

  console.log(user);
  console.log(user.name);
  console.log(user.email);

  const handleCheck = (type)=>{
    if(type==="login"){
      navigate('/login')
    }else{
      navigate('/register')
    }
  }

   const startWriting = ()=>{
    navigate('/addBlog')

   }
  
  return (
   <>
      {!isLoggedIn?
        <div className="flex max-w-xl mx-auto h-[450px] justify-center border rounded-lg shadow-lg">
           <div className='flex justify-center items-center flex-col'>
            <p class="text-center">Already have a account?</p>

            <button onClick={()=>handleCheck('login')} class="w-full my-5 py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              <span>Login Here</span>
            </button>

            <p class="text-center mt-5">Not registered yet?</p>

            <button onClick={()=>handleCheck('register')}  class="w-full my-5 py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              <span>Register Here</span>
            </button>
        </div> 
        </div>
       : 

        <div className='flex max-w-6xl flex-col mx-auto space-y-6'>
          <div class="flex flex-col p-8 bg-white shadow-md hover:shodow-lg rounded-2xl">
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                {/* <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> */}
                <img src={man} alt='man' className='w-[70px] h-[70px]' />
                  <div class="flex flex-col ml-3">
                    <div class="font-medium leading-none">{user.name}</div>
                    <p class="text-sm text-gray-600 leading-none mt-3">{user.email}
                    </p>
                  </div>
                </div>
                <div class="flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full">Blogs : {user.blogs && user.blogs.length}</div>
              </div>
          </div>
          {user && user.blogs && user.blogs.length!==0?
            user.blogs.map((item,index)=>{
                    return (                      
                      <CardRow
                        key={index} 
                        image={item.image}
                        title={item.title} 
                        description={item.description.slice(0,350)} 
                        catogery= {item.type}
                        author= {user.name}
                        id={item._id}
                        />
                    )
            }):
          <>
            <div className='max-w-md mx-auto my-3'>
              <div className='flex flex-col justify-center items-center'>
                <img src={write} alt='start writing' className='w-1/2 md:w-3/4 mb-5'/>

                <button onClick={startWriting} class="w-1/2 py-2 md:w-3/4 md:py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                  <span>Start Writing</span>
                </button>
              </div>
              {/* <p className='font-bold text-xl text-red-900'>No blogs found!!</p> */}
             

            </div>
          </>
          }
        
        </div>
      }
   </>
    
     
    
   
   
   
  )
}

export default UserBlogs
import React from 'react'
import { BsFillPenFill } from 'react-icons/bs';
import { createSearchParams, useNavigate } from 'react-router-dom';


const CardRow = ({image,title,catogery,author,description,id}) => {
  const navigate = useNavigate();

  const handlePost = (key)=>{
    console.log("id >>>>>>>>>" + key)
      navigate({
        pathname: "/blogDetail",
        search: createSearchParams({
          id: key
        }).toString()
      });
  }
  return (
   
    <div class="container px-6 py-10 mx-auto shadow-lg">
        
            <div class="flex">
                <img class="object-cover relative w-full h-56 rounded-lg lg:w-64" src={image} alt=""/>
                <span class="text-sm text-white absolute rounded-2xl m-2 bg-orange-600 w-[80px] text-center">{catogery}</span>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                  
                    <p class="text-xl font-bold text-gray-800 hover:underline ">{title}
                    </p>

                    <span class="text-sm text-gray-500 dark:text-black">{description}</span>

                    <p className='text-sm text-zinc-700 mt-2'>2 hours ago</p>

                    
                    <div className='flex justify-between'>
                      <div className='flex pt-1 '>
                        <BsFillPenFill />
                        <div class="ml-2 text-sm">{author}</div>
                      </div>
                      
                      <button onClick={()=>handlePost(id)} class="w-[100px] py-1 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                        <span>View</span>
                      </button>                    
                    </div>
                  
                </div>


            </div>
    </div>


  )
}

export default CardRow
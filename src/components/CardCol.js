import React from 'react'
import { BsFillPenFill } from 'react-icons/bs';
import { createSearchParams, useNavigate } from 'react-router-dom';


const CardCol = ({image,title,catogery,author,tags,description,id}) => { 
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
    <>
      <div class="max-w-sm rounded overflow-hidden shadow-lg transform transition-all duration-300 scale-100 hover:scale-95">
          <img class="w-full h-[250px] object-cover" src={image} alt="Sunset in the mountains"/>
          <div class="px-6 py-3">
            <div class="text-base text-white mb-2 absolute top-2 left-2 rounded-xl px-4 py-1 w-[80px] text-center bg-orange-600">{catogery}</div>

              <p class="text-lg text-bold text-black">{title}
              </p>
              <p class="text-sm text-gray-400 justify-center">{description}
              </p>

              <p className='text-sm text-zinc-700 mt-2'>2 hours ago</p>
              <hr class="my-4 border-gray-200 sm:mx-auto dark:border-gray-300" />

              <div className='flex justify-between'>
                <div className='flex pt-1 '>
                  <BsFillPenFill />
                  <div class="text-base ml-2">{author}</div>
                </div>
                <button onClick={()=>handlePost(id)} class="w-[80px] py-1 px-1 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  <span>View</span>
                </button>
              </div>
            
             
          </div>
          <div class="px-6 pt-4 pb-2">
              <span class="hidden bg-white rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{tags}</span>
      
          </div>
      </div>
        
    </>

  )
}

export default CardCol
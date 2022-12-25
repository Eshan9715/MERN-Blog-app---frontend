import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import blog from '../assets/blog.png'
import axios from 'axios';


const BlogDetail = () => {
  const [searchParams] = useSearchParams();
  const id  = searchParams.get("id");
  console.log(id)
  const[blogD, setBlogD] = useState('')

  const sendRequest = async ()=>{
    const res = await axios.get(`https://blue-fragile-mussel.cyclic.app/api/blogs/${id}`)
    .catch(err=>console.log(err));
    const data = await res.data;
    return data;
  }

  useEffect(()=>{
    sendRequest()
    .then((data)=>setBlogD(data.blog))
  },[]);

  console.log(blogD.title)

  return (
        <div className='flex max-w-6xl flex-col mx-auto space-y-6'>

          <div class="flex flex-col p-8 bg-white shadow-md hover:shodow-lg rounded-2xl">
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <img src={blog} alt='man' className='w-[70px] h-[70px]' />
                  <div class="flex flex-col ml-3">
                    <div class="text-xl font-bold leading-none">{blogD.title}</div>
                    <p class="text-sm text-gray-600 leading-none mt-3">{blogD.type}
                    </p>
                  </div>
                </div>
                {/* <button class="flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full">Delete</button> */}
              </div>
          </div>

          <div className='flex max-w-xl mx-auto'>
            <img src={blogD.image} alt='blog' className='w-full rounded-xl'/>
          </div>

          <div class="flex flex-col p-8 bg-white shadow-md hover:shodow-lg rounded-2xl font-bold">
          {blogD.headline}
          </div>

          <div class="flex flex-col p-8 bg-white shadow-md hover:shodow-lg rounded-2xl mb-5">
          {blogD.description}
          </div>


          {/* {user && user.blogs && user.blogs.map((item,index)=>{
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
            })
          }
         */}
        </div>
  )
}

export default BlogDetail
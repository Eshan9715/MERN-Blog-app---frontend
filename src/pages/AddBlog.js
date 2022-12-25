import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux';


const AddBlog = () => {
  const isLoggedIn = useSelector((state)=> state.isLoggedIn);
  const [formErrors, setFormErrors] = useState({});
  const [items, setItems] = useState([]);


  const[input, setInput]= useState({
    title:"",
    headline:"",
    description:"",
    imageURL:"",
    catogery:"",
  })

  const navigate = useNavigate();

  useEffect(() => {
    const localStorageItems = JSON.parse(localStorage.getItem('items'));
    console.log(localStorageItems);
    if (localStorageItems) {
        setItems(localStorageItems);
    }
}, []);

  const sendRequest = async()=>{
    const res = await axios.post("https://blue-fragile-mussel.cyclic.app/api/blogs/add",{
      title:input.title,
      headline:input.headline,
      description:input.description,
      image:input.imageURL,
      type:input.catogery,
      user:items.userID

    }).catch(err=>console.log(err))

    const data = await res.data;
    return data;
  }

  const handleChange = (e) => {
    e.preventDefault();
    setFormErrors(validate(input));

    if (Object.keys(formErrors).length === 0) {
      console.log(input);
      sendRequest()
      .then(()=>navigate('/'))
      .then(data=>console.log(data))
    }  
  }

  const validate = (values) => {
    const errors = {};
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const imgRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;

    if (!values.title) {
      errors.title = "Title is required!";
    }
    if (!values.headline) {
      errors.headline = "Headline is required!";
    }
    else if (values.headline.length > 40) {
      errors.headline = "Headline must be less than 40 characters";
    } 
    if (!values.description) {
      errors.description = "Description is required!";
    }
    if (!values.imageURL) {
      errors.imageURL = "ImageUrl is required!";

    }else if (!imgRegex.test(values.imageURL)) {
      errors.imageURL = "This is not a valid image-link format!";
    }
   
    return errors;
  };

  const handleCheck = (type)=>{
    if(type==="login"){
      navigate('/login')
    }else{
      navigate('/register')
    }

  }

  return (
    <div>
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
        <div class="flex items-center justify-center p-12">
          <div class="mx-auto w-full max-w-[550px]">
            <form onSubmit={handleChange}>
              <div class="mb-1">
                <label
                  for="name"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Blog title
                </label>

                <input name="title" type="text"  value={input.title}  placeholder="Enter blog's title"
                  onChange={(e) => {
                        setInput({
                            ...input,
                            title: e.target.value,
                        });
                        }}
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
              </div>
              <p className='text-[13px] text-red-600 mb-5'>{formErrors.title}</p>


              <div class="mb-5">
                <label
                  for="name"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Blog catogery
                </label>

                <select className='w-full required rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md' value={input.catogery}
                onChange={(e) => {
                        setInput({
                            ...input,
                            catogery: e.target.value,
                        });
                        }}>
                  <option value="Sport">Sport</option>
                  <option value="IT">IT</option>
                  <option value="Travel">Travel</option>
                  <option value="Food">Food</option>
                  <option value="Health">Health</option>
                  <option value="Science">Science</option>
                  <option value="Nature">Nature</option>
                  <option value="Fun">Fun</option>


                </select>
              </div>

              {/* <div class="mb-5">
                <label
                  for="subject"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Author
                </label>

                <input
                name="title" type="text"  value={input.author}
                  onChange={(e) => {
                        setInput({
                            ...input,
                            author: e.target.value,
                        });
                        }}
                  placeholder="Enter your name"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div> */}

              <div class="mb-1">
                <label
                  for="message"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Headline
                </label>
                <textarea
                  rows="4"
                  name="message"
                  type="text"  value={input.headline}
                  onChange={(e) => {
                        setInput({
                            ...input,
                            headline: e.target.value,
                        });
                        }}
                  placeholder="Enter blog's headline"
                  class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>             
              </div>
              <p className='text-[13px] text-red-600 mb-5'>{formErrors.headline}</p>


              <div class="mb-1">
                <label
                  for="message"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Description
                </label>
                <textarea
                  rows="10"
                  name="message"
                  type="text"  value={input.description}
                  onChange={(e) => {
                        setInput({
                            ...input,
                            description: e.target.value,
                        });
                        }}
                  placeholder="Enter blog's description"
                  class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>             
              </div>
              <p className='text-[13px] text-red-600 mb-5'>{formErrors.description}</p>


              {/* <div class="mb-5">
                <label class="mb-5 block text-base font-semibold text-[#07074D]">
                  Upload File
                </label>

                <div class="mb-8">
                  <input type="file" name="file" id="file" class="sr-only" onChange={handleImage} />
                  <label
                    for="file"
                    class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                  >
                    <div>
                      <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                        Drop files here
                      </span>
                      <span class="mb-2 block text-base font-medium text-[#6B7280]">
                        Or
                      </span>
                      <span
                        class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]"
                      >
                        Browse
                      </span>
                    </div>
                  </label>
                </div>
              </div> */}

              <div class="mb-1">
                <label
                  for="name"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Blog imageUrl
                </label>

                <input name="imageURL" type="text"  value={input.imageURL}  placeholder="ex:https//images/plant/lant.jpg"
                  onChange={(e) => {
                        setInput({
                            ...input,
                            imageURL: e.target.value,
                        });
                        }}
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
              </div>
              <p className='text-[13px] text-red-600 mb-5'>{formErrors.imageURL}</p>

              
              <div>
                <button type='submit' class="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg>
                      <span>Submit</span>
                </button>
              </div>

              
            </form>
          </div>
        </div>
      }
    </div>
  )
}

export default AddBlog
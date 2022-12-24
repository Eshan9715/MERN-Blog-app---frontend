import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {useDispatch} from 'react-redux';
import {authActions} from '../store';


const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [data, setData]= useState('')

  const [reg, setReg] = useState({
    name:"", nickname:"" , email:"", password: "",confirmPassword:""
  })

  const sendRequest = async ()=> {
    const res = await axios.post("http://localhost:5000/api/user/signup",{
      name: reg.name,
      nickname: reg.nickname,
      email:reg.email,
      password: reg.password
    }).catch(err=>console.log(err))

    const data = await res.data;
    return data;
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) {
      errors.name = "Username is required!";
    }
    if (!values.nickname) {
      errors.nickname = "Nickname is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters!";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters!";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required!";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Password does not match!";
    }
    return errors;
  };

  const handleSubmit = (e)=>{
    e.preventDefault()
    setFormErrors(validate(reg));

    if (Object.keys(formErrors).length === 0) {
      console.log(reg)
      sendRequest()
      .then(data=>console.log(data))
      .then(data=>setData(data))
      // .then((data)=>localStorage.setItem("items",JSON.stringify({
      //   "userID": data.newUser._id,
      //   "nickName": data.newUser.nickname,
      // })))
      .then(()=>dispatch(authActions.login()))
      .then(()=>navigate('/login'))
      console.log("registration done!!!")

    }

    console.log(data)
  }
  return (
 
    <div class="max-w-xl mx-auto my-10 bg-white p-8">
        <h1 class="text-xl font-semibold text-center">Create an account</h1>

      <form onSubmit={handleSubmit} class="my-10">
        <div class="flex flex-col space-y-5">
            <label for="name">
                <p class="font-medium text-slate-700 pb-2">Username</p>
                <input name="name" type="text" value={reg.name}
                 onChange={(e) => {
                      setReg({
                          ...reg,
                          name: e.target.value,
                      });
                      }} 
                  class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your name"/>
            </label>
            <p className='text-[13px] text-red-600 mb-1'>{formErrors.name}</p>


            <label for="Nickname">
                <p class="font-medium text-slate-700 pb-2">Nickname</p>
                <input name="name" type="text" value={reg.nickname}
                 onChange={(e) => {
                      setReg({
                          ...reg,
                          nickname: e.target.value,
                      });
                      }} 
                  class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your nickname(max: 5 letters)"/>
            </label>
            <p className='text-[13px] text-red-600 mb-1'>{formErrors.nickname}</p>

            <label for="email">
                <p class="font-medium text-slate-700 pb-2">Email address</p>
                <input id="email" name="email" type="email" value={reg.email}
                onChange={(e) => {
                      setReg({
                          ...reg,
                          email: e.target.value,
                      });
                      }}  
                  class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address"/>
            </label>
            <p className='text-[13px] text-red-600 mb-1'>{formErrors.email}</p>

            <label for="password">
                <p class="font-medium text-slate-700 pb-2">Password</p>
                <input name="password" type="password" value={reg.password}
                onChange={(e) => {
                      setReg({
                          ...reg,
                          password: e.target.value,
                      });
                      }} 
                  class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password"/>
            </label>
            <p className='text-[13px] text-red-600 mb-1'>{formErrors.password}</p>

            <label for="password">
                <p class="font-medium text-slate-700 pb-2">Confirm Password</p>
                <input name="confirmPassword" type="password" value={reg.confirmPassword}
                onChange={(e) => {
                      setReg({
                          ...reg,
                          confirmPassword: e.target.value,
                      });
                      }} 
                  class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Re-enter your password"/>
            </label>
            <p className='text-[13px] text-red-600 mb-1'>{formErrors.confirmPassword}</p>

            <div className='mt-4'>
              <button type='submit' class="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    <span>Register</span>
              </button>
            </div>
            
            <p class="text-center">Already have a account?<Link to='/login' className=' text-indigo-600 font-medium inline-flex space-x-1 items-center ml-2'><span>Login now </span><span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg></span></Link>
            </p>
        </div>
      </form>

   
    </div>

  )
}

export default Register
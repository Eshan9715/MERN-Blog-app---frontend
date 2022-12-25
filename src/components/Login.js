import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import {useDispatch} from 'react-redux';
import {authActions} from '../store';

const Login = () => {
  // const[isSignup, setIsSignup] = useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formErrors, setFormErrors] = useState({});


  const [log, setLog] = useState({
      email:"", password: ""
  })

  const sendRequest = async() =>{
     const res = await axios.post("https://blue-fragile-mussel.cyclic.app/api/user/login",{
      email:log.email,
      password: log.password
    }).catch(err=>console.log(err))

    const data = await res.data;
    return data;
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  const handleSubmit = (e)=>{
    e.preventDefault()
    setFormErrors(validate(log));
    if (Object.keys(formErrors).length === 0) {
        console.log(log)
        sendRequest()
        .then((data)=>localStorage.setItem("items",JSON.stringify({
          "userID": data.user._id,
          "nickName": data.user.nickname
      })))
      .then(()=>dispatch(authActions.login()))
      .then(()=>navigate('/'))
      .then(data=>console.log(data));
    // .then((data)=>localStorage.setItem("userID",data.user._id))
    // .then((data)=>localStorage.setItem("userName",data.user.name))
  }
   
  }
  return (
 
    <div class="max-w-xl mx-auto my-10 bg-white p-8">
      <h1 class="text-xl font-semibold text-center">Welcome back</h1>
      <div class="my-5">
          <button class="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
              <img src="https://www.svgrepo.com/show/355037/google.svg" class="w-6 h-6" alt=""/> <span>Login with Google</span>
          </button>
      </div>

      <div class="flex items-center justify-center border-t-[1px] border-t-slate-300 w-full relative">
        <div class="-mt-1 font-bod bg-white px-5 absolute">Or</div>
      </div>
   
      <form onSubmit={handleSubmit} class="my-10">
        <div class="flex flex-col space-y-5">
            <label for="email">
                <p class="font-medium text-slate-700 pb-2">Email address</p>
                <input id="email" name="email" type="email" value={log.email}
                  onChange={(e) => {
                      setLog({
                          ...log,
                          email: e.target.value,
                      });
                      }}   class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address"/>
            </label>
            <p className='text-[13px] text-red-600 mb-1'>{formErrors.email}</p>

            <label for="password">
                <p class="font-medium text-slate-700 pb-2">Password</p>
                <input name="password" type="password"  value={log.password}
                onChange={(e) => {
                      setLog({
                          ...log,
                          password: e.target.value,
                      });
                      }}   class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password"/>
            </label>
            <p className='text-[13px] text-red-600 mb-1'>{formErrors.password}</p>

            <div class="flex flex-row justify-between">
                <div>
                    <label for="remember" class="">
                        <input type="checkbox" id="remember" class="w-4 h-4 border-slate-200 focus:bg-indigo-600 m-2"/>
                        Remember me
                    </label>
                </div>
                <div className='m-2'>
                    <a href="#" class="font-medium text-indigo-600">Forgot Password?</a>
                </div>
            </div>
            <button type='submit' class="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  <span>Login</span>
            </button>
            <p class="text-center">Not registered yet?<Link to='/register' className=' text-indigo-600 font-medium inline-flex space-x-1 items-center ml-2'><span>Register now </span><span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg></span></Link>
            </p>
        </div>
      </form>

   
    </div>
  )
}

export default Login
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import SubPage from './routes/subPage'
import AddBlog from './routes/addBlog'
import Search from './routes/search'
import Login from './routes/login'
import Register from './routes/register'
import MyBlogs from './routes/myBlogs'
import {useSelector} from 'react-redux';


function App() {
  const isLoggedIn = useSelector((state)=> state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/catogaries' element={<SubPage />} /> */}
        <Route path='/addBlog' element={<AddBlog />} />
        <Route path='/search' element={<Search />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/myBlogs' element={<MyBlogs />} />
        <Route path='/blogDetail' element={<SubPage />} />

      </Routes>
    </>
  );
}

export default App;

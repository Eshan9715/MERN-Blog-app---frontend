import React, { useEffect, useState } from 'react'
//import BlogCato from '../Services/BlogCato';
//import TrendingBlogs from '../Services/TrendingBlogs';
//import AdvMain from './Adv_main';
import Footer from './Footer';
import Hero from './Hero';
import Nav from './Nav'
// import objectives from '../Data/main';
import axios from 'axios';
import Button from './filterButton';
import Menu from './menu';

const Home = () => {
  const[blogs, setBlogs] = useState([]);
  const [buttons, setButtons] = useState([]);
  const [menuItem, setMenuItem] = useState([]);


  const sendRequest = async ()=>{
    const res = await axios.get("https://blue-fragile-mussel.cyclic.app/api/blogs").catch(err=>console.log(err));    //http://localhost:5000
    const data = await res.data;
    return data;
  }

  useEffect(()=>{
    sendRequest().then(data=>{
      setBlogs(data.blogs);
      const allCategories = ['All', ...new Set(data.blogs.map(blog => blog.type))];
      setButtons(allCategories)
      setMenuItem(data.blogs)
    });
  },[])

  console.log(blogs)


  const filter = (button) =>{
      if(button === 'All'){
        setMenuItem(blogs);
        return;
      }
  
      const filteredData = blogs.filter(item => item.type ===  button);
      setMenuItem(filteredData)
    }
    
  return (
    <div>
      <Nav/>
      <div className='mt-[80px]'>
        <Hero/>

        <Button button={buttons} filter={filter} />
        <Menu menuItem={menuItem}/>      
        {/* <BlogCato/> */}
        {/* <BlogContent title = 'Recent Blogs' data = {blogs}/>
        <BlogContent title = 'Trending Blogs' data = {blogs}/> */}

        <Footer/>
      </div>
     
    </div>
  )
}

export default Home;
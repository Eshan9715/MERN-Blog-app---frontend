import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
//import 'swiper/css/scrollbar';

import a from '../assets/7.jpg'
import b from '../assets/8.jpg'
import c from '../assets/9.jpg'
import d from '../assets/10.jpg'
import e from '../assets/11.jpg'
import f from '../assets/12.jpg'
import g from '../assets/13.jpg'



SwiperCore.use([Autoplay]);

const objectives =[
  {
      id:1,
      image: a,
    
  },
  {
      id:2,
      image: b,
   
  },
  {
      id:3,
      image: c,
    
  },
  {
      id:4,
      image: d
  
  },
  {
      id:5,
      image: e,
    
  },
  {
      id:6,
      image: f,
  
},
  {
      id:7,
      image: g,

},

]


const BlogCato = () => {
  return (
    <>
      <div className='container text-center text-3xl font-Monserrat font-bold my-10'>
        Catogories
      </div>
      <div className=' mx-8 items-center mt-3'>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          autoplay={{delay:2000}}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          >
          {objectives.map(obj=>(
              <SwiperSlide key={obj.id}>
                  <div className='flex flex-col p-4 border border-black rounded-2xl'>
                      <img src={obj.image} alt='' className='rounded w-[200px] mx-auto h-[200px] object-scale-down md:object-cover '/>
                      <span className='absolute bottom-[40%] left-[40%] text-white text-3xl  '>{obj.Topic}</span>              
                  </div>
              
              </SwiperSlide>

          ))}
          
          
        </Swiper>
      </div>
    </>
   
  
  )
}

export default BlogCato
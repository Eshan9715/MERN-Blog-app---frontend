import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import CardCol from '../components/CardCol';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
//import 'swiper/css/scrollbar';

SwiperCore.use([Autoplay]);

const BlogContent = ({title, data}) => {
 
  return (
    <>
      <div className='container text-center text-3xl font-Monserrat font-bold my-10'>
       {title}
      </div>
      <div className='flex items-center justify-center'>
        <Swiper className='w-[78%] flex items-center justify-center'
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          //slidesPerView={3}
          spaceBetween={50}

          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,

            },
            1024: {
              width: 1024,
              slidesPerView: 3,

            },
            1536: {
              width: 1536,
              slidesPerView: 4,

            },
          }}
        
          autoplay={{delay:2000}}
          navigation = {false}
          //pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
          >
          {data.map(obj=>(
              <SwiperSlide key={obj.id}>
                  <CardCol 
                        image={obj.image}
                        title={obj.title} 
                        description={obj.headline} 
                        catogery= {obj.type}
                        author= {obj.author}/>
              
              </SwiperSlide>

          ))}
          
          
        </Swiper>
      </div>
    </>
   
  )
}

export default BlogContent


  
      


      
import {useRef , useEffect} from 'react'
import Image from "next/image";
import { toast } from "react-toastify";
import { useWindowSize } from "@utils/use-window-size";
import { Swiper , SwiperSlide  } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { arch } from 'os';

const GalleryProduct: React.FC = ({handleShow , handleShowGalaryFromSlide , id , data}) => {
 console.log('addd' , data)
  const productGalleryCarouselResponsive = {
    "768": {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    "0": {
      slidesPerView: 1,
    },
  };
  const swiperRef = useRef(null) 
  useEffect(() => {
    console.log(id)
   if(handleShowGalaryFromSlide) {
    swiperRef.current.swiper.slideTo(id);

   }
  } , [handleShowGalaryFromSlide] )
  console.log('handleShowGalaryFromSlide : ' , handleShowGalaryFromSlide , 'handleShow : ' , handleShow )
  return (
    <>
<div className="bg-black fixed top-0 right-0 bottom-0 left-0 opacity-50 z-40" onClick={() => {
  if(handleShow != undefined) {
    handleShow()
  }
  else if (handleShowGalaryFromSlide!== undefined) { 
    handleShowGalaryFromSlide()
  }
}}>
 </div>
<div className="">
  <div className=" fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-50 overflow-hidden  mx-auto rounded-lg w-full sm:w-96 md:w-[800px]  sm:px-8 px-2">
        <div className="text-center mb-6 pt-2.5">
          
            <Swiper
                  // modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={1}
                  ref={swiperRef}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,   
            }}
            className="mySwiper"
            >
               {/* <SwiperSlide>
               <img className="bg-white md:w-[800px] rounded-lg" src="https://cdn.pnj.io/images/thumbnails/485/485/detailed/146/GCXMXMY000535-Day-co-Vang-14K-dinh-da-ECZ-Disney-PNJ-Ariel-_1.png"/>
  
               </SwiperSlide>
               <SwiperSlide>
               <img className="bg-white md:w-[800px] rounded-lg" src="https://cdn.pnj.io/images/thumbnails/485/485/detailed/146/GCXMXMY000535-Day-co-Vang-14K-dinh-da-ECZ-Disney-PNJ-Ariel-_1.png"/>
  
               </SwiperSlide>
               <SwiperSlide>
               <img className="bg-white md:w-[800px] rounded-lg" src="https://cdn.pnj.io/images/thumbnails/485/485/detailed/146/GCXMXMY000535-Day-co-Vang-14K-dinh-da-ECZ-Disney-PNJ-Ariel-_1.png"/>
  
               </SwiperSlide> */}
               {data && data.map((item , index) => (
                <SwiperSlide>
                <img className="bg-white  md:w-[800px] md:h-[600px] rounded-lg" src={item}/>
   
                </SwiperSlide>
               ))}
            </Swiper>
            <div className="flex items-center ">
				<button
					className="swiper-button-next w-7 h-7 md:w-7 md:h-7 lg:w-9 lg:h-9 xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 text-sm md:text-base lg:text-xl 3xl:text-2xl text-black flex items-center justify-center rounded-full text-gray-0  absolute transition duration-250   focus:outline-none ltr:right-10 rtl:left-10"
				>
			</button>
				<button
			className="swiper-button-prev w-7 h-7 md:w-7 md:h-7 lg:w-9 lg:h-9 xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 text-sm md:text-base lg:text-xl 3xl:text-2xl text-black flex items-center justify-center rounded-full text-gray-0  absolute transition duration-250 focus:outline-none ltr:left-10 rtl:right-10"
				>

				</button>
			</div>
        </div>
      </div>
</div>
    </>
  );
};
export default GalleryProduct;



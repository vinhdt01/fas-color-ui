// import Image from 'next'
const Banner:React.FC = () => {
    return (
        <>
        <div className="relative w-full">
            <img className="h-[300px] w-full object-cover" src="https://cdn.pnj.io/images/image-update/2020/key_points/cuahangbanner.jpg"/>
            <a className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]  text-[#fff] lg:text-[49px] text-[22px] text-center font-roboto" href="https://www.pnj.com.vn/ho-tro-mua-hang/he-thong-cua-hang/">Xem địa chỉ hệ thống cữa hàng</a>
        </div>
        <div>
            {/* <div className="w-full h-[490px] py-[20px] bg-[#000000]">
           <div className="h-[450px] max-w-[1200px] m-auto">
           <iframe className="w-full h-[450px]" src="https://www.youtube.com/embed/SX3lhGOzgU4" title="PNJ TUNG CLIP HÉ LỘ NHỮNG TUYỆT TÁC TRANG SỨC TRONG BIG SHOW  A MAGICAL JOURNEY"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           </div>
            </div> */}
            <div className=" top-0">
                <div className="h-[190px] pt-[20px] bg-[#003468] text-[#fff] text-center lg:text-[49px] text-[23.5px]">
                    Tại sao nên chọn FasColor
                </div>
              <div className="relative md:top-[-70px] top-[-50px] overflow-auto">
              <div className="flex flex-row justify-center ">
               <div className="w-[300px] flex flex-col justify-center items-center text-[12px] text-center ml-4">
               <img className="md:w-[140px] md:h-[140px] h-[80px] w-[80px]" src="https://cdn.pnj.io/images/image-update/2020/key_points/icon-circle-tragop.svg"/>
                    <p className="h-[20px] text-[#4D4D4D] font-bold">TRẢ GÓP 0% LÃI XUẤT</p>
                    <div className="h-[1px] w-[90px] bg-black mb-2"></div>
                    <p className="text-center w-[115px] h-[80px] text-[#4D4D4D] font-bold">Áp dụng dễ dàng qua thẻ tín dụng của hơn 20 ngân hàng</p>

               </div>
               <div className="w-[300px] flex flex-col justify-center items-center text-[12px] text-center">
               <img className="md:w-[140px] md:h-[140px] h-[80px] w-[80px]" src="https://cdn.pnj.io/images/image-update/2022/10/pnjfast/PNJfast-Giaotrong3h-circleicon.svg"/>
                    <p className="h-[20px] text-[#4D4D4D] font-bold">GIAO HÀNG 3H</p>
                    <div className="h-[1px] w-[90px] bg-black mb-2"></div>
                    <p  className="text-center w-[115px] h-[80px] text-[#4D4D4D] font-bold">Sở hữu ngay món trang sức yêu thích chỉ trong vòng 3 giờ</p>

               </div>
               <div className="w-[300px] flex flex-col justify-center items-center text-[12px] text-center">
               <img className="md:w-[140px] md:h-[140px] h-[80px] w-[80px]" src="https://cdn.pnj.io/images/image-update/2020/key_points/icon-circle-nbv.svg"/>
                    <p className="h-[20px] text-[#4D4D4D] font-bold">NGƯỜI BẠN VÀNG</p>
                    <div className="h-[1px] w-[90px] bg-black mb-2"></div>
                    <p  className="text-center w-[115px] h-[80px] text-[#4D4D4D] font-bold">Giải pháp tài chính cầm đồ; thu mua kim cương, túi hiệu và đồng hồ cơ</p>

               </div>
            </div>
              </div>
            </div>
        </div>
        </>
    )
}
export default Banner;
// import Widgets from "./widgets";
// import Copyright from "./copyright";
// import { footer } from "./data";
// const { widgets, payment } = footer;

// const Footer: React.FC = () => (
//   <footer className="border-b-4 border-heading mt-9 md:mt-11 lg:mt-16 3xl:mt-20 pt-2.5 lg:pt-0 2xl:pt-2">
//     <Widgets widgets={widgets} />
//     <Copyright payment={payment} />
//   </footer>
// );

// export default Footer;


import React , {useState } from 'react';
import clsx from 'clsx';

const Footer:React.FC = () => {
    const [showPNJ , setShowPNJ] = useState<boolean>(false)
    const [showBrand , setShowBrand] = useState<boolean>(false)

    const handleShowPNJ:any = () => {
        setShowPNJ(!showPNJ)

    }
    const handleShowBrand:any = () => {
        setShowBrand(!showBrand)

    }
  return ( 
     <div>

          <div className="w-[100%] xl:px-36 px-0 md:pb-0 pb-28 text-[#000000] bg-[#fff]">
          <div className="w-full h-[1px] bg-[#b3b3b3] xl:px-36 mx-0"></div>

          <div className="max-w-[1200px] m-auto my-[20px] px-2 ">
          <img className="w-[200px] h-[86.78px]" src="/assets/images/LogoFas.png" />
          </div>
          <div className="flex max-w-[1200px] m-auto xl:flex-row flex-col ">
              <div className="sm:w-[357px] w-[100%]  xl:ml-[0px] px-2 pb-5 xl:mb-0">
                  <div className="text-[11.5px] leading-6">
                      <div className="text-[14px] text-[#282828] font-medium">© 2023 FasColor</div>
                      <div>170E Phan Đăng Lưu, P.3, Q.Phú Nhuận, TP.Hồ Chí Minh</div>
                      <div>
                       <span>ĐT: </span> <a className="text-blue-700"  href="tel:0702686901">070 2686901</a></div>
                  </div>
                <div className="pt-5 text-[11.5px] leading-6">
                      <div>Gọi mua: <a className="text-blue-700" href="tel:1800545457">070 2686901</a> </div>
                </div>
              </div>
              <div className="w-[100%] h-[0.5px] bg-black xl:hidden"></div>
              <div className="xl:w-[204px] w-[100%] xl:ml-[25px]  xl:mt-0 mt-4  text-[13px] text-[#282828] cursor-pointer leading-7">
                      <div className="flex pl-2 xl:mb-0 mb-[10px] justify-between text-[14px] text-[#282828] font-bold" onClick={handleShowPNJ}>
                        <p>VỀ FASCOLOR</p>
                        <img  className={showPNJ ? 'rotate-180 xl:hidden mr-4' : 'xl:hidden mr-4'} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC43MDciIGhlaWdodD0iMTAuNzA3IiB2aWV3Qm94PSIwIDAgMjAuNzA3IDEwLjcwNyI+CiAgPGcgaWQ9Ikdyb3VwXzEyMyIgZGF0YS1uYW1lPSJHcm91cCAxMjMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMzU0IDAuMzU0KSI+CiAgICA8bGluZSBpZD0iTGluZV8zNyIgZGF0YS1uYW1lPSJMaW5lIDM3IiB4Mj0iMTAiIHkyPSIxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUpIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDM0NjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIwLjUiLz4KICAgIDxsaW5lIGlkPSJMaW5lXzM4IiBkYXRhLW5hbWU9IkxpbmUgMzgiIHkxPSIxMCIgeDI9IjEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAzNDY4IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMC41Ii8+CiAgPC9nPgo8L3N2Zz4K"/>
                         </div>
                    
                      <div className={showPNJ ? 'xl:block ' : 'xl:block hidden'}>
                      <div className={clsx(showPNJ ? 'xl:block ' : 'xl:block hidden' , 'xl:ml-0 ml-2 pl-2')}>
    
                          <div>Câu chuyện FASCOLOR</div>
                           
                      </div>     
              </div>
    </div>
    
              <div className="xl:w-[280px] w-[100%] xl:ml-[25px]  xl:mb-0 mb-4  text-[13px] text-[#282828] cursor-pointer leading-7">
                      <div className="flex pl-2 justify-between text-[14px] text-[#282828] font-bold" onClick={handleShowBrand}>
                        <p>DỊCH VỤ KHÁCH HÀNG</p>
                        <img className={showBrand ? 'rotate-180 xl:hidden mr-4' : 'xl:hidden mr-4'} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC43MDciIGhlaWdodD0iMTAuNzA3IiB2aWV3Qm94PSIwIDAgMjAuNzA3IDEwLjcwNyI+CiAgPGcgaWQ9Ikdyb3VwXzEyMyIgZGF0YS1uYW1lPSJHcm91cCAxMjMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMzU0IDAuMzU0KSI+CiAgICA8bGluZSBpZD0iTGluZV8zNyIgZGF0YS1uYW1lPSJMaW5lIDM3IiB4Mj0iMTAiIHkyPSIxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUpIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDM0NjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIwLjUiLz4KICAgIDxsaW5lIGlkPSJMaW5lXzM4IiBkYXRhLW5hbWU9IkxpbmUgMzgiIHkxPSIxMCIgeDI9IjEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAzNDY4IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMC41Ii8+CiAgPC9nPgo8L3N2Zz4K"/>
                         </div>
                     <div className={clsx(showBrand ? 'xl:block ' : 'xl:block hidden' , 'xl:ml-0 ml-2 pl-2')}>
                          <div>Hướng dẫn chọn size</div>
                          <div>Hướng dẫn mua hàng và thanh toán </div>
                          <div>Chính sách hoàn tiền</div>
                          <div>Chính sách giao hàng</div>
                          <div>Chính sách bảo hành thu đổi</div>  
                          <div>Chính sách bảo mật thông tin khách hàng</div>
                          <div>Câu hỏi thường gặp</div>    
                     </div>                 
              </div>
              <div className="w-[100%] h-[0.5px] bg-black xl:hidden"></div>
    
              <div className="xl:w-[280px] pl-2  xl:ml-[25px] xl:mt-0 mt-[20px] leading-7">
                      <div  className="text-[14px] text-[#282828] font-bold">KẾT NỐI VỚI CHÚNG TÔI</div>
                      <div className="flex">
                      <img className="h-[40px] w-[40px] px-1" data-src="" alt="Facebook" src="https://cdn.pnj.io/images/image-update/footer/facebook.svg"/>
                      <img className="h-[40px] w-[40px] px-1" data-src="" alt="Facebook" src="https://cdn.pnj.io/images/image-update/footer/instagram.svg"/>
                      <img className="h-[40px] w-[40px] px-1" data-src="" alt="Facebook" src="https://cdn.pnj.io/images/image-update/footer/youtube.svg"/>
                      <img className="h-[40px] w-[40px] px-1" data-src="" alt="Facebook" src="https://cdn.pnj.io/images/image-update/footer/email.svg"/>
                      </div>
                      <div className="text-[14px] ">Nhận các thông tin khuyến mãi hấp dẫn</div>     
                      <div className="app cursor-pointer inline-flex items-center h-[20px] rounded-md bg-[#03a5fa]">
                        <img className="app__icon w-[14px] h-[14px] mx-1" src="https://sp.zalo.me/static/follow/images/logo_white_s_2x.png" alt=""/>
                      <span className="app__label text-[#fff] text-[11px] mx-1 ">Quan tâm</span>
                      </div>                             
              </div>
          </div>
          <div>
              <div className=" flex xl:justify-end justify-between flex-col md:flex-row max-w-[1200px] mt-3 m-auto h-[100px]">
               <div className="mr-5 w-[280px] xl:ml-0 ml-2">
                      <p className="text-[14px] text-[#282828] font-bold mb-[15px] ">PHƯƠNG THỨC THANH TOÁN</p>
                   
                      <div className="flex justify-between mt-[10px] mb-5">
                          <img className="img-lazyload icon-visa w-[38px]" data-src="" alt="" src="https://www.pnj.com.vn/design/themes/pnjrovski/media/images/payments/visa.svg"/>
                          <img className="img-lazyload icon-master w-[38px]" data-src="" alt=""  src="https://www.pnj.com.vn/design/themes/pnjrovski/media/images/payments/mastercard.svg"/>           
                          <img className="img-lazyload icon-visa w-[38px]" data-src="" alt="" src="https://www.pnj.com.vn/design/themes/pnjrovski/media/images/payments/jcb.svg"/>
                          <img className="img-lazyload icon-visa w-[38px]" data-src="" alt="" src="https://www.pnj.com.vn/design/themes/pnjrovski/media/images/payments/thanhtoantienmat.svg"/>
                          <img className="img-lazyload icon-visa w-[38px]" data-src="" alt="" src="https://www.pnj.com.vn/design/themes/pnjrovski/media/images/payments/internetBanking.svg"/>
                          <img className="img-lazyload icon-visa w-[38px]" data-src="" alt="" src="https://www.pnj.com.vn/design/themes/pnjrovski/media/images/payments/tragop.svg"/>
                      </div>
               </div>
    
      <div className="w-[280px]  xl:ml-0 ml-2 ">
                      <p className="text-[14px] text-[#282828] font-bold mb-[5px] ">CHỨNG NHẬN</p>
                       <img className="w-[115px] h-[37.7px] mt-[5px]" src="https://cdn.pnj.io/images/image-update/op-da-thong-bao-bo-cong-thuong-183x60.png"/>
      </div>
              </div>
          </div>
          </div>
     </div>
      
   );
}

export default Footer;
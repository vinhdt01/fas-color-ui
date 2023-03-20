import { useState } from "react";
import cn from 'classnames'


const FaqProduct:React.FC = () => {
    const [show , setShow] = useState(false)
    return (
        <div className={cn("w-[100%]  cursor-pointer rounded-lg shadow-navigation mb-4" , {'bg-[#f2f2f2]' : show})}>
           <div className={cn("flex  p-4 justify-between text-[18px] text-[#4c4c4c]" ,  {'font-bold': show})} onClick={() => setShow(!show)}><h1 >Câu hỏi thường gặp</h1>
           <img className={show && 'rotate-180'} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC43MDciIGhlaWdodD0iMTAuNzA3IiB2aWV3Qm94PSIwIDAgMjAuNzA3IDEwLjcwNyI+CiAgPGcgaWQ9Ikdyb3VwXzEyMyIgZGF0YS1uYW1lPSJHcm91cCAxMjMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMzU0IDAuMzU0KSI+CiAgICA8bGluZSBpZD0iTGluZV8zNyIgZGF0YS1uYW1lPSJMaW5lIDM3IiB4Mj0iMTAiIHkyPSIxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUpIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDM0NjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIwLjUiLz4KICAgIDxsaW5lIGlkPSJMaW5lXzM4IiBkYXRhLW5hbWU9IkxpbmUgMzgiIHkxPSIxMCIgeDI9IjEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAzNDY4IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMC41Ii8+CiAgPC9nPgo8L3N2Zz4K" alt="" />
           </div>
          { show && <div className="border-solid border-t-[1px] border-[#202e65] mx-2 py-2 ">
               <div className="text-[#000000] text-[14px]">
               <p className="text-[15px] text-[#003468]">Mua Online có ưu đãi gì đặc biệt cho tôi?</p>
<p>PNJ mang đến nhiều trải nghiệm mua sắm hiện đại khi mua Online:</p>
<p>- Ưu đãi độc quyền Online với hình thức thanh toán đa dạng.</p>
<p>- Đặt giữ hàng Online, nhận tại cửa hàng.</p>
<p>- Miễn phí giao hàng từ 1-7 ngày trên toàn quốc và giao hàng trong 3 giờ tại một số khu vực trung tâm với các sản phẩm có gắn nhãn .</p>
<p>- Trả góp 0% lãi suất với đơn hàng từ 3 triệu.</p>
<p>- Làm sạch trang sức trọn đời, khắc tên miễn phí theo yêu cầu (tùy kết cấu sản phẩm) và chính sách bảo hành, đổi trả dễ dàng tại hệ thống PNJ trên toàn quốc.</p>
<p>PNJ hân hạnh phục vụ quý khách qua Hotline 1800 5454 57 (08:00-21:00, miễn phí cuộc gọi).</p>

<p className="text-[15px] text-[#003468]">PNJ có thu mua lại trang sức không?</p>
<p>PNJ có dịch vụ thu đổi trang sức PNJ tại hệ thống cửa hàng trên toàn quốc. Chi tiết xem tại: https://www.pnj.com.vn/chinh-sach-bao-hanh-va-thu-doi.html</p>

<p className="text-[15px] text-[#003468]">Nếu đặt mua Online mà sản phẩm không đeo vừa thì có được đổi không?</p>
<p>PNJ có chính sách thu đổi trang sức vàng trong vòng 48 giờ, đổi ni/ size trang sức bạc trong vòng 72 giờ. Quý khách sẽ được áp dụng đổi trên hệ thống PNJ toàn quốc.</p>

<p className="text-[15px] text-[#003468]">Sản phẩm đeo lâu có xỉn màu không, bảo hành như thế nào?</p>
<p>Do tính chất hóa học, sản phẩm có khả năng oxy hóa, xuống màu. PNJ có chính sách bảo hành miễn phí về lỗi kỹ thuật, nước xi:</p>

<p>- Trang sức vàng: 6 tháng.</p>

<p>- Trang sức bạc: 3 tháng.</p>

<p>Ngoài ra, PNJ cũng cung cấp dịch vụ siêu âm làm sạch bằng máy chuyên dụng (siêu âm, không xi) miễn phí trọn đời tại hệ thống cửa hàng.</p>

<p className="text-[15px] text-[#003468]"   >Tôi muốn xem trực tiếp, cửa hàng nào còn hàng?</p>
<p>Với hệ thống cửa hàng trải rộng khắp toàn quốc, quý khách vui lòng liên hệ Hotline 1800 5454 57 (08:00-21:00, miễn phí cuộc gọi) để kiểm tra cửa hàng còn hàng và tư vấn chương trình khuyến mãi Online trước khi đến cửa hàng.</p>
               </div>
               <div className="mt-2  py-[7px]">
               <a href="https://www.pnj.com.vn/cau-hoi-thuong-gap.html" className="px-[14px] py-[7px] bg-[#003468] text-[#ffffff] sm:text-[16px] text-[12px] rounded-md  my-2 mr-4">Câu hỏi khác</a>
               <a href="tel:1800545457" className="px-[14px] py-[7px] bg-[#003468] text-[#ffffff] sm:text-[16px] text-[12px] rounded-md  my-2" href="tel:1800545457">Hotline: 1800 54 54 57 <i>(Miễn phí)</i></a>

               </div>
           </div>}
        </div>

    )
}
export default FaqProduct;
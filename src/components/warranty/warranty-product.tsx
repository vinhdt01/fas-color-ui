import { useState } from "react";

import cn from 'classnames'

const WarrantyProduct : React.FC = () => {
    const [show , setShow] = useState(false)

    return (
        <div className={cn("w-[100%]  cursor-pointer rounded-lg shadow-navigation mb-4" , {'bg-[#f2f2f2]' : show})}>
           <div className={cn("flex  p-4 justify-between text-[18px] text-[#4c4c4c]" ,  {'font-bold': show})} onClick={() => setShow(!show)}><h1 >Dịch vụ sau mua</h1>
           <img className={show && 'rotate-180'} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC43MDciIGhlaWdodD0iMTAuNzA3IiB2aWV3Qm94PSIwIDAgMjAuNzA3IDEwLjcwNyI+CiAgPGcgaWQ9Ikdyb3VwXzEyMyIgZGF0YS1uYW1lPSJHcm91cCAxMjMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMzU0IDAuMzU0KSI+CiAgICA8bGluZSBpZD0iTGluZV8zNyIgZGF0YS1uYW1lPSJMaW5lIDM3IiB4Mj0iMTAiIHkyPSIxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUpIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDM0NjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIwLjUiLz4KICAgIDxsaW5lIGlkPSJMaW5lXzM4IiBkYXRhLW5hbWU9IkxpbmUgMzgiIHkxPSIxMCIgeDI9IjEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAzNDY4IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMC41Ii8+CiAgPC9nPgo8L3N2Zz4K" alt="" />
           </div>
          { show && <div className="border-solid border-t-[1px] border-[#202e65] mx-2 py-2 ">
            <div className="text-[14px] text-[#000000]">

<p className="text-[15px] text-[#003468]">Bảo hành miễn phí 6 tháng</p>
<p>Bảo hành 6 tháng lỗi kỹ thuật, nước xi.</p>
<p className="text-[15px] text-[#003468]">Miễn phí siêu âm và đánh bóng bằng máy chuyên dụng trọn đời</p>
<p>Đối với sản phẩm bị oxy hóa, xuống màu, sẽ được siêu âm làm sạch bằng máy chuyên dụng (siêu âm, không xi) miễn phí trọn đời tại cửa hàng.​</p>
<p>Miễn phí đánh bóng trọn đời . Nhẫn cưới sẽ được bảo hành, làm mới, đánh bóng, xi miễn phí trọn đời.​</p>
<p className="text-[15px] text-[#003468]">Miễn phí thay đá CZ và đá tổng hợp</p>
<p>Miễn phí thay đá CZ và đá tổng hợp trong suốt thời gian bảo hành.​​</p>
<p>* Không áp dụng bảo hành cho các trường hợp sau:​</p>
<p>- Dây chuyền, lắc chế tác bị đứt gãy; bị biến dạng hoặc hư hỏng nặng.​​​​​</p>
<p>- Khách hàng cung cấp thông tin truy lục hóa đơn không chính xác.​​​​​</p>
<p>Lưu ý:</p>
<i>PNJ bảo hành các sản phẩm thuộc hệ thống cửa hàng kênh lẻ và online của PNJ. ​​</i>
<i>Chế độ bảo hành sản phẩm có thể thay đổi theo chính sách của PNJ đối với các dòng hàng và chương trình khuyến mãi vào từng thời điểm.​</i>
            </div>
           </div>}
        </div>
    )
}
export default WarrantyProduct
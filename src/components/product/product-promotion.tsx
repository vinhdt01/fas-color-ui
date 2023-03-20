import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const ProductPromotion:React.FC = () => {
    return (
        <div className="w-full h-auto  my-6 rounded-lg border border-[#204d7b]">
           <div className="bg-[#f2f2f2] rounded-tr-lg rounded-tl-lg "><p className="px-[10px]">Ưu đãi:</p></div>
           <div className="font-normal text-[14px] py-[8px] px-[10px]">
               <div className="flex items-start"><FontAwesomeIcon className="w-[11px] h-[11px] mt-1 mr-1 text-[#204d7b]"  icon={faCircleCheck}/>Giảm ngay 150k khi mua hóa đơn từ 2 triệu - 5 triệu. Xem chi tiết</div>
               <div className="flex items-start"><FontAwesomeIcon className="w-[11px] h-[11px] mt-1 mr-1 text-[#204d7b]"  icon={faCircleCheck}/>Nhập mã CHAO2023 giảm đến 250k khi thanh toán VNPAY-QR</div>
               <div className="flex items-start"><FontAwesomeIcon className="w-[11px] h-[11px] mt-1 mr-1 text-[#204d7b]"  icon={faCircleCheck}/>Giảm 100K với đơn từ 5 triệu khi thanh toán qua PAYOO</div>
               <div className="flex items-start"><FontAwesomeIcon className="w-[11px] h-[11px] mt-1 mr-1 text-[#204d7b]"  icon={faCircleCheck}/>Giảm đến 600K khi thanh toán qua HSBC</div>

           </div>
        </div>
    )
}
export default ProductPromotion;
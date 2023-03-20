import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const ProductConsultation:React.FC = () => {
    return (
        <div className="text-[14px] font-normal text-[#4C4C4C]">
           <div className=" my-[10px]">
                <p className="text-center leading-[30px]">Tư vấn ngay: <span className="text-[#ad2a36] font-bold text-[16px]">1800-545457</span> (miễn phí)</p>
                <div className="flex justify-center leading-[30px]">
                    <p>Hoặc qua </p>
                    <img className="w-[30px] h-[30px] mx-[4px]" src="https://cdn.pnj.io/images/image-update/2021/hotline/icon-zalo.svg"/>
                    <img className="w-[30px] h-[30px]" src="https://cdn.pnj.io/images/image-update/2021/hotline/icon-facebook.svg"/>
                </div>
           </div>
          <div >
                <p className="flex items-center mb-0"><FontAwesomeIcon className="w-[11px] h-[11px] mr-1 text-[#204d7b]"  icon={faCircleCheck}/>Giá sản phẩm thay đổi tuỳ vào size</p>
                <p className="flex items-center mb-0"><FontAwesomeIcon className="w-[11px] h-[11px] mr-1 text-[#204d7b]"  icon={faCircleCheck}/>Miễn phí giao nhanh Toàn Quốc khi mua hóa đơn 350.000 đ</p>
          </div>
        </div>
    )
}
export default ProductConsultation;
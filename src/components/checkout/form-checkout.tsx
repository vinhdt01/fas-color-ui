import { useForm } from "react-hook-form";
import axios from 'axios';
import { useState , useEffect} from 'react'
import cn from 'classnames'
import { useCart } from '@store/quick-cart/cart.context';
import orderPost from '@framework/checkout/http.orders'
type FormValues = {
  gender:string;
  name: string;
  phone: string;
  email: string;
  birthday: string;
  province:string; 
  district:string;

  ward:string;

  address:string;
  shop:string;
  note:string;
  bill:boolean;
  promotion:boolean

};

const FormCheckout:React.FC = ({data}:any) => {
  // const [province , setProvince] = useState(data.data.data)
  const [methodDelivery , setMethodDelivery] = useState<string>('at-home')
  const [province , setProvince] = useState()
  const [district , setDistrict] = useState()
  const [specialdistrict , setSpecialdistrict] = useState()

  const [ward , setWard] = useState()
  const { items } = useCart();
// console.log(items)
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = data => 
  {
    data = {
      ...data , items:JSON.stringify(items)
    }
    orderPost(data)
    console.log(data)
  };

  useEffect(() => {
    if(province == undefined) {
    return;
    }
    else {
      axios.get(`https://vn-public-apis.fpo.vn/districts/getByProvince?provinceCode=${province}&limit=-1`)
      .then((datas) =>  {
        setDistrict(datas.data.data.data)
                 }
      )
    }
  }, [province])
  useEffect(() => {
    if(specialdistrict == undefined) {
    return;
    }
    else {
      axios.get(`https://vn-public-apis.fpo.vn/wards/getByDistrict?districtCode=${specialdistrict}&limit=-1`)
      .then((datas) =>  {
        setWard(datas.data.data.data)
            }
      )
    }
  }, [specialdistrict])
  const handleChangeProvince = (e:any) => {
    setProvince(e.target.value)
  }
  const handleChangeDistrict = (e:any) => {
    console.log(e.target.value)
    setSpecialdistrict(e.target.value)
  }
     return (
        <>
        <form className="px-[8px]" onSubmit={handleSubmit(onSubmit)}> 
        <p className="text-[16px] text-[#003468]">Thông Tin Khách Hàng</p>
          <div className="mt-3 mb-2">
            <label className="mr-2" htmlFor="male">Nam</label>
            <input  {...register("gender", {required:true})} className="mr-2" type="radio" name="gender" value={1} id="male"/>
            <label className="mr-2" htmlFor="female">Nữ</label>
            <input {...register("gender" , {required:true})} className="mr-2" type="radio" name="gender" value={0} id="female"/>
          </div>
          <div className="grid grid-cols-2 gap-2">
                    <input {...register("name" , {required:true})  } type="text" className="border-solid border-[1px] border-indigo-600 flex-1  h-[40px] mb-2 px-2 rounded-lg" placeholder="Họ tên (bắt buộc)"/>
                    <input {...register("phone" , {required:true}) } type="text" className="border-solid border-[1px] border-indigo-600 flex-1  h-[40px] mb-2 px-2 rounded-lg" placeholder="SĐT (bắt buộc)"/>

                </div>
                <div className="grid grid-cols-2 gap-2">
                    <input {...register("email" , {required:true})} type="text" className="border-solid border-[1px] border-indigo-600 flex-1  h-[40px] mb-2 px-2 rounded-lg" placeholder="Email (bắt buộc)"  {...register("email")}/>
                    <input {...register("birthday"  , {required:true})} type="date" className=" border-solid border-[1px] border-indigo-600 flex-1  h-[40px] mb-2 px-2 rounded-lg" placeholder="Ngày sinh (dd/mm/yyyy)"/>

                </div>
          <div >
            <p className="mt-2 text-[16px]  text-[#003468]">Chọn Hình Thức Nhận Hàng</p>
            <div className="flex justify-between   mt-3 mb-2 text-[14px]">
              <div onClick={() => setMethodDelivery('at-home')} className={cn('flex-1 mx-1 text-center h-[59px] py-[15px] rounded-tl-lg rounded-tr-lg   leading-none cursor-pointer' , {'bg-[#003468] text-[#fff]' : methodDelivery=='at-home' , 'bg-[#cecece] ' : methodDelivery!='at-home' })}>
                <p>Giao hàng tận nơi</p>
                <i className="text-[11px]">(Miễn phí giao hàng toàn quốc)</i>
              </div>
              <div onClick={() => setMethodDelivery('at-shop')}  className={cn("flex-1 mx-1 text-center h-[59px] py-[15px] rounded-tl-lg rounded-tr-lg  leading-none cursor-pointer" , {'bg-[#003468] text-[#fff]' : methodDelivery=='at-shop' , 'bg-[#cecece] ' : methodDelivery!='at-shop'})}>
                <p>Nhận tại cữa hàng</p>
              <i className="text-[11px]">Giữ hàng trước - Nhận hàng ngay</i>
              </div>

            </div>
            <div>

              {methodDelivery === 'at-home' ? (
<>
<div className="grid grid-cols-2 gap-2">
                    {/* <input type="text" className="border-solid border-[1px] border-indigo-600 flex-1  h-[40px] mb-2 px-2 rounded-lg" placeholder="Chọn Tỉnh/TP(*)-"/> */}
                    <select  {...register('province' , {required:true}) }  onChange={handleChangeProvince}  className="border-solid border-[1px] border-indigo-600 flex-1  h-[40px] mb-2 px-2 rounded-lg" id="cars" >
                      {data?.data?.data.map((value , index) => (
    <option  value={value.code}>{value.name}</option>

                      ))}  
  </select>
                    {/* <input type="text" className="border-solid border-[1px] border-indigo-600 flex-1  h-[40px] mb-2 px-2 rounded-lg" placeholder="Chọn Quận/Huyện(*)-"/> */}
                    <select {...register("district" , {required:true}) } onChange={handleChangeDistrict}  className="border-solid border-[1px] border-indigo-600 flex-1  h-[40px] mb-2 px-2 rounded-lg" id="cars" >
                    {district ? (
                   
                   district.map((value , index) => (
                    <option   value={value.code}>{value.name}</option>
                   ))
                    ) : (                      <option value="nothing">Chọn quận huyện</option>
                    )}
    
  </select>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    {/* <input type="text" className="border-solid border-[1px] border-indigo-600 flex-1  h-[40px] mb-2 px-2 rounded-lg" placeholder="Chọn Phường/Xã(*)-"/> */}
                    <select  {...register("ward" , {required:true}) }   className="border-solid border-[1px] border-indigo-600 flex-1  h-[40px] mb-2 px-2 rounded-lg" >
                    {ward ? (
                   ward.map((value , index) => (
                    <option value={value.code}>{value.name}</option>
                   ))
                    ) : (                      <option value="nothing">Chọn Phường/Xã</option>
                    )}
    
  </select>
                    <input {...register("address" , {required:true}) } type="text" className=" border-solid border-[1px] border-indigo-600 flex-1  h-[40px] mb-2 px-2 rounded-lg" placeholder="Nhập Địa chỉ khách hàng *"/>

                </div></>
              )
            : (
              <>
              <div className="grid grid-cols-2 gap-2">
                    <input {...register("province" , {required:true}) } type="text" className="border-solid border-[1px] border-indigo-600 flex-1  h-[40px] mb-2 px-2 rounded-lg" placeholder="-Chọn thành phố/tỉnh-"/>
                    <input {...register("ward" , {required:true}) }  type="text" className=" border-solid border-[1px] border-indigo-600 flex-1  h-[40px] mb-2 px-2 rounded-lg" placeholder="-Chọn quận huyện-"/>

                </div>
                <input {...register("shop" , {required:true}) }  type="text" className="w-full border-solid border-[1px] border-indigo-600  h-[40px] mb-2 px-2 rounded-lg" placeholder="Cữa hàng"/>


              </>
            )
            
            
            }
                <input {...register("note")}  type="text" className="w-full border-solid border-[1px] border-indigo-600  h-[40px] mb-2 px-2 rounded-lg" placeholder="Ghi chú khác"/>
                {methodDelivery === 'at-home' && (   <div className="border-[1px] border-indigo-600 rounded-lg p-2 mb-2"> 
                   <div className="flex justify-between text-[14px] text-[#484848] font-bold">
                   <div>Phương thức vận chuyển</div>
                   <div>Miễn phí giao hàng nhanh</div>
                   </div>
                   <div>Dự kiến nhận hàng: Dự kiến nhận hàng từ 26/01 (mùng 5).</div>
                </div>)}
            </div>

          </div>
          <div className="mb-3 ">
              <div><input {...register("bill") } type="checkbox" className="mr-2"/>
            <label className="leading-0">Xuất hóa đơn công ty (không áp dụng phiếu quà tặng điện tử)</label></div>
            <div><input {...register("promotion") } type="checkbox"className="mr-2" />
            <label className="leading-0">Đồng ý nhận các thông tin và chương trình khuyến mãi của PNJ qua email, SMS , mạng xã hội…</label></div>
          </div>
       <div className=" text-center text-[14px]">
            {/* <div className="h-[40px] w-[340px] leading-[40px] text-[#fff] rounded-lg bg-[#003468] m-auto cursor-pointer">Đặt hàng</div> */}
            <input className="-[40px] w-[340px] leading-[40px] text-[#fff] rounded-lg bg-[#003468] m-auto cursor-pointer" type="submit" />
            <p className="text-[#002D5C]">(Bạn có thể chọn hình thức thanh toán sau khi đặt hàng)</p>
       </div>
        </form>
        
      </>
    )
  
}

export default FormCheckout;

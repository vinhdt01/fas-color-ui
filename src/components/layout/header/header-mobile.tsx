import Link from 'next/link'
import NewCartButton from '@components/cart/new-cart-button';
interface Props {
    openSearch?: any
  }
const HeaderMobile:React.FC<Props> = ({openSearch}) => {
    return (
        <div className="xl:hidden flex justify-between items-center px-1  h-[50px] overflow-hidden">
			<Link href="/"><img className="w-[71px] h-[30.8px] cursor-pointer" src="/assets/images/LogoFas.png" alt="PNJ Logo"/></Link>
            <div onClick={openSearch} className=" relative mx-8 flex-1">
			{/* <input className="w-[100%] h-[28px] flex-1  rounded-2xl pl-2 pr-7 outline-none border-[1px] border-slate-100 bg-[#ededed] placeholder:text-[13px]" type="text" placeholder="Tìm kiếm nhanh"/> */}
				<button
							className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform w-[100%]"
							
							aria-label="search-button"
						>
									{/* <input className="w-[100%] h-[28px] flex-1  rounded-2xl pl-2 pr-7 outline-none border-[1px] border-slate-100 bg-[#ededed] placeholder:text-[13px]" type="text" placeholder="Tìm kiếm nhanh"/> */}
									<div className="w-[100%] h-[28px] flex-1  rounded-2xl pl-2 pr-7  border-[1px] border-slate-100 bg-[#ededed] ">Tìm kiếm nhanh</div>

						</button>
			<img
              className=" absolute top-[6px] right-3 bg-[#ededed]"
              src="https://cdn.pnj.io/images/image-update/layout/mobile/find-icon.svg"
              alt="Tìm kiếm nhanh"
            />
			</div>
			<div className='mr-2'>
				{/* <img src="https://cdn.pnj.io/images/image-update/layout/mobile/icon-shoppingcart.svg"/>
				<div className="absolute text-center w-[12px] h-[12px] text-[10px] top-8 right-1 rounded-lg px-[1.5px] py-0 bg-red-600 text-[#fff]">
					0
				</div> */}
                <NewCartButton/>
			</div>

		  </div>
    )
}
export default HeaderMobile;
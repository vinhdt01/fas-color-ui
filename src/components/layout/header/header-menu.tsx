
// import React from 'react';
// import Tippy from '@tippyjs/react/headless'

// import 'tippy.js/dist/tippy.css';
// import { useUI } from "@contexts/ui.context";
// import { jewelry1  , jewelry2 , jewelry3 , jewelry4 , jewelry5} from "@data/static/testmenu";


// const showSubMenu = (x) => {

 
// 	return (
  
// 		<div className="">
// 			<div className="w-[1200px] h-[400px] px-[45px] py-[25px] bg-red-600 flex justify-between">
			  
//       {x.map((data , index) => (
//          <ul >
//           {data.sub.map(result => (
//             <li>{result.name}</li>
//           ))}
//        </ul>
//       ) )}
//    {/* {jewelry.map((data , index) => {
//       data.sub.map((result , count) => (
//          <ul>
//               <li>{result.name}</li>
//          </ul>
//       ))
//    })} */}
// 			</div>
// 		</div>
// 	)
// }
// const HeaderMenu: React.FC = () => {
//   const {
		
// 		openSearch
	
// 	} = useUI();

//   return (
//     <div className="bg-[#fff] text-[#000000] my-[5px] w-[100%]">
//       <div className="flex justify-center max-w-[1200px] m-auto">
//         <div className="flex justify-between items-center w-[1200px] h-[40px]">
//           <div className="cursor-pointer">
// 		 {/* <Tippy
//     placement='auto-start'
//      interactive
// 		  render={attrs => (
// 			showSubMenu(jewelry1)
// 		  )}
		 
// 		 >
// 		 	 <a
// 	              className="group pr-11 text-[#000000] hover:text-[#e3c9aa] transition-all duration-300 ease-in-out"
// 	              href="#"
// 	            >
// 	              <span className="bg-left-bottom bg-gradient-to-r from-orange to-orange bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
// 	                Trang Sức
// 	              </span>
// 	            </a>
// 		 </Tippy>
	
//              <Tippy
//     placement='right-end'
//     interactive
// 		  render={attrs => (
// 			showSubMenu(jewelry2)
// 		  )}
		 
// 		 >
// 		 	 <a
// 	              className="group pr-11 text-[#000000] hover:text-[#e3c9aa] transition-all duration-300 ease-in-out"
// 	              href="#"
// 	            >
// 	              <span className="bg-left-bottom bg-gradient-to-r from-orange to-orange bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
// 	                Trang Sức Cưới
// 	              </span>
// 	            </a>
// 		 </Tippy>
     
//      <Tippy
//      interactive
// 		  render={attrs => (
// 			showSubMenu(jewelry3)
// 		  )}
		 
// 		 >
//       <a
//               className="group pr-11 text-[#000000] hover:text-[#e3c9aa] transition-all duration-300 ease-in-out"
//               href="#"
//             >
//               <span className="bg-left-bottom bg-gradient-to-r from-orange to-orange bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
//                 Đồng Hồ
//               </span>
//             </a>
//       </Tippy>
			
//       <Tippy
//      interactive
// 		  render={attrs => (
// 			showSubMenu(jewelry4)
// 		  )}
		 
// 		 >
// 			<a
//               className="group pr-11 text-[#000000] hover:text-[#e3c9aa] transition-all duration-300 ease-in-out"
//               href="#"
//             >
//               <span className="bg-left-bottom bg-gradient-to-r from-orange to-orange bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
//                 Quà Tặng
//               </span>
//             </a>
// </Tippy>
// <Tippy
//      interactive
// 		  render={attrs => (
// 			showSubMenu(jewelry5)
// 		  )}
		 
// 		 >
// 			<a
//               className="group pr-11 text-[#000000] hover:text-[#e3c9aa] transition-all duration-300 ease-in-out"
//               href="#"
//             >
//               <span className="bg-left-bottom bg-gradient-to-r from-orange to-orange bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
//                 Thương Hiệu
//               </span>
//             </a>
//             </Tippy> */}
// 			<a      onMouseOver={() => console.log('123')}
//               className="group pr-11 text-[#000000] hover:text-[#e3c9aa] transition-all duration-300 ease-in-out"
//               href="#"
//             >
//               <span className="bg-left-bottom bg-gradient-to-r from-orange to-orange	 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
//                 Blog
//               </span>
//             </a>

//             <a
//               className="group pr-11 text-pink-500 transition-all duration-300 ease-in-out"
//               href="#"
//             >
//               <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
//                 Khuyến Mãi
//               </span>
//             </a>
//           </div>
//           <div className="w-[350px]   items-center relative">
         
//                 {/* <input
//                   className=" border-solid border-2  h-[35px] bg-[#ededed] rounded-[100px] w-[100%] pl-[10px] placeholder:italic outline-none "
//                   type="text"
//                   placeholder="Tìm kiếm nhanh"
//                 />
//                 <img
//                   className=" absolute top-[9px] right-2 bg-[#ededed]"
//                   src="https://cdn.pnj.io/images/image-update/layout/mobile/find-icon.svg"
//                   alt="Tìm kiếm nhanh"
//                 /> */}
//              <Tippy
//              trigger="click"
//             placement= 'bottom-end'
//     render={attrs => (
//       <div>Not Found</div>
//     )}
//   >
//      <div>
//          <input     onClick={openSearch}
//                     className=" border-solid border-2  h-[35px] bg-[#ededed] rounded-[100px] w-[100%] pl-[10px] placeholder:italic outline-none "
//                     type="text"
//                     placeholder="Tìm kiếm nhanh"
//                   />
//                    <img
//                     className=" absolute top-[9px] right-2 bg-[#ededed]"
//                     src="https://cdn.pnj.io/images/image-update/layout/mobile/find-icon.svg"
//                     alt="Tìm kiếm nhanh"
//                   />
//      </div>
//   </Tippy>
 
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default HeaderMenu;

import Link from "@components/ui/link";
import { FaChevronDown } from "@react-icons/all-files/fa/FaChevronDown";
import MegaMenu from "@components/ui/mega-menu";
import classNames from "classnames";
import ListMenu from "@components/ui/list-menu";
import { useTranslation } from "next-i18next";
import React from "react";
import { useUI } from "@contexts/ui.context";
interface MenuProps {
	data: any;
	className?: string;
}

const HeaderMenu: React.FC<MenuProps> = ({ data, className }) => {
    const {
		
		openSearch 
	
	} = useUI();
	const { t } = useTranslation("menu");
	return (
		<nav className={classNames(`headerMenu flex justify-between w-[1200px] relative`, className)}>
			{data?.map((item: any) => (
				<div
					className={`menuItem group cursor-pointer py-2 ${
						item.subMenu ? "relative" : ""
					}`}
					key={item.id}
				>

{/* <a
              className="group pr-11 text-pink-500 transition-all duration-300 ease-in-out"
              href="#"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Khuyến Mãi
              </span>
            </a> */}
					<Link
						href={item.path}
						className="inline-flex items-center text-sm xl:text-base text-heading py-2 font-normal relative group-hover:text-black"
					>
						{t(item.label)}
						{(item?.columns || item.subMenu) && (
							<span className="opacity-30 text-xs mt-1 xl:mt-0.5 w-4 flex justify-end">
								<FaChevronDown className="transition duration-300 ease-in-out transform group-hover:-rotate-180" />
							</span>
						)}
					</Link>

					{item?.columns && Array.isArray(item.columns) && (
						<MegaMenu columns={item.columns} />
					)}

					{item?.subMenu && Array.isArray(item.subMenu) && (
						<div className="subMenu shadow-header bg-gray-200 absolute ltr:left-0 rtl:right-0 opacity-0 group-hover:opacity-100">
							<ul className="text-body text-sm py-2">
								{item.subMenu.map((menu: any, index: number) => {
									const dept: number = 1;
									const menuName: string = `sidebar-menu-${dept}-${index}`;

									return (
										<ListMenu
											dept={dept}
											data={menu}
											hasSubMenu={menu.subMenu}
											menuName={menuName}
											key={menuName}
											menuIndex={index}
										/>
									);
								})}
							</ul>
						</div>
					)}
				</div>
			))}
      <div className="relative h-[35px] py-[8px] w-[360px]"   onClick={openSearch}>
    {/* <input   
               className=" border-solid border-2  h-[35px] bg-[#ededed] rounded-[100px] w-[100%] pl-[10px] placeholder:italic outline-none "
               type="text"
               placeholder="Tìm kiếm nhanh"
             /> */}
			 	<div className="border-solid border-2  h-[35px] bg-[#ededed] italic rounded-[100px] w-[100%] pl-[10px] leading-[35px]">Tìm kiếm nhanh</div>

              <img
               className=" absolute top-[18px] right-4 bg-[#ededed]"
               src="https://cdn.pnj.io/images/image-update/layout/mobile/find-icon.svg"
               alt="Tìm kiếm nhanh"
             />

</div>
		</nav>
	);
};

export default HeaderMenu;
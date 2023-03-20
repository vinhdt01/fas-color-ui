import React, { useRef, useEffect } from "react";
import Link from "next/link";
import cn from "classnames";
import SearchResultLoader from "@components/ui/loaders/search-result-loader";
import { Image } from "@components/ui/image";
import { useUI } from "@contexts/ui.context";
import SearchBox from "@components/common/search-box";
import { useProductsInfiniteQuery } from "@framework/products/products.query";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import Scrollbar from "@components/common/scrollbar";
import SearchProduct from "@components/common/search-product";
import { useTranslation } from "next-i18next";
import noResult from "@assets/not-found.svg";
import { ROUTES } from "@lib/routes";
import { useRouter } from "next/router";
import Button from "@components/ui/button";

export default function Search() {
  const router = useRouter();
  const { t } = useTranslation("common");
  const { displaySearch, closeSearch } = useUI();
  const [searchText, setSearchText] = React.useState("");
  // const [data, setData] = React.useState("");
  // const [loading, setLoading] = React.useState("");

  // const { data, isLoading: loading } = useProductsInfiniteQuery({
  //   text: searchText,
  //   limit: 4
  // });
  // ADD FAKE DATA
  const data = null;
  const loading = null;
  function handleSearch(e: React.SyntheticEvent) {
    e.preventDefault();
  }
  function handleAutoSearch(e: React.FormEvent<HTMLInputElement>) {
    const searchValue = e.currentTarget.value;

    if (!searchValue.startsWith(" ")) setSearchText(searchValue);
  }

  function clear() {
    if (searchText) {
      setSearchText("");
    } else {
      setSearchText("");
      closeSearch();
    }
  }

  function handleOnLoadMore() {
    // Clear Search
    setSearchText("");
    closeSearch();

    // Redirect to search page
    router.push(`${ROUTES.SEARCH}?q=${searchText}`);
  }

  const ref = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   if (ref.current) {
  //     if (displaySearch) {
  //       disableBodyScroll(ref.current);
  //     } else {
  //       enableBodyScroll(ref.current);
  //     }
  //   }
  //   return () => {
  //     clearAllBodyScrollLocks();
  //   };
  // }, [displaySearch]);

  return (
    <div ref={ref}>
      <div
        className={cn("overlay", {
          open: displaySearch,
        })}
        role="button"
        onClick={closeSearch}
      />
      <div
        className={cn(
          "drawer-search relative hidden top-0 z-30 opacity-0 invisible transition duration-300 ease-in-out left-1/2 px-4 w-full md:w-[730px] lg:w-[930px]",
          {
            open: displaySearch,
          }
        )}
      >
        <div className="w-full flex flex-col justify-center">
          <div className="flex-shrink-0 mt-3.5 lg:mt-4 w-full">
            <div className="flex flex-col mx-auto mb-1.5 w-full ">
              <SearchBox
                onSubmit={handleSearch}
                onChange={handleAutoSearch}
                name="search"
                value={searchText}
                onClear={clear}
                ref={(input) => input && input.focus()}
              />
            </div>
            {searchText && (
              <div className="bg-white flex flex-col rounded-md overflow-hidden h-full max-h-64vh">
                <Scrollbar className="os-host-flexbox">
                  <div className="h-full">
                    {loading ? (
                      Array.from({ length: 4 }).map((_, idx) => (
                        <div
                          className="p-4 md:p-5 border-b order-gray-150 last:border-b-0"
                          key={idx}
                        >
                          <SearchResultLoader uniqueKey={`top-search-${idx}`} />
                        </div>
                      ))
                    ) : data?.pages[0]?.data.length ? (
                      <>
                        {data?.pages[0]?.data.map((item, index) => (
                          <div
                            className="p-4 md:p-5 border-b border-gray-150 relative last:border-b-0"
                            onClick={closeSearch}
                            key={item?.id}
                          >
                            <SearchProduct item={item} key={index} />
                          </div>
                        ))}
                        {data?.pages?.[0]?.paginatorInfo?.total > 4 && (
                          <div className="w-full overflow-hidden border-t border-gray-150">
                            {/*<Link*/}
                            {/*  href={`${ROUTES.SEARCH}?q=${searchText}`}*/}
                            {/*  className="w-full block text-sm md:text-base text-center px-4 py-3 lg:py-3.5 bg-gray-200 text-heading text-opacity-80 transition hover:text-opacity-100"*/}
                            {/*>*/}
                            {/*  {t("text-load-more-products")}*/}
                            {/*</Link>*/}
                            <Button
                              variant="custom"
                              onClick={handleOnLoadMore}
                              className="w-full block text-sm md:text-base text-center px-4 py-3 lg:py-3.5 bg-gray-200 text-heading text-opacity-80 transition hover:text-opacity-100"
                            >
                              {t("text-load-more-products")}
                            </Button>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="w-full h-full px-5 md:px-10 mb-4 md:pb-6 pt-8 md:pt-12 flex items-center justify-center">
                        <div className=" flex items-center justify-center max-w-[520px]">
                          <Image
                            src={noResult}
                            alt={t("text-no-result-found")}
                            className="object-contain"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </Scrollbar>
              </div>
            ) 
            // : (
            //   <div className="w-full bg-[#fff] rounded-lg  p-4 ">
            //     <div className="   ">
            //       <div className="my-4">
            //         <div className="flex">
            //           <img
            //             className="mr-1"
            //             src="https://cdn.pnj.io/images/image-update/layout/mobile/mui_ten.svg"
            //             alt="Top tìm kiếm"
            //           />
            //           <span className="ml-2 text-[12px] text-[#003468]">
            //             Top tìm kiếm
            //           </span>
            //         </div>
            //         <div className="flex text-center w-full mt-2 text-[11px] flex-wrap">
            //           <a
            //             href="#"
            //             className="mr-2 mb-2  px-2 bg-[#f1f1f1] rounded-lg h-[16px] "
            //           >
            //             Nhẫn kim tiền
            //           </a>
            //           <a
            //             href="#"
            //             className="mr-2 mb-2  px-2 bg-[#f1f1f1] rounded-lg h-[16px] "
            //           >
            //             Nhẫn cưới
            //           </a>
            //           <a
            //             href="#"
            //             className="mr-2 mb-2  px-2 bg-[#f1f1f1] rounded-lg h-[16px] "
            //           >
            //             Trang sức phong thủy
            //           </a>
            //           <a
            //             href="#"
            //             className="mr-2 mb-2  px-2 bg-[#f1f1f1] rounded-lg h-[16px] "
            //           >
            //             Nhẫn nam
            //           </a>
            //           <a
            //             href="#"
            //             className="mr-2 mb-2  px-2 bg-[#f1f1f1] rounded-lg h-[16px] "
            //           >
            //             Bông tai
            //           </a>
            //           <a
            //             href="#"
            //             className="mr-2 mb-2  px-2 bg-[#f1f1f1] rounded-lg h-[16px] "
            //           >
            //             Vòng tay
            //           </a>
            //           <a
            //             href="#"
            //             className="mr-2 mb-2  px-2 bg-[#f1f1f1] rounded-lg h-[16px] "
            //           >
            //             Lắc tay
            //           </a>
            //           <a
            //             href="#"
            //             className="mr-2 mb-2  px-2 bg-[#f1f1f1] rounded-lg h-[16px] "
            //           >
            //             Đồng hồ
            //           </a>
            //           <a
            //             href="#"
            //             className="mr-2 mb-2  px-2 bg-[#f1f1f1] rounded-lg h-[16px] "
            //           >
            //             Vàng tài lộc
            //           </a>
            //         </div>
            //       </div>

            //       <div className="my-4">
            //         <div className="flex">
            //           <img
            //             className="img-lazyload"
            //             src="https://cdn.pnj.io/images/image-update/layout/mobile/hot.svg"
            //             alt="Dịch vụ hot"
            //           />
            //           <span className="ml-2 text-[12px] text-[#003468]">
            //             Dịch vụ hot
            //           </span>
            //         </div>
            //         <div className="flex text-center w-full mt-2 text-[11px] flex-wrap">
            //           <a
            //             href="#"
            //             className="mr-2 mb-2  px-2 bg-[#f1f1f1] rounded-lg h-[16px] "
            //           >
            //             Trả góp 0%
            //           </a>
            //           <a
            //             href="#"
            //             className="mr-2 mb-2  px-2 bg-[#f1f1f1] rounded-lg h-[16px] "
            //           >
            //             VNPAY 250K
            //           </a>
            //           <a
            //             href="#"
            //             className="mr-2 mb-2  px-2 bg-[#f1f1f1] rounded-lg h-[16px] "
            //           >
            //             Giao hàng 3h
            //           </a>
            //           <a
            //             href="#"
            //             className="mr-2 mb-2  px-2 bg-[#f1f1f1] rounded-lg h-[16px] "
            //           >
            //             Phiếu quà tặng
            //           </a>
            //           <a
            //             href="#"
            //             className="mr-2 mb-2  px-2 bg-[#f1f1f1] rounded-lg h-[16px] "
            //           >
            //             Freeship
            //           </a>
            //         </div>
            //       </div>

            //       <div className="my-4">
            //         <div className="flex">
            //           <img
            //             className="img-lazyload"
            //             src="https://cdn.pnj.io/images/image-update/searchbar/brand_icon.svg"
            //             alt="Thương hiệu nổi bật"
            //           />
            //           <span className="ml-2 text-[12px] text-[#003468]">
            //             Thương hiệu nổi bật
            //           </span>
            //         </div>
            //         <div className="flex text-center w-full mt-2 text-[11px] flex-wrap">
            //           <a
            //             href="#"
            //             className="mr-2 mb-3  px-2  rounded-lg h-[16px] "
            //           >
            //             <img
            //               className="img-lazyload"
            //               src="https://cdn.pnj.io/images/image-update/searchbar/style.svg"
            //               alt="Style by PNJ"
            //             />
            //           </a>
            //           <a
            //             href="#"
            //             className="mr-2 mb-3  px-2  rounded-lg h-[16px] "
            //           >
            //             <img
            //               className="img-lazyload"
            //               src="https://cdn.pnj.io/images/image-update/searchbar/disney.svg"
            //               alt="Disney PNJ"
            //             />
            //           </a>
            //           <a
            //             href="#"
            //             className="mr-2 mb-3  px-2  rounded-lg h-[16px] "
            //           >
            //             <img
            //               className="img-lazyload"
            //               src="https://cdn.pnj.io/images/image-update/searchbar/watch.svg"
            //               alt="PNJ Watch"
            //             />
            //           </a>
            //           <a
            //             href="#"
            //             className="mr-2 mb-3  px-2  rounded-lg h-[16px] "
            //           >
            //             <img
            //               className="img-lazyload"
            //               src="https://cdn.pnj.io/images/image-update/searchbar/pnj.svg"
            //               alt="PNJ"
            //             />
            //           </a>
            //           <a
            //             href="#"
            //             className="mr-2 mb-3  px-2  rounded-lg h-[16px] "
            //           >
            //             <img
            //               className="img-lazyload"
            //               src="https://cdn.pnj.io/images/image-update/searchbar/silver.svg"
            //               alt="PNJ Silver"
            //             />
            //           </a>
            //         </div>
            //       </div>

            //       <div className="my-4">
            //         <div className="flex">
            //           <img
            //             className="img-lazyload"
            //             src="https://cdn.pnj.io/images/image-update/layout/mobile/tim_kiem.svg"
            //             alt="Sản phẩm được tìm nhiều"
            //           />
            //           <span className="ml-2 text-[12px] text-[#003468]">
            //             Sản phẩm được tìm kiếm nhiều
            //           </span>
            //         </div>
            //         <div className="grid grid-cols-3 gap-4 text-center">
            //           <div className="cursor-pointer">
            //             <div >
            //             <img className="h-[60px] m-auto" src="https://cdn.pnj.io/images/thumbnails/485/485/detailed/149/GMXMXMY005864-Mat-day-chuyen-Vang-18K-PNJ-1.png"/>

            //             </div>
            //             <p className="text-[#4C4C4C] text-[12px]">6.501.000 đ</p>
            //           </div>
                      
            //           <div className="cursor-pointer">
            //             <div >
            //             <img className="h-[60px] m-auto" src="https://cdn.pnj.io/images/thumbnails/485/485/detailed/149/GMXMXMY005864-Mat-day-chuyen-Vang-18K-PNJ-1.png"/>

            //             </div>
            //             <p className="text-[#4C4C4C] text-[12px]">6.501.000 đ</p>
            //           </div>
            //           <div className="cursor-pointer">
            //             <div >
            //             <img className="h-[60px] m-auto" src="https://cdn.pnj.io/images/thumbnails/485/485/detailed/149/GMXMXMY005864-Mat-day-chuyen-Vang-18K-PNJ-1.png"/>

            //             </div>
            //             <p className="text-[#4C4C4C] text-[12px]">6.501.000 đ</p>
            //           </div>

            //           <div className="cursor-pointer">
            //             <div >
            //             <img className="h-[60px] m-auto" src="https://cdn.pnj.io/images/thumbnails/485/485/detailed/149/GMXMXMY005864-Mat-day-chuyen-Vang-18K-PNJ-1.png"/>

            //             </div>
            //             <p className="text-[#4C4C4C] text-[12px]">6.501.000 đ</p>
            //           </div>
                      
            //           <div className="cursor-pointer">
            //             <div >
            //             <img className="h-[60px] m-auto" src="https://cdn.pnj.io/images/thumbnails/485/485/detailed/149/GMXMXMY005864-Mat-day-chuyen-Vang-18K-PNJ-1.png"/>

            //             </div>
            //             <p className="text-[#4C4C4C] text-[12px]">6.501.000 đ</p>
            //           </div>
            //           <div className="cursor-pointer">
            //             <div >
            //             <img className="h-[60px] m-auto" src="https://cdn.pnj.io/images/thumbnails/485/485/detailed/149/GMXMXMY005864-Mat-day-chuyen-Vang-18K-PNJ-1.png"/>

            //             </div>
            //             <p className="text-[#4C4C4C] text-[12px]">6.501.000 đ</p>
            //           </div>
                    
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            // )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

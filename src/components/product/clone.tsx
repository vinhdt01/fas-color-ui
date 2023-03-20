// import React, { useState } from "react";
// import Button from "@components/ui/button";
// import Counter from "@components/common/counter";
// import { getVariations } from "@framework/utils/get-variations";
// import { useCart } from "@store/quick-cart/cart.context";
// import usePrice from "@lib/use-price";
// import { generateCartItem } from "@utils/generate-cart-item";
// import { ProductAttributes } from "./product-attributes";
// import isEmpty from "lodash/isEmpty";
// import Link from "@components/ui/link";
// import Image from "next/image";
// import { toast } from "react-toastify";
// import { useWindowSize } from "@utils/use-window-size";
// import Carousel from "@components/ui/carousel/carousel";
// import { SwiperSlide } from "swiper/react";
// import { Attachment, Product } from "@framework/types";
// import isEqual from "lodash/isEqual";
// import VariationPrice from "@components/product/product-variant-price";
// import { useTranslation } from "next-i18next";
// import isMatch from "lodash/isMatch";
// import { ROUTES } from "@lib/routes";

// const productGalleryCarouselResponsive = {
//   "768": {
//     slidesPerView: 2,
//     spaceBetween: 12,
//   },
//   "0": {
//     slidesPerView: 1,
//   },
// };

// type Props = {
//   product: Product;
// };

// const ProductSingleDetails: React.FC<Props> = ({ product }: any) => {
//   const { t } = useTranslation();
//   const { width } = useWindowSize();
  // const { addItemToCart } = useCart();
//   const [attributes, setAttributes] = useState<{ [key: string]: string }>({});
//   const [quantity, setQuantity] = useState(1);
//   const [addToCartLoader, setAddToCartLoader] = useState<boolean>(false);

//   const { price, basePrice } = usePrice({
//     amount: product?.sale_price ? product?.sale_price : product?.price!,
//     baseAmount: product?.price,
//   });

//   const variations = getVariations(product?.variations!);

//   const isSelected = !isEmpty(variations)
//     ? !isEmpty(attributes) &&
//       Object.keys(variations).every((variation) =>
//         attributes.hasOwnProperty(variation)
//       )
//     : true;

//   let selectedVariation: any = {};
//   if (isSelected) {
//     selectedVariation = product?.variation_options?.find((o: any) =>
//       isEqual(
//         o.options.map((v: any) => v.value).sort(),
//         Object.values(attributes).sort()
//       )
//     );
//   }

//   function addToCart() {
//     if (!isSelected) return;
//     // to show btn feedback while product carting
//     setAddToCartLoader(true);
//     setTimeout(() => {
//       setAddToCartLoader(false);
//     }, 600);

//     const item = generateCartItem(product!, selectedVariation);
//     addItemToCart(item, quantity);
//     toast(t("add-to-cart"), {
//       type: "dark",
//       progressClassName: "fancy-progress-bar",
//       position: width > 768 ? "bottom-right" : "top-right",
//       autoClose: 2000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//     });
//   }

//   function handleAttribute(attribute: any) {
//     // Reset Quantity
//     if (!isMatch(attributes, attribute)) {
//       setQuantity(1);
//     }

//     setAttributes((prev) => ({
//       ...prev,
//       ...attribute,
//     }));
//   }

//   // Combine image and gallery
//   const combineImages = [...product?.gallery, product?.image];

//   return (
//     <div className="block lg:grid grid-cols-9 gap-x-10 xl:gap-x-14 pt-7 pb-10 lg:pb-14 2xl:pb-20 items-start">
//       {width < 1025 ? (
//         <Carousel
//           pagination={{
//             clickable: true,
//           }}
//           breakpoints={productGalleryCarouselResponsive}
//           className="product-gallery"
//           buttonClassName="hidden"
//         >
//           {combineImages?.length > 1 ? (
//             combineImages?.map((item: Attachment, index: number) => (
//               <SwiperSlide key={`product-gallery-key-${index}`}>
//                 <div className="col-span-1 transition duration-150 ease-in hover:opacity-90 flex">
//                   <Image
//                     width={475}
//                     height={618}
//                     src={
//                       item?.original ??
//                       "/assets/placeholder/products/product-gallery.svg"
//                     }
//                     alt={`${product?.name}--${index}`}
//                     className="object-cover w-full"
//                   />
//                 </div>
//               </SwiperSlide>
//             ))
//           ) : (
//             <SwiperSlide key={`product-gallery-key`}>
//               <div className="col-span-1 transition duration-150 ease-in hover:opacity-90 flex">
//                 <Image
//                   width={475}
//                   height={618}
//                   src={
//                     combineImages?.[0]?.original ??
//                     "/assets/placeholder/products/product-gallery.svg"
//                   }
//                   alt={product?.name}
//                   className="object-cover w-full"
//                 />
//               </div>
//             </SwiperSlide>
//           )}
//         </Carousel>
//       ) : (
//         <div className="col-span-5 grid grid-cols-2 gap-2.5">
//           {combineImages?.length > 1 ? (
//             combineImages?.map((item: Attachment, index: number) => (
//               <div
//                 key={index}
//                 className="col-span-1 transition duration-150 ease-in hover:opacity-90 flex"
//               >
//                 <Image
//                   width={475}
//                   height={618}
//                   src={
//                     item?.original ??
//                     "/assets/placeholder/products/product-gallery.svg"
//                   }
//                   alt={`${product?.name}--${index}`}
//                   className="object-cover w-full"
//                 />
//               </div>
//             ))
//           ) : (
//             <div className="col-span-full bg-gray-300 flex justify-center rounded-md">
//               <div className="transition duration-150 ease-in hover:opacity-90 w-1/2 flex">
//                 <Image
//                   width={475}
//                   height={618}
//                   src={
//                     combineImages?.[0]?.original ??
//                     "/assets/placeholder/products/product-gallery.svg"
//                   }
//                   alt={product?.name}
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//           )}
//         </div>
//       )}

//       <div className="col-span-4 pt-8 lg:pt-0">
//         <div className="pb-7 border-b border-gray-300">
//           <h2 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold hover:text-black mb-3.5">
//             {product?.name}
//           </h2>
//           <p className="text-body text-sm lg:text-base leading-6 lg:leading-8">
//             {product?.description}
//           </p>

//           <div className="flex items-center mt-5">
//             {!isEmpty(variations) ? (
//               <VariationPrice
//                 selectedVariation={selectedVariation}
//                 minPrice={product.min_price}
//                 maxPrice={product.max_price}
//               />
//             ) : (
//               <>
//                 <div className="text-heading font-semibold text-base md:text-xl lg:text-2xl">
//                   {price}
//                 </div>

//                 {basePrice && (
//                   <del className="font-segoe text-gray-400 text-base lg:text-xl ltr:pl-2.5 rtl:pr-2.5 -mt-0.5 md:mt-0">
//                     {basePrice}
//                   </del>
//                 )}
//               </>
//             )}
//           </div>
//         </div>
//         {!isEmpty(variations) && (
//           <div className="pt-7 pb-3 border-b border-gray-300">
//             {Object.keys(variations).map((variation) => {
//               return (
//                 <ProductAttributes
//                   key={variation}
//                   title={variation}
//                   attributes={variations[variation]}
//                   active={attributes[variation]}
//                   onClick={handleAttribute}
//                 />
//               );
//             })}
//           </div>
//         )}

//         <div className="flex items-center space-x-4 rtl:space-x-reverse ltr:md:pr-32 ltr:lg:pr-12 ltr:2xl:pr-32 ltr:3xl:pr-48 rtl:md:pl-32 rtl:lg:pl-12 rtl:2xl:pl-32 rtl:3xl:pl-48 border-b border-gray-300 py-8">
//           {isEmpty(variations) && (
//             <>
//               {Number(product.quantity) > 0 ? (
//                 <Counter
//                   quantity={quantity}
//                   onIncrement={() => setQuantity((prev) => prev + 1)}
//                   onDecrement={() =>
//                     setQuantity((prev) => (prev !== 1 ? prev - 1 : 1))
//                   }
//                   disableDecrement={quantity === 1}
//                   disableIncrement={Number(product.quantity) === quantity}
//                 />
//               ) : (
//                 <div className="text-base text-red-500 whitespace-nowrap ltr:lg:ml-7 rtl:lg:mr-7">
//                   {t("text-out-stock")}
//                 </div>
//               )}
//             </>
//           )}

//           {!isEmpty(selectedVariation) && (
//             <>
//               {selectedVariation?.is_disable ||
//               selectedVariation.quantity === 0 ? (
//                 <div className="text-base text-red-500 whitespace-nowrap ltr:lg:ml-7 rtl:lg:mr-7">
//                   {t("text-out-stock")}
//                 </div>
//               ) : (
//                 <Counter
//                   quantity={quantity}
//                   onIncrement={() => setQuantity((prev) => prev + 1)}
//                   onDecrement={() =>
//                     setQuantity((prev) => (prev !== 1 ? prev - 1 : 1))
//                   }
//                   disableDecrement={quantity === 1}
//                   disableIncrement={
//                     Number(selectedVariation.quantity) === quantity
//                   }
//                 />
//               )}
//             </>
//           )}
//           <Button
//             onClick={addToCart}
//             variant="slim"
//             className={`w-full md:w-6/12 xl:w-full ${
//               !isSelected && "bg-gray-400 hover:bg-gray-400"
//             }`}
//             disabled={
//               !isSelected ||
//               !product?.quantity ||
//               (!isEmpty(selectedVariation) && !selectedVariation?.quantity)
//             }
//             loading={addToCartLoader}
//           >
//             <span className="py-2 3xl:px-8">
//               {product?.quantity ||
//               (!isEmpty(selectedVariation) && selectedVariation?.quantity)
//                 ? t("text-add-to-cart")
//                 : t("text-out-stock")}
//             </span>
//           </Button>
//         </div>
//         <div className="py-6">
//           <ul className="text-sm space-y-5 pb-1">
//             {product?.sku && (
//               <li>
//                 <span className="font-semibold text-heading inline-block ltr:pr-2 rtl:pl-2">
//                   SKU:
//                 </span>
//                 {product?.sku}
//               </li>
//             )}

//             {product?.categories &&
//               Array.isArray(product.categories) &&
//               product.categories.length > 0 && (
//                 <li>
//                   <span className="font-semibold text-heading inline-block ltr:pr-2 rtl:pl-2">
//                     Category:
//                   </span>
//                   {product.categories.map((category: any, index: number) => (
//                     <Link
//                       key={index}
//                       href={`${ROUTES.CATEGORY}/${category?.slug}`}
//                       className="transition hover:underline hover:text-heading"
//                     >
//                       {product?.categories?.length === index + 1
//                         ? category.name
//                         : `${category.name}, `}
//                     </Link>
//                   ))}
//                 </li>
//               )}

//             {product?.tags &&
//               Array.isArray(product.tags) &&
//               product.tags.length > 0 && (
//                 <li className="productTags">
//                   <span className="font-semibold text-heading inline-block ltr:pr-2 rtl:pl-2">
//                     Tags:
//                   </span>
//                   {product.tags.map((tag: any) => (
//                     <Link
//                       key={tag.id}
//                       href={`${ROUTES.COLLECTIONS}/${tag?.slug}`}
//                       className="inline-block ltr:pr-1.5 rtl:pl-1.5 transition hover:underline hover:text-heading ltr:last:pr-0 rtl:last:pl-0"
//                     >
//                       {tag.name}
//                       <span className="text-heading">,</span>
//                     </Link>
//                   ))}
//                 </li>
//               )}

//             <li>
//               <span className="font-semibold text-heading inline-block ltr:pr-2 rtl:pl-2">
//                 {t("text-brand-colon")}
//               </span>
//               <Link
//                 href={`${ROUTES.BRAND}=${product?.type?.slug}`}
//                 className="inline-block ltr:pr-1.5 rtl:pl-1.5 transition hover:underline hover:text-heading ltr:last:pr-0 rtl:last:pl-0"
//               >
//                 {product?.type?.name}
//               </Link>
//             </li>

//             <li>
//               <span className="font-semibold text-heading inline-block ltr:pr-2 rtl:pl-2">
//                 {t("text-shop-colon")}
//               </span>
//               <Link
//                 href={`${ROUTES.SHOPS}/${product?.shop?.slug}`}
//                 className="inline-block ltr:pr-1.5 rtl:pl-1.5 transition hover:underline hover:text-heading ltr:last:pr-0 rtl:last:pl-0"
//               >
//                 {product?.shop?.name}
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductSingleDetails;




import React, { useState } from "react";
import Button from "@components/ui/button";
import Counter from "@components/common/counter";
import { useCart } from "@store/quick-cart/cart.context";
import { ProductAttributes } from "./product-attributes";
import isEmpty from "lodash/isEmpty";
import Link from "@components/ui/link";
import Image from "next/image";
import { useWindowSize } from "@utils/use-window-size";
import Carousel from "@components/ui/carousel/carousel";
import { SwiperSlide } from "swiper/react";
import VariationPrice from "@components/product/product-variant-price";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import "swiper/swiper-bundle.min.css";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageSlider from './image-product-slide'
import GalleryProduct from './gallery-products'
import ProductPromotion from './product-promotion'
import ProductConsultation from './product-consultation'
type Props = {
  product: Product;
};


const ProductSingleDetails: React.FC<Props> = ({ product }: any) => {
  const { addItemToCart } = useCart();
     

  // const { t } = useTranslation();
  const { width } = useWindowSize();
  // const { addItemToCart } = useCart();
  // const [attributes, setAttributes] = useState<{ [key: string]: string }>({});
  const [quantity, setQuantity] = useState(1);
  
  const [addToCartLoader, setAddToCartLoader] = useState<boolean>(false);
  const [show , setShow] = useState<boolean>(false);
  // const { price, basePrice } = usePrice({
  //   amount: product?.sale_price ? product?.sale_price : product?.price!,
  //   baseAmount: product?.price,
  // });

  // const variations = getVariations(product?.variations!);

  // const isSelected = !isEmpty(variations)
  //   ? !isEmpty(attributes) &&
  //     Object.keys(variations).every((variation) =>
  //       attributes.hasOwnProperty(variation)
  //     )
  //   : true;

  // let selectedVariation: any = {};
  // if (isSelected) {
  //   selectedVariation = product?.variation_options?.find((o: any) =>
  //     isEqual(
  //       o.options.map((v: any) => v.value).sort(),
  //       Object.values(attributes).sort()
  //     )
  //   );
  // }

  //fake variation_options
  //fake selectedVariation
  let selectedVariation = {
    sale_price:5000
  }
  const [testselectedVariation , settestselectedVariation] = useState({
    sale_price:null,
    quantity:null,
    size:null
  })
  function addToCart() {
    // if (!isSelected) return;
    // to show btn feedback while product carting
    if(testselectedVariation.size !== null) {
      setAddToCartLoader(true);
      addItemToCart({
        id:'1235',
        price: 10000,
        quantity: 2,
        stock: 20,
      }, quantity);
      setTimeout(() => {
        setAddToCartLoader(false);
      }, 600);
    }
    else {
      alert('Vui lòng chọn size')
    }
 
  }
 

  // fake variants
  const variations = {a:'something'}
  const  testSetVariants = (a , b , c) => {
    settestselectedVariation({
      sale_price:a,
      quantity:b,
      size:c
    })
    // selectedVariation = {
    //   sale_price:a
    // }
  } 
  const handleShow = () => {
    setShow(!show)
  }
  return (
    <div>
      {show && <GalleryProduct handleShow={handleShow}/> }
   
  <div className="md:hidden block">
    
        <Carousel 
        pagination={{
          clickable: true,   
        }}
        buttonClassName="hidden"
    
                  >
                  <SwiperSlide key={`product-gallery-key-`}>
                      <div className="col-span-1 transition duration-150 ease-in hover:opacity-90 flex justify-center mb-[30px]">
                        <Image
                          width={485}
                          height={485}
                          src="https://cdn.pnj.io/images/thumbnails/485/485/detailed/146/GCXMXMY000535-Day-co-Vang-14K-dinh-da-ECZ-Disney-PNJ-Ariel-_1.png"
                          alt="{`${product?.name}--${index}`}"
                          className="object-cover w-full "
                        />
                        
                      </div>
                    </SwiperSlide>
                    <SwiperSlide key={`product-gallery-key-`}>
                      <div className="col-span-1 transition duration-150 ease-in hover:opacity-90 flex justify-center mb-[30px]">
                        <Image
                          width={485}
                          height={485}
                          src="https://cdn.pnj.io/images/thumbnails/485/485/detailed/146/GCXMXMY000535-Day-co-Vang-14K-dinh-da-ECZ-Disney-PNJ-Ariel-_1.png"
                          alt="{`${product?.name}--${index}`}"
                          className="object-cover w-full mb-[30px]"
                        />                    
                      </div>
                    </SwiperSlide>
                  </Carousel>
                  <div className="flex justify-center mt-2 cursor-pointer" onClick={() => handleShow()}>
                <img src="https://cdn.pnj.io/images/p_detail/anh.svg"/>
              </div>         

  </div>

      <div className="block lg:grid grid-cols-9 gap-x-10 xl:gap-x-14 pt-7 pb-10 lg:pb-14 2xl:pb-20 items-start">
      <div className="col-span-5 grid grid-cols-1 gap-2.5 md:block hidden">
   
   <div>
     <ImageSlider/>
   {/* <ImageGallery thumbnailPosition="left" showNav={false} showPlayButton={false} showFullscreenButton={false} items={images} />; */}
   
     </div>       
  </div>   
      
        <div className="col-span-4 pt-8 lg:pt-0">
          <div className="pb-2 border-b border-gray-300">
            {/* <h2 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold hover:text-black mb-3.5">
              Trang sức vàng
            </h2> */}
               <h2 className="text-[18px] text-[#4c4c4c]">
               Nhẫn Vàng 18K đính đá Citrine PNJ CTXMY000460
            </h2>
            <div className="text-[13px] text-[#4c4c4c] text-sm lg:text-base leading-6 lg:leading-8 flex justify-between mt-2">
                 <div>Mã:  5555555555</div>
                 <div>
                  <FontAwesomeIcon className="text-yellow-400 text-[13px]" icon={faStar}/>
                <span>5(3)</span>  
                 </div>
                 <div>2000+ đã bán</div>
            </div>
  
            <div className="flex items-center mt-2">
            {/* <VariationPrice
                  selectedVariation={"selectedVariation"}
                  minPrice={25}
                  maxPrice={25}
                /> */}
              {!isEmpty(variations) ? (
                <VariationPrice
                  // selectedVariation={selectedVariation}
                  // minPrice={product.min_price}
                  // maxPrice={product.max_price}
  
                  testselectedVariation={testselectedVariation}
                  minPrice={25}
                  maxPrice={28}
                />
              ) : (
                <>
                  <div className="text-heading font-semibold text-base md:text-xl lg:text-2xl">
                   25
                  </div>
  
                  {true && (
                    <del className="font-segoe text-gray-400 text-base lg:text-xl ltr:pl-2.5 rtl:pr-2.5 -mt-0.5 md:mt-0">
                      25
                    </del>
                  )}
                </>
              )}
            </div>
          </div>
         
          {!isEmpty(variations) && (
            <div className="pt-3 border-b border-gray-300 flex">
              {Object.keys(variations).map((variation) => {
                return (
                  <ProductAttributes
                    key={variation}
                    title={variation}
                    attributes={variations[variation]}
                    // active={attributes[variation]}
                    // onClick={handleAttribute}
                    testSetVariants={testSetVariants}
                  />
                );
              })}
            </div>
          )}
     <ProductPromotion/>
          <div className="flex items-center  space-x-4 ">
            {/* {true && (
              <>
              
                  <Counter
                    quantity={quantity}
                    onIncrement={() => setQuantity((prev) => prev + 1)}
                    onDecrement={() =>
                      setQuantity((prev) => (prev !== 1 ? prev - 1 : 1))
                    }
                    disableDecrement={quantity === 1}
                    disableIncrement={Number(product.quantity) === quantity}
                  /> *
              
              </>
            )} */}
  
            {/* {!isEmpty(selectedVariation) && (
              <>
                {selectedVariation?.is_disable ||
                selectedVariation.quantity === 0 ? (
                  <div className="text-base text-red-500 whitespace-nowrap ltr:lg:ml-7 rtl:lg:mr-7">
                    {t("text-out-stock")}
                  </div>
                ) : (
                  <Counter
                    quantity={quantity}
                    onIncrement={() => setQuantity((prev) => prev + 1)}
                    onDecrement={() =>
                      setQuantity((prev) => (prev !== 1 ? prev - 1 : 1))
                    }
                    disableDecrement={quantity === 1}
                    disableIncrement={
                      Number(selectedVariation.quantity) === quantity
                    }
                  />
                )}
              </>
            )} */}
  
  
                 <Counter
                    quantity={quantity}
                    onIncrement={() => {setQuantity((prev) => prev + 1)
                    }}
                    onDecrement={() =>
                      setQuantity((prev) => (prev !== 1 ? prev - 1 : 1))
                    }
                    disableDecrement={quantity === 1}
                    // disableIncrement={
                    //   Number(selectedVariation.quantity) === quantity
                    // }
  
                     disableIncrement={
                      Number(testselectedVariation.quantity) === quantity
                    }
                  />
            <Button
              onClick={addToCart}
              variant="slim"
              className={`w-full   bg-[#94303a] flex-1
       
              `
            }
              // disabled={
              //   !isSelected ||
              //   !product?.quantity ||
              //   (!isEmpty(selectedVariation) && !selectedVariation?.quantity)
              // }
              // loading={addToCartLoader}
            >
              <span className="py-2 3xl:px-8 ">
              Thêm vào giỏ hàng
              </span>
            </Button>
            
          </div>
          {/* add installment button and available button */}
          <div className="flex gap-5">
          <Button
              variant="slim"
              className={`w-full md:w-6/12 xl:w-full  bg-[#202e65]
       
              `
            }
            >
              <span className="py-2 3xl:px-8">
              Mua Trả Góp
              </span>
            </Button>
  
            <Button
              variant="slim"
              className={`w-full md:w-6/12 xl:w-full bg-[#202e65]
       
              `
            }
            >
              <span className="py-2 3xl:px-8">
              153 Cữa Hàng Còn Hàng
              </span>
            </Button>
          </div>
          <ProductConsultation/>
          <div className="py-6">
            <ul className="text-sm space-y-5 pb-1">
              
                <li>
                  <span className="font-semibold text-heading inline-block ltr:pr-2 rtl:pl-2">
                    SKU:
                  </span>
                 5555555555
                </li>
            
  
              {/* {product?.categories &&
                Array.isArray(product.categories) &&
                product.categories.length > 0 && (
                  <li>
                    <span className="font-semibold text-heading inline-block ltr:pr-2 rtl:pl-2">
                      Category:
                    </span>
                    {product.categories.map((category: any, index: number) => (
                      <Link
                        key={index}
                        href={`${ROUTES.CATEGORY}/${category?.slug}`}
                        className="transition hover:underline hover:text-heading"
                      >
                        {product?.categories?.length === index + 1
                          ? category.name
                          : `${category.name}, `}
                      </Link>
                    ))}
                  </li>
                )} */}
  
              {/* {product?.tags &&
                Array.isArray(product.tags) &&
                product.tags.length > 0 && (
                  <li className="productTags">
                    <span className="font-semibold text-heading inline-block ltr:pr-2 rtl:pl-2">
                      Tags:
                    </span>
                    {product.tags.map((tag: any) => (
                      <Link
                        key={tag.id}
                        href={`${ROUTES.COLLECTIONS}/${tag?.slug}`}
                        className="inline-block ltr:pr-1.5 rtl:pl-1.5 transition hover:underline hover:text-heading ltr:last:pr-0 rtl:last:pl-0"
                      >
                        {tag.name}
                        <span className="text-heading">,</span>
                      </Link>
                    ))}
                  </li>
                )} */}
  
              <li>
                <span className="font-semibold text-heading inline-block ltr:pr-2 rtl:pl-2">
               Test
                </span>
                <Link
                  href={`test`}
                  className="inline-block ltr:pr-1.5 rtl:pl-1.5 transition hover:underline hover:text-heading ltr:last:pr-0 rtl:last:pl-0"
                >
                  Hehe
                </Link>
              </li>
  
              <li>
                <span className="font-semibold text-heading inline-block ltr:pr-2 rtl:pl-2">
                  Hehe
                </span>
                <Link
                  href={`hehe`}
                  className="inline-block ltr:pr-1.5 rtl:pl-1.5 transition hover:underline hover:text-heading ltr:last:pr-0 rtl:last:pl-0"
                >
                  Hehe
                </Link>
              </li>
            </ul>
          </div>
        </div> 
  
        <div className="col-span-5 grid grid-cols-1 gap-2.5">
           
        
  </div>
      </div>
      {/* <GalleryProduct/> */}
    </div>
  );
};

export default ProductSingleDetails;



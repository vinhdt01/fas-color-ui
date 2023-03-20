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
import Image from "next/image";
import { useWindowSize } from "@utils/use-window-size";
import Carousel from "@components/ui/carousel/carousel";
import { SwiperSlide } from "swiper/react";
import VariationPrice from "@components/product/product-variant-price";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar , faBell} from '@fortawesome/free-solid-svg-icons'
import "swiper/swiper-bundle.min.css";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageSlider from './image-product-slide'
import GalleryProduct from './gallery-products'
import ProductPromotion from './product-promotion'
import ProductConsultation from './product-consultation'
import { IoClose } from "@react-icons/all-files/io5/IoClose";




const ProductSingleDetails: React.FC = ({ data }: any) => {
  var ar = data.sub_photoURL.split(', ')

  const { addItemToCart } = useCart();
     
  // const { t } = useTranslation();
  const { width } = useWindowSize();

  const [quantity, setQuantity] = useState(1);
  const [id, setId] = useState(0);

  const [addToCartLoader, setAddToCartLoader] = useState<boolean>(false);
  const [showAlertSize , setShowAlertSize] = useState<boolean>(false)
  const [show , setShow] = useState<boolean>(false);
  const [showSlideGalary , setShowSlideGalary] = useState<boolean>(false);

  let selectedVariation = {
    sale_price:5000
  }
  const [testselectedVariation , settestselectedVariation] = useState({

  })
  function addToCart() {

    if(testselectedVariation.size !== undefined) {
      setAddToCartLoader(true);
      addItemToCart({
        id:'1234',
        price: data.price,
        stock: 20,
        size:1,
        image:data.main_photoURL
      }, quantity);
      // Router.push('/checkout')

      setTimeout(() => {
        setAddToCartLoader(false);
      }, 600);
    }
    else {
      setShowAlertSize(true)
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

  } 
  const handleShow = () => {
    setShow(!show)
  }
  const handleShowGalaryFromSlide = () => {
    setShowSlideGalary(!showSlideGalary)
  }
  return (
    <div>
      {show && <GalleryProduct data={ar} handleShow={handleShow}/> }
      {showSlideGalary && <GalleryProduct data={ar} handleShowGalaryFromSlide={handleShowGalaryFromSlide} /> }

      <div className="block lg:grid grid-cols-9 gap-x-10 xl:gap-x-14 pt-7 pb-10 lg:pb-14 2xl:pb-20 items-start">
    
          <div className="lg:hidden block relative">
    
    <Carousel 
    pagination={{
      clickable: true,   
    }}
    buttonClassName="hidden"

              >
                
           
                {ar.length > 0 && ar.map((item , index) => (
                  <SwiperSlide key={`product-gallery-key-`}>
                  <div  onClick={() => {setShowSlideGalary(!showSlideGalary); setId(index)}} className="col-span-1 transition duration-150 ease-in hover:opacity-90 flex justify-center mb-[30px]">
                    <Image
                      width={485}
                      height={485}
                      src={item}
                      alt="{`${product?.name}--${index}`}"
                      className="object-cover w-full "
                    />
                    
                  </div>
                </SwiperSlide>
                ))}
                
                
              </Carousel>
              <img className="w-9 h-9 absolute top-2 right-2" src="https://cdn.pnj.io/images/image-update/tag-product/new-icon-3-w29.svg"/>

              <div className="flex justify-center mt-2 cursor-pointer" onClick={() => handleShow()}>
            <img src="https://cdn.pnj.io/images/p_detail/anh.svg"/>
          </div>         

</div>   


          <div className="col-span-5  grid-cols-1 gap-2.5 lg:block hidden">
   
<div>
  <ImageSlider data={ar} handleShowGalaryFromSlide={handleShowGalaryFromSlide} id={3}/>

  </div>       
        
          </div>
    
  
        <div className="col-span-4 pt-8 lg:pt-0">
          <div className="pb-2 border-b border-gray-300">
      
               <h2 className="text-[18px] text-[#4c4c4c]">
                 {data?.name}
              </h2>
            <div className="text-[13px] text-[#4c4c4c] text-sm lg:text-base leading-6 lg:leading-8 flex justify-between mt-2">
                 <div className="text-[13px]">Mã:  5555555555</div>
                 <div className="flex items-center text-[13px]">
              <FontAwesomeIcon className="text-[#ffc107] w-[12px] mr-[4px]" icon={faStar}/>
              <span>5(3)</span>
            </div>
                 <div className="text-[13px]">2000+ đã bán</div>
            </div>
  
            <div className="flex items-center mt-2">
         
              {!isEmpty(variations) ? (
                <h1 className="text-[#003468] text-[24px] font-medium">{data?.price}</h1>
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
                    testSetVariants={testSetVariants}
                  />
                );
              })}
            </div>
          )}
     <ProductPromotion/>
          <div className="flex items-center  space-x-4 ">
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
              className={`w-full   bg-[#94303a] flex flex-1
       
              `
            }
             
              disabled={testselectedVariation.quantity == 0 }
              loading={addToCartLoader}
            >
              <span className="py-2 3xl:px-8 ">
                {testselectedVariation.quantity == 0 ?  'Hết hàng' : 'Thêm vào giỏ hàng' }
              </span>
            </Button>
         
            
          </div>
          {/* add installment button and available button */}
         
          <ProductConsultation/>
     
        </div> 
  
        <div className="col-span-5 grid grid-cols-1 gap-2.5">
           
        
  </div>
      </div>
      {/* <GalleryProduct/> */}
      {showAlertSize && 
        <div>
           <div onClick={() =>setShowAlertSize(false)} className="fixed top-0 left-0 right-0 bottom-0 bg-[#000000]/[.5] z-[40]"></div>
           <div className="w-[300px] h-[100px] fixed top-[20%] left-[50%] translate-x-[-50%] z-50 bg-[#fff]">  
           <button
                  onClick={() =>setShowAlertSize(false)}
                  aria-label="Close panel"
                  className=
                    "fixed right-1 z-10 inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#e0dada] shadow text-gray-600 transition duration-200 focus:outline-none focus:text-gray-800 focus:shadow-md hover:text-gray-800 hover:shadow-md"
                  
                >
                  <IoClose className="text-xl" />
                </button>
               <div className="w-[55px] p-3 block bg-red-600 rounded-full m-auto mt-3">
               <FontAwesomeIcon className="w-[30px] h-[30px] text-[#fff] " icon={faBell}/>
               </div>
               <p className="text-center">Vui lòng chọn size</p>
           </div>
        </div>}
    </div>
  );
};

export default ProductSingleDetails;



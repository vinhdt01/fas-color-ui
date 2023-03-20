import {useState , useEffect } from 'react'
import axios from 'axios';
import ProductOverlayCard from "@components/product/product-overlay-card";

interface ProductsProps {
  sectionHeading: string;
  categorySlug?: string;
  className?: string;
  variant?: "flat" | "left" | "center" | "combined" | "fashion";
  limit?: number;
  title?:string;
  data:any
}

const ProductsFeatured: React.FC<ProductsProps> = ({
  sectionHeading,
  categorySlug,
  className = "mb-12 ",
  variant = "left",
  limit = 5,
  title="",
  data
  
}) => {

    return (
    <div className={className}>
      {/* <SectionHeader
        sectionHeading={sectionHeading}
        categorySlug={categorySlug}
      /> */}
      <h1  className="text-[#003868] text-[20px] font-bold">{title}</h1>
      {/* {error && <Alert message={error.message} />} */}

      <div className="grid grid-cols-4 grid-rows-2 gap-3 md:gap-5 xl:gap-7">
    
        {
         data && data.map((item , index) => (
            <ProductOverlayCard
            key={`product--key`}
            item={item}
            variant={variant}
            index={1}
          /> 
          ))
        }
       
      </div>
    </div>
  );
};

export default ProductsFeatured;

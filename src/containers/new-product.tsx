import {useState , useEffect } from "react";
import axios from 'axios'
import ProductsFeatured from "@containers/products-featured";
import ShowMoreBtn from '@components/show-more/show-more-button'

const NewProduct = ({data}) => {

  return (
     <>
      <ProductsFeatured data={data} sectionHeading="text-featured-products" title="Sản Phẩm Mới"/>
      <ShowMoreBtn/>
      </>
  )
}
export default NewProduct
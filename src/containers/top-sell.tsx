import ProductsFeatured from "@containers/products-featured";
import ShowMoreBtn from '@components/show-more/show-more-button'

const TopSell = () => {
  return (
     <>
      <ProductsFeatured sectionHeading="text-featured-products" title="Sản Phẩm Bán Chạy"/>
      <ShowMoreBtn/>
      </>
  )
}
export default TopSell
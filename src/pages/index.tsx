

import { useState , useEffect } from "react";
import dynamic from 'next/dynamic'
import BannerCard from "@components/common/banner-card";
import Container from "@components/ui/container";
import CategoryBlock from "@containers/category-block";
import { getLayout } from "@components/layout/layout";
import BannerBlock from "@containers/banner-block";
import Divider from "@components/ui/divider";

import ProductsFeatured from "@containers/products-featured";
import BannerSliderBlock from "@containers/banner-slider-block";
import ExclusiveBlock from "@containers/exclusive-block";
import TopSell from '@containers/top-sell'
import NewProduct from '@containers/new-product'
import WeddingJewelry from '@containers/wedding-jewelry'
import ShowMoreBtn from '@components/show-more/show-more-button'
import { ROUTES } from "@lib/routes";
import {
  masonryBanner,
  promotionBanner,
  modernDemoBanner as banner,
  modernDemoProductBanner as productBanner,
} from "@data/static/banners";
const Banner = dynamic(
  () => import("@components/banner/banner")
);

export {getServerSideProps} from '@framework/ssr/get-product'
export default function Home({data}) {
const [swiperKey, setSwiperKey] = useState(0);

useEffect(() => {
  setSwiperKey(1);
}, []);
  return (
    <>
          <BannerSliderBlock data={promotionBanner} />

      <BannerBlock data={masonryBanner} /> 
  
      <Container>
        {/* <CategoryBlock sectionHeading="text-shop-by-category" variant="rounded" />
        <TopSell/> */}
        <BannerCard
          data={banner[0]}
          href={`${ROUTES.COLLECTIONS}/${banner[0].slug}`}
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
        />
        <NewProduct data={data}/>
        
 <ExclusiveBlock/>
      </Container>
      <Divider className="mb-0" />
    </>
  );
}

Home.getLayout = getLayout;



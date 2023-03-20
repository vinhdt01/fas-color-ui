import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import nextI18NextConfig from '../../../../next-i18next.config'


// import  axios from 'axios';
// import { GetStaticPaths } from "next";


// export const getStaticProps: GetStaticProps = async () => {

//     // let data = axios.get('https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1')
//     const res = await fetch('https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1')
//     const data = await res.json()
//     return {
//         props : {
//             data
//         }
//     }
// };

export const getStaticProps: GetStaticProps = async ({ locale }:any) => {
  const res = await fetch('https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1')
    const data = await res.json()
    return {
      props: {
        ...(await serverSideTranslations(locale, [
            'common'
        ] , nextI18NextConfig )),
        data
      },
      
    };
    
  }
  export async function getStaticPaths() {
    return {
      paths: [],
      fallback: true, // can also be true or 'blocking'
    }
  }
  
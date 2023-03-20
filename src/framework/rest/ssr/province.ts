// import  axios from 'axios';
// export async function getStaticProps() {
//     const data  = axios.get('https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1')
//     return {
//         props: {
//             data,
//           },
//     }
//   }

import  axios from 'axios';
import { GetStaticPaths, GetStaticProps } from "next";


export const getStaticProps: GetStaticProps = async () => {

    // let data = axios.get('https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1')
    const res = await fetch('https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1')
    const data = await res.json()
    return {
        props : {
            data
        }
    }
};

import axios from 'axios';

export async function getServerSideProps(context) {
    let slug = context.params.slug
    let base_url:string = process.env.BASE_URL;
    ;
 const res = await axios.get(`${base_url}` + '/get-product/' +     `${slug}`);
  const data = res.data;

  return {
    props: {
      data,
    },
  };
}



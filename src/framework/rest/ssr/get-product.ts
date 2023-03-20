export async function getServerSideProps() {
  let base_url:string = process.env.BASE_URL;

  let res = await fetch(`${base_url}/product`)
  let data = await res.json()
  return { props: { data } }

}
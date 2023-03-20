import axios from 'axios'
let base_url:string = process.env.BASE_URL;

let URL = base_url +  "/create-order";

const   orderPost =async (data:any) =>   {
   let result = await axios.post(URL , data)
   console.log(result)

}

export default orderPost;
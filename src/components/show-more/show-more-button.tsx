import React from 'react'
import Link from 'next/link'
const ShowMoreBtn:React.FC =  () => {
    return (
      <Link href="#">
        <div className="w-full mb-5 text-center">
            <button className=" h-[28px] text-[#003868] text-[14px] box-border border border-[#003868] px-2  rounded-lg m-auto">
                Xem thêm
            </button>
        </div>
      </Link>
    )
}
export default ShowMoreBtn
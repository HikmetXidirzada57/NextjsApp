import React from 'react'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Product = ({loading,data}) => {
  return (
    <section className='product-list'>
        {loading? (
   <div className='flex'>
   <div class="bg-white shadow-md rounded-lg p-4">
     <img src="https://tse2.mm.bing.net/th?id=OIP.FPHIP_eRs5mZioC_hy5TYQHaDt&pid=Api&P=0&h=180
     rounded-lg
     shadow-md
     w-200
     object-cover
     " alt="" />
       <h2 class="text-xl font-bold">Product Name</h2>
       <p class="text-gray-600">Product Description</p>
       <p class="text-lg font-semibold text-green-600">$19.99</p>
</div>
</div>
        ):(
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-1/2">
                        <Skeleton count={5}/>
                    </div>
                    <div className="w-1/2">
                        <Skeleton count={5}/>
                    </div>
                    <div className="w-1/2">
                        <Skeleton count={5}/>
                    </div>
                    <div className="w-1/2">
                        <Skeleton count={5}/>
                    </div>
                    <div className="w-1/2">
                        <Skeleton count={5}/>
                    </div>
                    <div className="w-1/2">
                        <Skeleton count={5}/>
                    </div>
                </div>

            </div>
        )}

    </section>
 
  )
}

export default Product
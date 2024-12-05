import React, { memo } from "react";
import { useStateValue } from "../../context/Context";
import Products from "../products/Products";
import broken_heart from "../../assets/broken.webp"
const Wishlist = () => {
  const { wishList } = useStateValue();
  console.log(wishList);
  return (
    <div>
      {
        wishList.length ? 
        <Products data={wishList} title={'Sevimlilar'}/>
        : 
        <div className="h-1/2 w-1/3 container pt-10">
          <img src={broken_heart} alt="" />
          <p className="p-2 text-center text-2xl text-blue-500">There are no more photos products</p>
        </div>
      }
    </div>
  );
};

export default memo(Wishlist);

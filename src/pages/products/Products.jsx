import React, { memo } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { useStateValue } from "../../context/Context";
import { toast, Bounce } from "react-toastify";

const Products = ({ data, title }) => {
  const { wishList, setWishList, cart, setCart } = useStateValue();

  const handleLike = (prod) => {
    const index = wishList.findIndex((item) => item.id === prod.id);
    if (index < 0) {
      setWishList((prev) => [...prev, prod]);
    } else {
      setWishList((prev) => prev.filter((item) => item.id !== prod.id));
    }
  };

  const handleCart = (prod) => {
    toast.success(" Tovar savatga qo'shildi!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    setCart((prev) => [...prev, prod]);
  };

  const productItems = data?.map((item) => (
    <div
      key={item.id}
      className="group shadow-lg shadow-indigo-400 hover:scale-105 transition-transform duration-300 ease-in-out p-6 flex flex-col justify-center text-center items-center bg-white rounded-lg overflow-hidden"
    >
      <div className="w-full h-64 relative">
        <img
          className="object-cover w-full h-full rounded-lg transition-transform duration-300 group-hover:scale-110"
          src={item.thumbnail}
          alt={item.title}
        />
        <button
          onClick={() => handleLike(item)}
          className="absolute top-3 right-3 text-2xl bg-white p-2 rounded-full shadow-md hover:scale-125 transition-transform duration-300"
        >
          {wishList?.some((prod) => prod.id === item.id) ? (
            <FaHeart className="text-red-500 animate-pulse" />
          ) : (
            <FaRegHeart />
          )}
        </button>
      </div>
      <div className="card__body flex flex-col gap-2 mt-4">
        <p className="font-bold text-lg text-gray-800">{item.title}</p>
        <div className="flex justify-between items-center w-full">
          <p className="font-semibold text-xl text-blue-500">
            {item.price} <span className="text-black">sum</span>
          </p>
          <button
            onClick={() => handleCart(item)}
            className="text-2xl bg-blue-500 text-white p-2 rounded-full shadow-md hover:scale-110 hover:bg-blue-600 transition duration-300"
            title="Add to Cart"
          >
            <TiShoppingCart />
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container py-6">
      <p className="text-center text-4xl font-bold text-green-500 mb-8">
        {title}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productItems}
      </div>
    </div>
  );
};

export default memo(Products);

import React, { memo } from "react";
import { useStateValue } from "../../context/Context";
import CartBody from "./CartBody";

const Cart = () => {
  const { cart, setCart } = useStateValue();

  console.log(cart);
  return (
    <section className="my-6">
      <div className="container py-3">
        {cart.length ? (
          <CartBody prod={cart}/>
        ) : (
          <div className="text-center text-3xl text-green-500">
            Sizning savatingiz bo'sh
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(Cart);

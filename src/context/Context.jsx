import { useContext, createContext, useState, useEffect } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState(
    JSON.parse(localStorage.getItem("likes")) || []
  );
  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(wishList));
  }, [wishList]);
  return (
    <Context.Provider value={{ wishList, setWishList, cart, setCart }}>
      {children}
    </Context.Provider>
  );
};

export const useStateValue = () => useContext(Context);

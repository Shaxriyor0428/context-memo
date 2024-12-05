import React, { memo } from "react";
import logo from "../../assets/logo.png";
import { HEADER_LINKS } from "../../static";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
const Header = () => {
  const headerItems = HEADER_LINKS?.map((item) => (
    <div key={item.id} className="">
      <NavLink
        className={
          "flex justify-center items-center gap-2 font-medium text-[16px] text-center"
        }
        to={item.url}
      >
        {item.name}
        {item.icon}
      </NavLink>
    </div>
  ));
  return (
    <header id="header" className="header h-20 bg-slate-100 w-full">
      <nav className="container flex h-full items-center justify-between">
        <div>
          <NavLink to={"/"}>
            <img src={logo} alt="header logo" />
          </NavLink>
        </div>
        <div className="flex gap-10">{headerItems}</div>
        <div className="flex gap-6">
          <NavLink to={"/user"}>
            <FaRegUser className="text-2xl" />
          </NavLink>
          <NavLink to={"/cart"}>
            <IoCartOutline className="text-[26px]" />
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default memo(Header);

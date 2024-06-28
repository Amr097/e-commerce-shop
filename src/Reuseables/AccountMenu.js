import React from "react";
import { RiArrowDropDownFill, RiAccountPinBoxLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsBalloonHeart } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

const AccountMenu = () => {
  const { data: session } = useSession();

  const menuLinks = [
    { name: "Porfile", icon: RiAccountPinBoxLine, link: "/profile" },
    { name: "Cart", icon: FiShoppingCart, link: "/profile" },
    {
      name: "Orders",
      icon: HiOutlineShoppingBag,
      link: "/profile/orders",
    },
    {
      name: "Wishlist",
      icon: BsBalloonHeart,
      link: "/profile/wishlist",
    },
  ];
  return (
    <button className="auth-services-btn services-btn--menu">
      {" "}
      <img
        src={session ? session.user.image : "/images/pngwing.com (2).webp"}
        alt=""
      />{" "}
      &nbsp;
      <p>{session.user.name}</p>
      <RiArrowDropDownFill className="services-btn--arrow" />
      <div className="services-btn--dropdown">
        <ul>
          {menuLinks.map((item) => (
            <li key={uuidv4()} className="flex">
              <item.icon />
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
          <li className="flex">
            <BiLogOut />
            <a onClick={signOut}>Sign Out</a>
          </li>
        </ul>
      </div>
    </button>
  );
};

export default AccountMenu;

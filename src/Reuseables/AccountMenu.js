import React from "react";
import { RiArrowDropDownFill, RiAccountPinBoxLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsBalloonHeart } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import { useSession } from "next-auth/react";

const AccountMenu = () => {
  const { data: session } = useSession();

  const menuLinks = [
    { name: "My Account", icon: RiAccountPinBoxLine, link: "/profile" },
    {
      name: "My orders",
      icon: HiOutlineShoppingBag,
      link: "/profile/orders",
    },
    {
      name: "My wishlist",
      icon: BsBalloonHeart,
      link: "/profile/wishlist",
    },
    {
      name: "Logout",
      icon: BiLogOut,
      link: "/logout",
    },
  ];
  return (
    <button className="services-btn">
      {" "}
      <img
        src={session.user ? session.user.image : "/images/pngwing.com (2).png"}
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
        </ul>
      </div>
    </button>
  );
};

export default AccountMenu;

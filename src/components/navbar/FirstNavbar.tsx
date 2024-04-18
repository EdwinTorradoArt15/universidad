"use client";

import { FaUsers, FaUser } from "react-icons/fa";
import { FaGraduationCap, FaCircleUser } from "react-icons/fa6";
import { BsFillWalletFill } from "react-icons/bs";
import { firstNavbarData } from "./Navbar.data";
import { IconType } from "react-icons";

const iconMap: { [key: string]: IconType } = {
  FaUsers,
  FaUser,
  FaGraduationCap,
  FaCircleUser,
  BsFillWalletFill,
};

const FirstNavbar = () => {
  return (
    <div className="bg-[#aa1916] px-16 py-2 flex items-center justify-start">
      <ul className="flex items-center gap-3 text-white text-xs">
        {firstNavbarData.map((item) => {
          const IconComponent = iconMap[item.icono.name];
          return (
            <li key={item.id}>
              <a
                href={item.idLink}
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase"
              >
                {IconComponent && (
                  <IconComponent className="inline-block mr-1" />
                )}
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FirstNavbar;

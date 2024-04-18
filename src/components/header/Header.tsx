"use client";

import Image from "next/image";
import logo from "../../../public/images/logo_ufps.png";

const Header = () => {
  return (
    <div className="bannerImage p-7">
      <div className="flex items-center justify-between">
        <Image src={logo} alt="Banner" className="w-40 h-40" />
        <Image src={logo} alt="Banner" className="w-40 h-40" />
      </div>
    </div>
  );
};

export default Header;

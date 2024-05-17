"use client";

import { FaUsers , FaUser, FaUserGraduate,  FaPencilRuler , FaSuitcase } from "react-icons/fa";

import fondo from "../../../public/images/header-superior-principal.jpg"
import logo_derecho from "../../../public/images/ufps_logo.png"
import escudo_colombia from "../../../public/images/escudo_colombia.png"
import sello from "../../../public/images/sello_acreditacion.png"





import { useState } from "react";
import { NavLinks } from "./";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import logo from "../../../public/images/LOGO_ING_ELECTROMECANICA-2.png"
import Link from "next/link";

const FirstNavbar = () => {
  const [open, setOpen] = useState(false);

  return (

    <>



      <header className="relative h-[210px] overflow-hidden">
        
        <img  alt="Background" className="object-cover w-full h-full"  src={fondo.src} />
    <div className="absolute inset-0 flex items-center justify-between px-4 md:px-6">
      <img
        alt="Logo Left"
        className="mx-10 z-10"
        height={150}
        src={sello.src}
        style={{
          aspectRatio: "337/150",
        
        }}
        width={337}
      />
      <img
        alt="Logo Right"
        className="z-10"
        height={130}
        src={escudo_colombia.src}
        style={{
          aspectRatio: "130/120",
          objectFit: "cover",
        }}
        width={120}
      />
    </div>

    </header>



    <nav className="bg-[#aa1916] text-white z-10">

 


      

      <div className="flex items-center font-medium justify-around ">
        <div className="z-1 p-5 md:w-auto w-full flex justify-between">
          <img src={logo.src} alt="logo" className="md:cursor-pointer h-20" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? <IoClose /> : <RxHamburgerMenu />}
          </div>

        
        </div>
        <p className="text-xs md:text-base md:ml-4 md:px-2 md:py-1 bg-[#aa1916] text-white rounded-lg">
          <span className="text-lg">Ingeniería Electromecánica</span>
        </p>
        <ul className="md:flex hidden uppercase items-center gap-8 z-50">
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Inicio
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="md:block text-transparent ">
          <button>button</button>
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 z-50 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-5 ">
            <button>button</button>
            {/* <Button /> */}
          </div>
        </ul>
      </div>
    </nav>

    </>
  );
};


export default FirstNavbar;

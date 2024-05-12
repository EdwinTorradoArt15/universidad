import { FaUsers, FaUser } from "react-icons/fa";
import { FaGraduationCap, FaCircleUser } from "react-icons/fa6";
import { BsFillWalletFill } from "react-icons/bs";

export const firstNavbarData = [
  {
    id: 1,
    name: "Aspirantes",
    idLink: "https://ww2.ufps.edu.co/universidad/perfiles/aspirantes/952",
    icono: FaUsers,
  },
  {
    id: 2,
    name: "Estudiantes",
    idLink: "https://ww2.ufps.edu.co/universidad/perfiles/estudiantes/953",
    icono: FaUser,
  },
  {
    id: 1,
    name: "Graduados",
    idLink: "https://ww2.ufps.edu.co/universidad/perfiles/egresados/954",
    icono: FaGraduationCap,
  },
  {
    id: 1,
    name: "Docentes",
    idLink: "https://docentes.ufps.edu.co/",
    icono: FaCircleUser,
  },
  {
    id: 1,
    name: "Empresarios",
    idLink: "",
    icono: BsFillWalletFill,
  },
];

export const secondNavbarData = [
  {
    id: 1,
    name: "Programa",
  },
  {
    id: 2,
    name: "Formación-Investigación",
  },
  {
    id: 3,
    name: "Proyección Social",
  },
  {
    id: 4,
    name: "Visibilidad-Movilidad",
  },
  {
    id: 5,
    name: "Bienestar",
  },
  {
    id: 6,
    name: "Infraestructura", 
  },
  {
    id: 7,
    name: "Estudiantes-Graduados",
  },
];

export const links = [
  {
    name: "Programa",
    submenu: true,
    sublinks: [
      {
        Head: "Programa",
        sublink: [
          { name: "Presentacion", link: "/programa/presentacion" },
          { name: "Misión, Visión y Valores", link: "/programa/mision-vision" },
          { name: "Propósito del Programa", link: "/programa/proposito" },
          { name: "Perfiles", link: "/programa/perfiles" },
          { name: "Competencias", link: "/programa/competencias" },
          { name: "Diseño curricular", link: "/programa/curriculum" },
          { name: "Aspectos academicos", link: "/programa/aspectos_academicos/" },
        ],
      }
    ],
  },





  {
    name: "Formacion-Investigacion",
    submenu: true,
    sublinks: [
      {
        Head: "Topwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "Bottomwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "innerwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },

      {
        Head: "sleepwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "footwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
    ],
  },
  {
    name: "Proyeccion social",
    submenu: true,
    sublinks: [
      {
        Head: "Topwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "Bottomwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "innerwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },

      {
        Head: "sleepwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "footwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
    ],
  },
];

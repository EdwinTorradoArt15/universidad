"use client";

import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";

const Novedades = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#E8E8E8]">
      <div className="grid gap-6 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Novedades
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Mantente al día con nuestras últimas novedades.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">Ver Novedad</span>
            </Link>
            <img
              alt="Novedad 1"
              className="object-cover w-full aspect-[4/3]"
              height="300"
              src="/images/novedades/1.jpg"
              width="400"
            />
            <div className="bg-black/70 group-hover:opacity-90 transition-opacity text-white p-4 lg:p-6 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">
                  <FaCalendarAlt className="mr-1 inline-block h-4 w-4" />
                  25 de Mayo, 2023
                </p>
              </div>
              <h3 className="font-semibold tracking-tight">
                Nuevo Producto: Taza Mágica
              </h3>
              <p className="text-sm leading-none">
                Descubre nuestra nueva taza con diseños únicos y mágicos.
              </p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">Ver Novedad</span>
            </Link>
            <img
              alt="Novedad 2"
              className="object-cover w-full aspect-[4/3]"
              height="300"
              src="/images/novedades/1.jpg"
              width="400"
            />
            <div className="bg-black/70 group-hover:opacity-90 transition-opacity text-white p-4 lg:p-6 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">
                  <FaCalendarAlt className="mr-1 inline-block h-4 w-4" />
                  12 de Junio, 2023
                </p>
              </div>
              <h3 className="font-semibold tracking-tight">
                Lanzamiento de Línea de Ropa Sostenible
              </h3>
              <p className="text-sm leading-none">
                Conoce nuestra nueva colección de ropa hecha con materiales
                reciclados.
              </p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">Ver Novedad</span>
            </Link>
            <img
              alt="Novedad 3"
              className="object-cover w-full aspect-[4/3]"
              height="300"
              src="/images/novedades/1.jpg"
              width="400"
            />
            <div className="bg-black/70 group-hover:opacity-90 transition-opacity text-white p-4 lg:p-6 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">
                  <FaCalendarAlt className="mr-1 inline-block h-4 w-4" />3 de
                  Julio, 2023
                </p>
              </div>
              <h3 className="font-semibold tracking-tight">
                Nuevo Servicio de Suscripción
              </h3>
              <p className="text-sm leading-none">
                Suscríbete y recibe nuestros productos de forma recurrente.
              </p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">Ver Novedad</span>
            </Link>
            <img
              alt="Novedad 4"
              className="object-cover w-full aspect-[4/3]"
              height="300"
              src="/images/novedades/1.jpg"
              width="400"
            />
            <div className="bg-black/70 group-hover:opacity-90 transition-opacity text-white p-4 lg:p-6 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">
                  <FaCalendarAlt className="mr-1 inline-block h-4 w-4" />
                  20 de Agosto, 2023
                </p>
              </div>
              <h3 className="font-semibold tracking-tight">
                Nuevo Programa de Lealtad
              </h3>
              <p className="text-sm leading-none">
                Acumula puntos por tus compras y canjéalos por premios.
              </p>
            </div>
          </div>
        </div>
      </div>
        <div className="flex justify-center mt-6">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="contenido/novedades"
          >
            Ver más
          </Link>
        </div>
    </section>
  );
};

export default Novedades;

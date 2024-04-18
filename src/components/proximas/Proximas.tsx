"use client";

import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";

const Proximas = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#aa1916]">
      <div className="grid gap-6 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Próximas Actividades
          </h2>
          <p className="max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-white">
            Echa un vistazo a nuestras próximas actividades y reserva tu lugar.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">Ver Actividad</span>
            </Link>
            <img
              alt="Actividad 1"
              className="[grid-area:stack] object-cover w-full aspect-[4/3]"
              height="300"
              src="https://picsum.photos/1280/720"
              width="400"
            />
            <div className="flex-1 [grid-area:stack] bg-black/70 group-hover:opacity-90 transition-opacity text-white p-4 lg:p-6 justify-end flex flex-col gap-2">
              <h3 className="font-semibold tracking-tight">
                Taller de Pintura al Óleo
              </h3>
              <p className="text-sm leading-none">
                Aprende técnicas de pintura al óleo en un ambiente relajado.
              </p>
              <p className="text-sm font-medium">
                <FaCalendarAlt className="mr-1 inline-block h-4 w-4" />
                25 de Mayo, 2023
              </p>
            </div>
          </div>
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">Ver Actividad</span>
            </Link>
            <img
              alt="Actividad 2"
              className="[grid-area:stack] object-cover w-full aspect-[4/3]"
              height="300"
              src="https://picsum.photos/1280/720"
              width="400"
            />
            <div className="flex-1 [grid-area:stack] bg-black/70 group-hover:opacity-90 transition-opacity text-white p-4 lg:p-6 justify-end flex flex-col gap-2">
              <h3 className="font-semibold tracking-tight">
                Taller de Cocina Vegana
              </h3>
              <p className="text-sm leading-none">
                Aprende a cocinar deliciosos platos veganos.
              </p>
              <p className="text-sm font-medium">
                <FaCalendarAlt className="mr-1 inline-block h-4 w-4" />
                12 de Junio, 2023
              </p>
            </div>
          </div>
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">Ver Actividad</span>
            </Link>
            <img
              alt="Actividad 3"
              className="[grid-area:stack] object-cover w-full aspect-[4/3]"
              height="300"
              src="https://picsum.photos/1280/720"
              width="400"
            />
            <div className="flex-1 [grid-area:stack] bg-black/70 group-hover:opacity-90 transition-opacity text-white p-4 lg:p-6 justify-end flex flex-col gap-2">
              <h3 className="font-semibold tracking-tight">
                Taller de Fotografía Nocturna
              </h3>
              <p className="text-sm leading-none">
                Aprende a capturar impresionantes fotos nocturnas.
              </p>
              <p className="text-sm font-medium">
                <FaCalendarAlt className="mr-1 inline-block h-4 w-4" />3 de
                Julio, 2023
              </p>
            </div>
          </div>
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">Ver Actividad</span>
            </Link>
            <img
              alt="Actividad 4"
              className="[grid-area:stack] object-cover w-full aspect-[4/3]"
              height="300"
              src="https://picsum.photos/1280/720"
              width="400"
            />
            <div className="flex-1 [grid-area:stack] bg-black/70 group-hover:opacity-90 transition-opacity text-white p-4 lg:p-6 justify-end flex flex-col gap-2">
              <h3 className="font-semibold tracking-tight">
                Taller de Meditación Guiada
              </h3>
              <p className="text-sm leading-none">
                Aprende técnicas de meditación para reducir el estrés.
              </p>
              <p className="text-sm font-medium">
                <FaCalendarAlt className="mr-1 inline-block h-4 w-4" />
                20 de Agosto, 2023
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Ver más
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Proximas;

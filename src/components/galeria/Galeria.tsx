import Link from "next/link";

const Galeria = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#E8E8E8]">
      <div className="grid gap-6 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Galería de Fotos
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Echa un vistazo a nuestra galería de fotos.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">Ver Foto</span>
            </Link>
            <img
              alt="Foto 1"
              className="object-cover w-full aspect-[4/3]"
              height="300"
              src="/images/Galeria/EDITADAS/1.png"
              width="400"
            />
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">Ver Foto</span>
            </Link>
            <img
              alt="Foto 2"
              className="object-cover w-full aspect-[4/3]"
              height="300"
              src="/images/Galeria/EDITADAS/10.png"
              width="400"
            />
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">Ver Foto</span>
            </Link>
            <img
              alt="Foto 3"
              className="object-cover w-full aspect-[4/3]"
              height="300"
              src="/images/Galeria/EDITADAS/22.png"
              width="400"
            />
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">Ver Foto</span>
            </Link>
            <img
              alt="Foto 4"
              className="object-cover w-full aspect-[4/3]"
              height="300"
              src="/images/Galeria/EDITADAS/16.png"
              width="400"
            />
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">Ver Foto</span>
            </Link>
            <img
              alt="Foto 5"
              className="object-cover w-full aspect-[4/3]"
              height="300"
              src="/images/Galeria/EDITADAS/12.png"
              width="400"
            />
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">Ver Foto</span>
            </Link>
            <img
              alt="Foto 6"
              className="object-cover w-full aspect-[4/3]"
              height="300"
              src="/images/Galeria/EDITADAS/30.png"
              width="400"
            />
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">Ver Foto</span>
            </Link>
            <img
              alt="Foto 7"
              className="object-cover w-full aspect-[4/3]"
              height="300"
              src="/images/Galeria/EDITADAS/27.png"
              width="400"
            />
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">Ver Foto</span>
            </Link>
            <img
              alt="Foto 8"
              className="object-cover w-full aspect-[4/3]"
              height="300"
              src="/images/Galeria/EDITADAS/8.png"
              width="400"
            />
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
    </section>
  );
};

export default Galeria;

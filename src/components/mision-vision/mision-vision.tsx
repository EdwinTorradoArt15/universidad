import logo_vision from "../../../public/images/vision_icon.png";
import logo_focus from "../../../public/images/focus_icon.png";
export default function MisionVisionComponent() {
  return (
    <>
      <div className="flex my-10 justify-center items-center">
        <h1 style={{ fontWeight: "bold", fontSize: "2rem" }}>
          Misión, Visión y valores
        </h1>
      </div>
      <br />

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 sm:flex sm:items-center sm:justify-between">
            <div>
              <div className="flex my-10 justify-center items-center">
                <h1 style={{ fontWeight: "bold", fontSize: "2rem" }}>Misión</h1>
              </div>
              <p className="text-gray-600 sm:text-base lg:text-lg">
                El Programa de Ingeniería Electromecánica de la UFPS está
                comprometido en la formación integral de profesionales
                competentes en el campo de la ingeniería, caracterizados por una
                sólida fundamentación en las áreas de, control y automatización
                de procesos, sistemas de conversión, distribución y uso final de
                la energía, enmarcado en un Proyecto Educativo fundamentado en
                el mejoramiento continuo de los procesos misionales; basados en
                los principios de excelencia académica, con responsabilidad y
                compromiso con los procesos de transformación de la región y del
                país ; contando con docentes de calidad y con una adecuada
                infraestructura física y tecnológica.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div></div>

      <div></div>
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 sm:flex sm:items-center sm:justify-between">
            <div>
              <div className="flex my-10 justify-center items-center">
                <h1 style={{ fontWeight: "bold", fontSize: "2rem" }}>Visión</h1>
              </div>
              <p className="text-gray-600 sm:text-base lg:text-lg text-justify">
                El Programa de Ingeniería Electromecánica de la UFPS está
                comprometido en la formación integral de profesionales
                competentes en el campo de la ingeniería, caracterizados por una
                sólida fundamentación en las áreas de, control y automatización
                de procesos, sistemas de conversión, distribución y uso final de
                la energía, enmarcado en un Proyecto Educativo fundamentado en
                el mejoramiento continuo de los procesos misionales; basados en
                los principios de excelencia académica, con responsabilidad y
                compromiso con los procesos de transformación de la región y del
                país ; contando con docentes de calidad y con una adecuada
                infraestructura física y tecnológica.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-12 md:px-6 md:py-16">
        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-950 flex items-center">
          <div className="bg-white-100 rounded-md flex items-center justify-center aspect-square w-1/2 h-full dark:bg-gray-800">
            <img
              alt="Rocket"
              className="w-full h-full object-cover"
              src={logo_vision.src}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
          </div>
          <div className="ml-6 flex-1">
            <h3 className="text-lg font-semibold">Nuestra Misión</h3>
            <p className="text-gray-500 dark:text-gray-400">
            El Programa de Ingeniería Electromecánica de la UFPS está
                comprometido en la formación integral de profesionales
                competentes en el campo de la ingeniería, caracterizados por una
                sólida fundamentación en las áreas de, control y automatización
                de procesos, sistemas de conversión, distribución y uso final de
                la energía, enmarcado en un Proyecto Educativo fundamentado en
                el mejoramiento continuo de los procesos misionales; basados en
                los principios de excelencia académica, con responsabilidad y
                compromiso con los procesos de transformación de la región y del
                país ; contando con docentes de calidad y con una adecuada
                infraestructura física y tecnológica.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-950 flex items-center">
          <div className="bg-white-100 rounded-md flex items-center justify-center aspect-square w-1/2 h-full dark:bg-gray-800">
            <img
              alt="Rocket"
              className="w-full h-full object-cover"
              src={logo_vision.src}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
          </div>
          <div className="ml-6 flex-1">
            <h3 className="text-lg font-semibold">Nuestra Misión</h3>
            <p className="text-gray-500 dark:text-gray-400">
            El Programa de Ingeniería Electromecánica de la UFPS está
                comprometido en la formación integral de profesionales
                competentes en el campo de la ingeniería, caracterizados por una
                sólida fundamentación en las áreas de, control y automatización
                de procesos, sistemas de conversión, distribución y uso final de
                la energía, enmarcado en un Proyecto Educativo fundamentado en
                el mejoramiento continuo de los procesos misionales; basados en
                los principios de excelencia académica, con responsabilidad y
                compromiso con los procesos de transformación de la región y del
                país ; contando con docentes de calidad y con una adecuada
                infraestructura física y tecnológica.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

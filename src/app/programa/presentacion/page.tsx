import React from "react";
import ProgramaLayout from "@/app/layouts/programaLayout";
import PresentacionPrograma from "@/components/presentacion/PresentaiconPrograma";

const Presentacion: React.FC = () => {
  return (
    <ProgramaLayout>
      {/* Contenido de la página */}
      <div
        className="mx-25"
        style={{ marginTop: "30px", textAlign: "justify" }}
      ></div>

      <PresentacionPrograma></PresentacionPrograma>

      <div  className="mx-25"   style={{ marginTop: "30px", textAlign: "justify" }}
      >
        <br />

        <div className="flex flex-col justify-center items-center">
          <h2 style={{ fontWeight: "bold", fontSize: "20px" }}>
            Información del Programa
          </h2>
          <table className="my-5">
            <tbody>
              <tr>
                <td className="border border-black px-4 py-2 font-bold">
                  NOMBRE DE LA INSTITUCIÓN
                </td>
                <td className="border border-black px-4 py-2">
                  Universidad Francisco de Paula Santander
                </td>
              </tr>
              <tr>
                <td className="border border-black px-4 py-2 font-bold">
                  CÓDIGO SNIES DEL PROGRAMA
                </td>
                <td className="border border-black px-4 py-2">4995</td>
              </tr>
              <tr>
                <td className="border border-black px-4 py-2 font-bold">
                  NOMBRE DEL PROGRAMA
                </td>
                <td className="border border-black px-4 py-2">
                  Ingeniería Electromecánica
                </td>
              </tr>
              <tr>
                <td className="border border-black px-4 py-2 font-bold">
                  TÍTULO QUE OTORGA
                </td>
                <td className="border border-black px-4 py-2">
                  Ingeniero Electromecánico
                </td>
              </tr>

              <tr>
                <td className="border border-black px-4 py-2 font-bold">
                UBICACIÓN DEL PROGRAMA
                </td>
                <td className="border border-black px-4 py-2">
                Cúcuta – Norte de Santander
                </td>
              </tr>

              <tr>
                <td className="border border-black px-4 py-2 font-bold">
                NIVEL DEL PROGRAMA
                </td>
                <td className="border border-black px-4 py-2">
                Universitario
                </td>
              </tr>

              <tr>
                <td className="border border-black px-4 py-2 font-bold">
                METODOLOGÍA
                </td>
                <td className="border border-black px-4 py-2">
                  Presencial
                </td>
              </tr>

              <tr>
                <td className="border border-black px-4 py-2 font-bold">
                NORMA INTERNA DE CREACIÓN
                </td>
                <td className="border border-black px-4 py-2">
                Acuerdo 053 del 04 de junio de 1997.
                </td>
              </tr>

              <tr>
                <td className="border border-black px-4 py-2 font-bold">
                INSTANCIA QUE EXPIDE LA NORMA
                </td>
                <td className="border border-black px-4 py-2">
                Consejo Superior Universitario
                </td>
              </tr>

              <tr>
                <td className="border border-black px-4 py-2 font-bold">
                DURACIÓN ESTIMADA DEL PROGRAMA
                </td>
                <td className="border border-black px-4 py-2">
                Diez (10) Semestres Académicos
                </td>
              </tr>

              <tr>
                <td className="border border-black px-4 py-2 font-bold">
                PERIODICIDAD DE LA ADMISIÓN
                </td>
                <td className="border border-black px-4 py-2">
                Semestral
                </td>
              </tr>
              <tr>
                <td className="border border-black px-4 py-2 font-bold">
                DIRECCIÓN SEDE PRINCIPAL
                </td>
                <td className="border border-black px-4 py-2">
                DIRECCIÓN SEDE PRINCIPAL	Avenida Gran Colombia No. 12E-96 Barrio Colsag, San José de Cúcuta - Colombia
                </td>
              </tr>

              <tr>
                <td className="border border-black px-4 py-2 font-bold">
                TELÉFONO SEDE PRINCIPAL
                </td>
                <td className="border border-black px-4 py-2">
                5776655 Ext.178
                </td>
              </tr>

              <tr>
                <td className="border border-black px-4 py-2 font-bold">
                CORREO SEDE PRINCIPAL
                </td>
                <td className="border border-black px-4 py-2">
                ingelectromecanica@ufps.edu.co
                </td>
              </tr>

              <tr>
                <td className="border border-black px-4 py-2 font-bold">
                FECHA DE INICIO DEL PROGRAMA
                </td>
                <td className="border border-black px-4 py-2">
                1999
                </td>
              </tr>

              <tr>
                <td className="border border-black px-4 py-2 font-bold">
                NÚMERO DE CREDITOS ACADÉMICOS
                </td>
                <td className="border border-black px-4 py-2">
                158
                </td>
              </tr>

              <tr>
                <td className="border border-black px-4 py-2 font-bold">
                REGISTRO ICFES
                </td>
                <td className="border border-black px-4 py-2">
                12094621537540011000
                </td>
              </tr>

              <tr>
                <td className="border border-black px-4 py-2 font-bold">
                RESOLUCIÓN DE REGISTRO CALIFICADO
                </td>
                <td className="border border-black px-4 py-2">
                002675 del 21 de febrero de 2020
                </td>
              </tr>




            </tbody>
          </table>
        </div>

        <div className="flex my-10 justify-center items-center">
          <h1 style={{ fontWeight: "bold", fontSize: "2rem" }}>
            Misión, Visión y valores
          </h1>
        </div>

        <div className="flex my-10 justify-center items-center">
          <h2 style={{ fontWeight: "bold", fontSize: 16 }}>Misión</h2>
        </div>

        <p>
          El Programa de Ingeniería Electromecánica de la UFPS está comprometido
          en la formación integral de profesionales competentes en el campo de
          la ingeniería, caracterizados por una sólida fundamentación en las
          áreas de, control y automatización de procesos, sistemas de
          conversión, distribución y uso final de la energía, enmarcado en un
          Proyecto Educativo fundamentado en el mejoramiento continuo de los
          procesos misionales; basados en los principios de excelencia
          académica, con responsabilidad y compromiso con los procesos de
          transformación de la región y del país ; contando con docentes de
          calidad y con una adecuada infraestructura física y tecnológica.
        </p>
        <br />

        <div className="flex my-10 justify-center items-center">
          <h2 style={{ fontWeight: "bold", fontSize: 16 }}>Visión</h2>
        </div>

        <p>
          En el año 2027, el Programa de Ingeniería Electromecánica de la UFPS
          alcanzará niveles de alta calidad, enmarcados en procesos continuos de
          mejoramiento, líder en la formación de ingenieros competentes en las
          áreas de, control y automatización de procesos, sistemas de
          conversión, distribución y uso final de la energía, comprometidos con
          el desarrollo de la región y del país, afrontando las situaciones
          cambiantes del medio. Apoyados en una estructura curricular flexible,
          con un equipo administrativo idóneo, con docentes de calidad, con una
          adecuada infraestructura física y tecnológica.
        </p>
        <br />
      </div>
    </ProgramaLayout>
  );
};

export default Presentacion;

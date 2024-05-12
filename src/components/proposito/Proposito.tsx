'use client'
import React, { useState , ReactNode , ComponentType } from "react";
import  VerMasButton  from "@/components/ui/button"
import { FaRocket } from "react-icons/fa";

import { FaPersonRays } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { LuBrainCircuit } from "react-icons/lu";
import { PiLightbulbFilamentThin, PiPersonLight } from "react-icons/pi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { GoGoal } from "react-icons/go";




    interface Content {
        title: string;
        component: ComponentType<any>;
      }
      
      export default function Proposito() {
        const [modalOpen, setModalOpen] = useState(false);
        const [modalContent, setModalContent] = useState<Content | null>(null);
      
        const openModal = (content: Content) => {
          setModalContent(content);
          setModalOpen(true);
        };
      
        const closeModal = () => {
          setModalOpen(false);
          setModalContent(null);
        };
      
        const contenidoLargo: Record<string, Content> = {
          propositos_humanos: {
            title: 'Propositos Humanos',
            component: React.lazy(() => import('./propositos_humanos'))
          },
          propositos_sociales: {
            title: 'Propositos Sociales',
            component: React.lazy(() => import('./propositos_sociales'))
          },
          propositos_intelectuales: {
            title: 'Propositos Intelectuales',
            component: React.lazy(() => import('./propositos_intelectuales'))
          },
          propositos_profesionales: {
            title: 'Propositos Profesionales',
            component: React.lazy(() => import('./propositos_profesionales'))
          },
          // Otros contenidos largos
        };


  return (
    <>
      <section className="w-full py-12 md:py-16">
        <div className="container-fluid grid gap-6 px-4 md:px-6">
          <div className="bg-white rounded-lg shadow-lg dark:bg-gray-950 flex flex-row items-center justify-between p-6 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center gap-4">
              <div className="rounded-md flex items-center justify-center aspect-square w-12 h-12 dark:bg-gray-800">
                
                < GoGoal className="w-20 h-20" ></GoGoal>
              </div>
              <h2 className="text-lg font-semibold">Propositos del programa</h2>
              <p className="text-gray-500 dark:text-gray-400 animate-fadeIn">
              El comité curricular del programa de Ingeniería Electromecánica de Universidad Francisco de Paula Santander, mediante un estudio de impacto, identificó las competencias básicas a nivel regional, nacional e internacional, y establece como propósito, formar profesionales con un perfil integral, competentes en el ámbito de su profesión, orientados al aprendizaje permanente, con calidad humana y socialmente responsables, con el propósito de que atiendan las necesidades del sector productivo. 
              A continuación, se establecen los propósitos particulares que orientarán y guiarán el programa de Ingeniería Electromecánica de la Universidad Francisco de Paula Santander

                </p>
            </div>
          </div>
        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg dark:bg-gray-950 flex flex-col items-center justify-center p-6 hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-full h-1/2 dark:bg-gray-800 animate-pulse">
                <PiPersonLight  className="w-20 h-20"
                  height={32}
                  
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width={32} ></PiPersonLight>
                


              </div>
              <div className="mt-6 flex-1 w-full text-center">
                <h3 className="text-lg font-semibold animate-fadeIn">Propositos Humanos</h3>
                <p className="text-gray-500 dark:text-gray-400 animate-fadeIn">
                Desarrollar profesionales éticos, capacitados en relaciones interpersonales, responsables de su labor y comprometidos con la construcción de una sociedad justa y equitativa.
                </p>
              </div>
              <div className="mt-6">
                <VerMasButton onClick={() => openModal(contenidoLargo.propositos_humanos)}>
                </VerMasButton>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg dark:bg-gray-950 flex flex-col items-center justify-center p-6 hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-full h-1/2 dark:bg-gray-800 animate-pulse">
              <HiOutlineUserGroup  className="w-20 h-20"
                  height={32}
                  
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width={32} ></HiOutlineUserGroup>
              </div>
              <div className="mt-6 flex-1 w-full text-center">
                <h3 className="text-lg font-semibold animate-fadeIn">Propositos sociales</h3>
                <p className="text-gray-500 dark:text-gray-400 animate-fadeIn">
                 
                Los propósitos sociales del programa de Ingeniería Electromecánica buscan formar profesionales comprometidos con el servicio a la comunidad
                </p>
              </div>
              <div className="mt-6">
              <VerMasButton onClick={() => openModal(contenidoLargo.propositos_sociales)}>
                </VerMasButton>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg dark:bg-gray-950 flex flex-col items-center justify-center p-6 hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-full h-1/2 dark:bg-gray-800 animate-pulse">
              <PiLightbulbFilamentThin  className="w-20 h-20"
                  height={32}
                  
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width={32} ></PiLightbulbFilamentThin>
              </div>
              <div className="mt-6 flex-1 w-full text-center">
                <h3 className="text-lg font-semibold animate-fadeIn">Propositos Intelectuales</h3>
                <p className="text-gray-500 dark:text-gray-400 animate-fadeIn">
                Impulsar el uso óptimo de herramientas y técnicas actualizadas,  para formar profesionales con conocimientos en el campo de la ingeniería electromecánica
                </p>
              </div>
              <div className="mt-6">
              <VerMasButton onClick={() => openModal(contenidoLargo.propositos_intelectuales)}>
                </VerMasButton>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg dark:bg-gray-950 flex flex-col items-center justify-center p-6 hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-full h-1/2 dark:bg-gray-800 animate-pulse">
              <LuBrainCircuit   className="w-20 h-20"
                  height={32}
                  
                  style={{
                    aspectRatio: "62/62",
                    objectFit: "cover",
                  }}
                  width={64} ></LuBrainCircuit >
              </div>
              <div className="mt-6 flex-1 w-full text-center">
                <h3 className="text-lg font-semibold animate-fadeIn">Propositos Profesionales</h3>
                <p className="text-gray-500 dark:text-gray-400 animate-fadeIn">
                Capacitar ingenieros para liderar empresas tecnológicas, resolver problemas complejos y mejorar la calidad de vida, fomentando la educación continua y la difusión del conocimiento.
                </p>
              </div>
              <div className="mt-6">
              <VerMasButton onClick={() => openModal(contenidoLargo.propositos_profesionales)}>
                </VerMasButton>
              </div>
            </div>
          </div>
      
      
        </div>
      </section>
      <div>
       
      
      </div>
      {modalOpen && modalContent && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg">
      {modalContent.title && (
        <h2 className="text-xl font-semibold mb-4">{modalContent.title}</h2>
      )}
      {modalContent.component && (
        <modalContent.component />
      )}
      <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50" onClick={closeModal}>
        Cerrar
      </button>
    </div>
  </div>
)}  

                  

    </>
  )
}


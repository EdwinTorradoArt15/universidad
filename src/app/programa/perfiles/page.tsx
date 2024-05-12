import React from "react";
import ProgramaLayout from "@/app/layouts/programaLayout";
import PerfilesComponent from "@/components/perfiles/perfiles";

const Perfiles: React.FC = () => {
  return (
    <ProgramaLayout> 
      {/* Contenido de la página */}

      <div
        className="mx-25"
        style={{ marginTop: "30px", textAlign: "justify" }}
      >
        <br />

    <PerfilesComponent></PerfilesComponent>

      </div>
    </ProgramaLayout>
  );
};

export default Perfiles;

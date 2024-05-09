// import { Header } from "@/components/header";
import { FirstNavbar } from "@/components/navbar";
import { Sliders } from "@/components/sliders";
import { Novedades } from "@/components/novedades";
import { Proximas } from "@/components/proximas";
import { Galeria } from "@/components/galeria";
import { Footer } from "@/components/footer";

const page = () => {
  return (
    <>
      <FirstNavbar />
      {/* <Header /> */}
      {/* <SecondNavbar /> */}
      <Sliders/>
      <Novedades/>
      <Proximas/>
      <Galeria/>
      <Footer/>
    </>
  );
};

export default page;

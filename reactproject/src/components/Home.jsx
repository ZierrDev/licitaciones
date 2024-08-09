import Divition from "../containers/Divition";
import Header from "../containers/Header";
import ImagesCarousel from "./ImagesCarousel";

const Home = () => {
  return (
    <div id='home'>
      <Header>
        <ImagesCarousel />
        <h2 className='italic text-3xl pb-20 pt-8'>
          &quot;Confianza y transparencia&quot;
        </h2>
        <Divition className='bg-aqua-teal-900 flex items-center flex-col py-20'>
          <div className='flex flex-col justify-center items-center md:flex-row md:items-start'>
            <div className='flex flex-col px-8 md:px-16 pb-16 md:pb-0'>
              <h1 className='text-5xl pl-8 pb-4'>Misión</h1>
              <p className='text-xl'>
                Proveer los servicios de consultoría, asesoría y acompañamiento,
                de excelente calidad, durante el proceso para la presentación de
                ofertas con las diferentes entidades Públicas y Privadas, así
                como los diferentes trámites ante las cámaras de comercio a
                nivel nacional.
              </p>
            </div>
            <div className='flex flex-col px-8 md:px-16'>
              <h1 className='text-5xl pl-8 pb-4'>Visión</h1>
              <p className='text-xl'>
                E&S Consultorías y Asesorías S.A.S. como proveedor de servicios
                de consultoría, asesoría y acompañamiento, para el 2030 espera:
                Ser líder en la asesoría y el acompañamiento para la
                presentación de ofertas con Entidad públicas y privadas. Ser
                líder en la asesoría para los diferentes trámites ante las
                cámaras de comercio a nivel nacional.
              </p>
            </div>
          </div>
        </Divition>
      </Header>
    </div>
  );
};

export default Home;

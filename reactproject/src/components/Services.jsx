import React from "react";
import Divition from "../containers/Divition";

const services = [
  {
    title:
      "Inscripción de la persona jurídica o natural en las plataformas de contratación pública y/o privadas.",
    price: "$precio",
  },
  {
    title: "Análisis e Interpretación de pliegos.",
    price: "$precio",
  },
  {
    title: "Análisis de la viabilidad económica y operativa.",
    price: "$precio",
  },
  {
    title: "Elaboración y presentación de propuesta.",
    price: "$precio",
  },
  {
    title: "Apoyo en la consecución de perfiles profesionales.",
    price: "$precio",
  },
  {
    title: "Análisis para el cumplimiento financiero y organizacional.",
    price: "$precio",
  },
  {
    title: "Seguimiento al proceso de evaluación de ofertas.",
    price: "$precio",
  },
  {
    title: "Elaboración de observaciones al pliego de condiciones.",
    price: "$precio",
  },
  {
    title:
      "Observaciones al informe de evaluación, subsanaciones, réplicas, entre otras.",
    price: "$precio",
  },
  {
    title: "Acompañamiento a las audiencias.",
    price: "$precio",
  },
  {
    title:
      "Inscripción, Renovación y/o Actualización del Registro Único de Proponentes, ante las cámaras de comercio a nivel nacional.",
    price: "$precio",
  },
  {
    title:
      "Trámite para la solicitud de expedición y/o renovación del Certificado de Vinculación de Trabajadores con Discapacidad, ante el Ministerio del Trabajo.",
    price: "$precio",
  },
];

const Services = () => {
  return (
    <div id='services'>
      <Divition className='bg-aqua-teal-800 flex flex-col items-center py-20'>
        <h1 className='text-5xl pb-16'>Servicios</h1>
        <div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4'>
          {services.map(({ title, price }, i) => {
            return (
              <div
                key={i}
                className='bg-aqua-teal-50 text-aqua-teal-950 max-w-60 w-full max-h-[360px] min-h-[360px] flex flex-col items-center justify-between rounded-lg'
              >
                <h2 className='text-xl text-center p-4 font-bold'>{title}</h2>
                <p className='text-center p-4'>Precio: {price}</p>
              </div>
            );
          })}
        </div>
      </Divition>
    </div>
  );
};

export default Services;

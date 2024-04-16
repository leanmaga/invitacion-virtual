import { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, textVariant } from '../utils/motion';
import regalo from '../../src/assets/images/accesorios/regalo.png';
import ubicacion from '../../src/assets/images/accesorios/ubicacion.png';
import calendario from '../../src/assets/images/accesorios/calendario.png';

const Ubicacion = () => {
  const [mostrarPopup, setMostrarPopup] = useState(false);

  return (
    <section className="w-full h-screen relative">
      {/* Ubicación */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="w-full h-screen flex flex-col items-center justify-center text-center bg-hero-children bg-center bg-cover bg-no-repeat">
          <motion.img variants={textVariant(1.5)} src={ubicacion} className="w-[50%] h-auto lg:w-[400px] lg:h-[400px]" />
          <p className="m-2 p-4">
            El evento se realizará el Sabado 00 de Enero a las 21.00 horas en (Dirección del Evento). Tocá
            el botón de abajo para recibir las indicaciones para llegar. ¡Te esperamos!
          </p>
          <button className="btn-front boton rounded-full py-2 px-4 bg-[#10c2ef] text-white font-semibold shadow-md hover:bg-[#60adc5] ">
            <a target="_blank" rel="noreferrer" href="#">
              COMO LLEGAR
            </a>
          </button>
        </div>
      </motion.div>

      {/* Regalo */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="w-full h-[300px] flex flex-col items-center justify-center text-center bg-[#0f172a]">
          <motion.img variants={textVariant(1.5)} alt="regalo" src={regalo} className="w-[100px] h-auto pt-2 m-2" />
          <p className="text-white pb-4 m-2">Si deseás realizarme un regalo...</p>
          <button
            className="boton rounded-full py-2 px-4 bg-[#10c2ef] text-white font-semibold shadow-md hover:bg-[#60adc5]"
            onClick={() => setMostrarPopup(true)}
          >
            VER DATOS BANCARIOS
          </button>
        </div>
      </motion.div>

      {/* Popup */}
      {mostrarPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 max-w-md">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Datos Bancarios</h2>
              <button className="text-gray-500 hover:text-gray-700" onClick={() => setMostrarPopup(false)}>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-4 flex items-center">
              <input type="text" value="CBU del Cumpleañero/a" readOnly className="border border-gray-300 rounded-md p-2 flex-grow" />
              <button
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={() => {
                  navigator.clipboard.writeText("CBU del Cumpleañero/a");
                  setMostrarPopup(false);
                }}
              >
                Copiar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmación de asistencia */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="container w-full h-screen flex flex-col items-center justify-center text-center">
          <motion.img variants={textVariant(1.5)} alt="calendario" src={calendario} className="w-[50%] h-auto lg:w-[400px] lg:h-[400px]" />
          <h1 className="text-3xl m-2 p-4">CONFIRMACIÓN DE ASISTENCIA</h1>
          <p className="text-black pb-4 m-2">Esperamos que seas parte de esta gran celebración. ¡Confirmanos tu asistencia!</p>
          <button className="boton uppercase m-4 rounded-full py-2 px-4 bg-[#10c2ef] text-white font-semibold shadow-md hover:bg-[#60adc5] ">
            <a href="https://api.whatsapp.com/send?phone=5491127764823&text=Hola%20,estaré%20encantado%20de%20ir%20a%20tu%20cumpleaños." target="_blank" rel="noreferrer">
              CONFIRMAR ASISTENCIA
            </a>
          </button>
          <button className="boton uppercase m-4 rounded-full py-2 px-4 bg-[#10c2ef] text-white font-semibold shadow-md hover:bg-[#60adc5] ">
            <a href="https://calendar.google.com/calendar/" target="_blank" rel="noreferrer">
              AGENDAR EVENTO
            </a>
          </button>
        </div>
      </motion.div>

    </section>
  );
};

export default Ubicacion;

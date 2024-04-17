
import igdorado from '../../src/assets/images/accesorios/igdorado.png'
import musica from '../../src/assets/images/accesorios/musica.png'

const Redes = () => {
  return (
    <section className="w-full h-screen relative">
     
      

      {/*Instagram*/}

      <div className="w-full h-screen flex flex-col items-center justify-center text-center bg-hero-children bg-center bg-cover bg-no-repeat">

        <img src={igdorado} alt="anillos" className='w-[50%] h-auto lg:w-[400px] lg:h-[400px]'/>


        
        <h1 className="text-5xl font-bold m-2 p-4 " translate="no">
          #15more2024
        </h1>
        
        <p className="text-black pb-4 m-2">¡Preparate para mi gran día! Ya podés etiquetarme en Instagram con el hashtag en tus fotos o videos.</p>
      
        <button className="boton uppercase m-4 rounded-full py-2 px-4 bg-[#10c2ef] text-white font-semibold shadow-md hover:bg-[#60adc5] focus:ring-2 focus:ring-[#422006] focus:ring-opacity-75">
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/">
            VER FOTOS EN INSTAGRAM
          </a>
        </button>
      
      </div>

      {/*List player*/}

      <div className="container w-full h-screen flex flex-col items-center justify-center text-center">
        
        <img src={musica} alt="musica" className='w-[50%] h-auto lg:w-[400px] lg:h-[400px]'/>

        <h1 className="text-3xl m-2 p-4 ">
          ¿QUÉ CANCIONES NO PUEDEN FALTAR?
        </h1>
            
        <p className="t m-2 p-4">
          ¡Ayudame sugiriendo las canciones que pensás que no pueden faltar en la fiesta!
        </p>
        
        <button className="boton rounded-full py-2 px-4 bg-[#10c2ef] text-white font-semibold shadow-md hover:bg-[#60adc5] focus:ring-2 focus:ring-[#422006] focus:ring-opacity-75">
          <a target="_blank" rel="noreferrer" href="https://music.youtube.com/playlist">
            SUGERIR CANCIÓN
          </a>
        </button>
        
      </div>

      {/*mensaje*/}

      <div className="w-full h-[200px] flex flex-col items-center justify-center text-center bg-[#0f172a]">
        <div className="cuenta__regresiva">
          <h3 className="text-white m-4  p-4">GRACIAS POR ACOMPAÑARME EN ESTE MOMENTO TAN ESPECIAL, TE VEO EN LA FIESTA</h3>
        </div>
      </div>


    </section>
  );
};

export default Redes;
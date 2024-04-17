import { useEffect, useState } from 'react';
import MusicPlayer from './MusicPlayer';

import imagen3 from '/assets/images/3.jpg';
import imagen4 from '/assets/images/4.jpg';
import imagen5 from '/assets/images/5.jpg';
import imagen1 from '/assets/images/1.jpg';
import imagen2 from '/assets/images/2.jpg';
import imagen6 from '/assets/images/6.jpg';

import { motion } from 'framer-motion';

import { staggerContainer, textVariant } from '../utils/motion';


const GalleryTwo = () => {
  const bgMusicURL = '/rihana.mp3';
  const [expandedImage, setExpandedImage] = useState(null);

  useEffect(() => {
    // Carga el script cuando el componente se monte
    const script = document.createElement('script');
    script.src = '/3dcarousel.js'; // Ruta al archivo JS en tu carpeta pública
    script.async = true;
    document.body.appendChild(script);

    // Limpia el script cuando el componente se desmonte
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Asegúrate de que este efecto solo se ejecute una vez

  const handleImageClick = (imageUrl) => {
    if (expandedImage === imageUrl) {
      setExpandedImage(null); // Contrae la imagen si ya está expandida
    } else {
      setExpandedImage(imageUrl); // Expande la imagen si no está expandida
    }
  };

  return (
    <div className="boxgalleryfather h-screen w-full contenedor">
      <div className="boxgallery w-full h-screen ">
        <div id="drag-container">
          <div id="spin-container">
            <img src={imagen3} alt="imagen3" onClick={() => handleImageClick(imagen3)}/>
            <img src={imagen4} alt="imagen4" onClick={() => handleImageClick(imagen4)}/>
            <img src={imagen5} alt="imagen5" onClick={() => handleImageClick(imagen5)}/>
            <img src={imagen1} alt="imagen6" onClick={() => handleImageClick(imagen1)}/>
            <img src={imagen2} alt="imagen7" onClick={() => handleImageClick(imagen2)}/>
            <img src={imagen6} alt="imagen8" onClick={() => handleImageClick(imagen6)}/>
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className={`w-full h-screen  items-center 
              justify-center text-start`}
            >
              <motion.h1 variants={textVariant(1.1)}  className='text-start text-5xl left-[-50%] m-0 name more leading-none ' translate="no">
                Name
              </motion.h1>
            </motion.div>
          </div>
          <div id="ground"></div>
        </div>
      </div>
      <MusicPlayer src={bgMusicURL} />
      {expandedImage && (
        <div className="expanded-image-container" onClick={() => setExpandedImage(null)}>
          <img src={expandedImage} alt="expanded-image" className="expanded-image"/>
        </div>
      )}
    </div>
  );
};

export default GalleryTwo;
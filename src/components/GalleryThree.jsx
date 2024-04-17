import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { staggerContainer, textVariant } from '../utils/motion';

import video1 from '/assets/videos/1.mp4';
import video2 from '/assets/videos/2.mp4';
import video3 from '/assets/videos/3.mp4';
import video4 from '/assets/videos/4.mp4';
import video5 from '/assets/videos/5.mp4';
import video6 from '/assets/videos/6.mp4';

const GalleryThree = () => {

  const [expandedVideo, setExpandedVideo] = useState(null);

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

  const handleVideoClick = (videoUrl) => {
    if (expandedVideo === videoUrl) {
      setExpandedVideo(null); // Contrae el video si ya está expandido
    } else {
      setExpandedVideo(videoUrl); // Expande el video si no está expandido
    }
  };

  return (
    <div className="boxgalleryfather h-screen w-full contenedor">
      <div className="boxgallery w-full h-screen ">
        <div id="drag-container">
          <div id="spin-container">
            <video src={video1} onClick={() => handleVideoClick(video1)} controls/>
            <video src={video2} onClick={() => handleVideoClick(video2)} controls/>
            <video src={video3} onClick={() => handleVideoClick(video3)} controls/>
            <video src={video4} onClick={() => handleVideoClick(video4)} controls/>
            <video src={video5} onClick={() => handleVideoClick(video5)} controls/>
            <video src={video6} onClick={() => handleVideoClick(video6)} controls/>
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
      {expandedVideo && (
        <div className="expanded-video-container" onClick={() => setExpandedVideo(null)}>
          <video src={expandedVideo} controls className="expanded-video"/>
        </div>
      )}
    </div>
  );
};

export default GalleryThree
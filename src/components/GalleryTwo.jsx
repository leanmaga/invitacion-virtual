import { useEffect } from 'react';
import MusicPlayer from './MusicPlayer';

const GalleryTwo = () => {

    const bgMusicURL = '/rihana.mp3'

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

  return (
    <div className="boxgalleryfather h-screen w-full ">
      <div className="boxgallery w-full h-screen ">
        <div id="drag-container">
          <div id="spin-container">
            <img src="https://images.pexels.com/photos/206395/pexels-photo-206395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
            <img src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
            <img src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
            <img src="https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
            <img src="https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
            <img src="https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
        
            <a target="_blank"  rel="noreferrer" href="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg">
              <img src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
            </a>
    
            <video controls autoPlay loop>
              <source src="https://player.vimeo.com/external/322244668.sd.mp4?s=338c48ac2dfcb1d4c0689968b5baf94eee6ca0c1&profile_id=165&oauth2_token_id=57447761" type="video/mp4"/>
            </video>
    
            <p>Mis 15 Años</p>
          </div>
            
          <div id="ground"></div>

        </div>
      </div>
        


  
      <MusicPlayer src={bgMusicURL} />
    
    </div>
  
  );
};

export default GalleryTwo;
// components/MusicPlayer.js
import { useEffect, useRef } from 'react';

const MusicPlayer = ({ src }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audioElement = audioRef.current;

    // Reproduce la música automáticamente cuando el componente se monta
    audioElement.play().catch(error => {
      // Si el autoplay falla, puedes manejar el error aquí
      console.error('Autoplay failed:', error);
    });

    return () => {
      // Detiene la música cuando el componente se desmonta
      audioElement.pause();
    };
  }, []); // Se ejecuta una vez al montar el componente

  return (
    <audio ref={audioRef} src={src} loop />
  );
};

export default MusicPlayer;

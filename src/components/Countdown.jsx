import  { useState, useEffect } from 'react';

function Countdown() {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const targetDate = new Date('2024-04-06T21:00:00');

    function updateCountdown() {
      const currentDate = new Date();
      const timeDifference = targetDate - currentDate;

      if (timeDifference <= 0) {
        setCountdown('¡El evento finalizó!');
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Rellenar con ceros a la izquierda si es necesario
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        setCountdown(`${days}d ${formattedHours}h ${formattedMinutes}m ${formattedSeconds}s`);
      }
    }

    const intervalId = setInterval(updateCountdown, 1000);

    updateCountdown(); // Llamar a la función una vez para mostrar el contador desde el principio

    return () => clearInterval(intervalId); // Limpiar intervalo cuando el componente se desmonte
  }, []);

  return (
    <div className="countdown-container w-full">
      <div className="countdown-section ">
        <span>{countdown.split(' ')[0]}</span>
       
      </div>
      <div className="countdown-section ">
        <span>{countdown.split(' ')[1]}</span>
        
      </div>
      <div className="countdown-section ">
        <span>{countdown.split(' ')[2]}</span>
       
      </div>
      <div className="countdown-section ">
        <span>{countdown.split(' ')[3]}</span>
        
      </div>
    </div>
  );
}

export default Countdown;

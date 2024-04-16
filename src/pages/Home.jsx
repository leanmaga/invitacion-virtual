
import { motion } from 'framer-motion';
import { staggerContainer, textVariant } from '../utils/motion';
import styles from '../styles';
import Countdown from "../components/Countdown";
import corona from '../assets/images/textures/corona.png'

const Home = () => {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center content-center">
      
      
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} w-full h-screen flex flex-col items-center 
      justify-center text-center`}
      > 
        <div className={`${styles.innerWidth} w-full h-screen bg-hero-pattern bg-center bg-cover bg-no-repeat hero absolute`} ></div>
      
        <div className='w-full h-screen flex flex-col items-center justify-center text-center'> 
        
          <h1 className="font-bold  libre-baskerville-regular-italic name4 flex ">
          Mis Quince Años
          </h1>

          <h1 className="font-bold name3 uppercase absolute">15</h1>
        
          <motion.img variants={textVariant(1.5)}  translate="no" src={corona} className="corona absolute">
          </motion.img>
        
        
        
          <motion.h1 variants={textVariant(1.1)} className='text-5xl name leading-none ' translate="no">
           Nombre
          </motion.h1>
        
          <h1 className="font-bold libre-baskerville-regular-italic name4 p-4">00 Enero 21:00</h1>
        </div>
       
        {/*contador*/}

        <div className="cuenta__regresiva w-full">
          <h3 className="libre-baskerville-regular-italic link">Faltan:</h3>
          <h1 className="link w-full p-4"><Countdown/></h1>
        </div>

      </motion.div> 
          
    </section>
  );
};

export default Home;
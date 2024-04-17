import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import {  Home, Ubicacion, Fotos, Videos, Redes } from "./pages";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/ubicación' element={<Ubicacion />} />
                  <Route path='/redes' element={<Redes />} />
                  <Route path='/fotos' element={<Fotos />} />
                  <Route path='/videos' element={<Videos />} />
                </Routes>
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='header flex justify-around'>
     
      <div>

        <NavLink to='/'>
          <h2 className='logo w-18 h-18 object-contain text-slate-200 font-bold text-lg name' translate="no">15años</h2>
        </NavLink>

      </div>

      <div>

        <nav className='flex text-lg gap-7 font-medium'>
        
          <NavLink to='/ubicacion' className={({ isActive }) => isActive ? "text-blue-400" : " text-black link"}>
            Ubicacíon
          </NavLink>
          <NavLink to='/contacto' className={({ isActive }) => isActive ? "text-blue-400" : " text-black link"}>
            Redes
          </NavLink>
          <NavLink to='/book' className={({ isActive }) => isActive ? "text-blue-400" : " text-black link"}>
            Book
          </NavLink>


        </nav>

      </div>
      
    </header>
  );
};

export default Navbar;
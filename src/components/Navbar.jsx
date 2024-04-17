import { NavLink } from "react-router-dom";
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Ubicación' },
  { name: 'Redes' },
  { name: 'Fotos' },
  { name: 'Videos' },
]

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      
      <nav className="flex items-center justify-between p-6 lg:px-8 text-white">
        <div className="flex lg:flex-1 items-center">
          <NavLink to='/' className="-m-1.5 p-1.5">
            <span className="sr-only">15 de Nombre</span>
            <h2 className='logo w-auto h-8 object-contain text-slate-200 font-bold text-lg name' translate="no">Nombre 15 años</h2>
          </NavLink>
        </div>
        <div className="hidden lg:flex lg:flex-row-reverse lg:gap-x-6">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={`/${item.name}`}
              exact
              className="text-lg font-semibold leading-6 link relative py-4"
              activeClassName="text-blue-400"
            >
              {item.name}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-[#2FABD8]" />
            </NavLink>
          ))}
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full h-screen overflow-y-auto bg-[#111] text-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NavLink to='/' className="-m-1.5 p-1.5">
              <span className="sr-only">15 de Nombre</span>
              <h2 className='logo w-auto h-8 object-contain text-slate-200 font-bold text-lg name' translate="no">Nombre 15 años</h2>
            </NavLink>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="py-14 mt-4 flow-root">
            <div className="py-14 divide-y divide-gray-500/10">
              <div className="flex flex-col h-screen w-full space-y-14 py-6">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={`/${item.name}`}
                    exact
                    className="text-lg font-semibold leading-6 link relative text-center p-4 w-full"
                    activeClassName="text-blue-400"
                  >
                    {item.name}
                    <div className="absolute inset-x-0 bottom-0 h-[1px] bg-slate-200" />
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
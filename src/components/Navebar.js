
import { useAuth } from "../context/AuthContext";

export function Navebar() {
const { logout, user } = useAuth();

  console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (    
      
    <nav className="flex justify-around items-center flex-wrap bg-gray-800 p-3 rounded-b-10">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
                <span className="font-semibold text-xl tracking-tight">Fly me to the Moon</span>
        </div>
        <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div className="w-screen block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm justify-between lg:flex-grow">
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    Inicio
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    Tienda
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                    Acerca de nosotros
                </a>
                <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                    <span className="ml-2">Mi cuenta</span>
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/></svg>
                    
                </a>
                <a href="#" className="inline-block text-sm leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                    <button
                    className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black"
                    onClick={handleLogout}
                    >
                    Cerrar sesión
                    </button>
                </a>
            </div>
        </div>
    </nav>
  );
}
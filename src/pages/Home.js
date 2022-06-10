import { Navebar } from "../components/Navebar";
import { useAuth } from "../context/AuthContext";

export function Home() {
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
    <>
    <div className="">
      <div className="bg-cover bg-center w-screen">
        <Navebar />
      </div>
        <div className="w-full max-w-xs m-auto text-black justify-start mt-11">
        
          <div className="bg-white bg-contain shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <p className="text-xl mb-4">Bienvenido <br /> {user.displayName || user.displayEmail}</p>
            <button
              className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black"
              onClick={handleLogout}
            >
              Cerrar sesión
            </button>
          </div>
        </div>
    </div>
  </>
  );
}
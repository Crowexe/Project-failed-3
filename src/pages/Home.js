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
      <div className="leading-normal min-h-screen flex flex-col items-center justify-center bg-gray-800">
        <ul className="m-0 p-3 ml-auto mr-auto bg-gray-900 flex flex-col justify-between list-none rounded-l shadow-lg">
          <li mt-20 pt-5 border-t-2>
            <a href="#">
              <i id="ai-home"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <li mt-20 pt-5 border-t-2>
            <a href="#">
              <i id="ai-image"></i>
              <span>Images</span>
            </a>
          </li>	
          <li mt-20 pt-5 border-t-2>
            <a href="#">
              <i id="ai-file"></i>
              <span>Files</span>
            </a>
          </li>
          <li mt-20 pt-5 border-t-2>
            <a href="#">
              <i id="ai-game-controller"></i>
              <span>Games</span>
            </a>
          </li>	
          <li mt-20 pt-5 border-t-2>
            <a href="#">
              <i id="ai-book"></i>
              <span>Books</span>
            </a>
          </li>
          <li mt-20 pt-5 border-t-2>
            <a href="#">
              <i id="ai-bell"></i>
              <span>Notifications</span>
            </a>
          </li>
          <limt-20 pt-5 border-t-2>	
            <a href="#">
              <i id="ai-gear"></i>
              <span>Settings</span>
            </a>
          </limt-20>
          <li mt-20 pt-5 border-t-2>
            <a href="#">
              <i id="ai-person"></i>
              <span>Profile</span>
            </a>
          </li>
      </ul>
    </div>
    <div className="w-full max-w-xs m-auto text-black">
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
  </>
  );
}
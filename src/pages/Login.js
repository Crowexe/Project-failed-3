import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Alert } from "../components/Alert";
import Titulo from "../components/Titulo";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Write an email to reset password");
    try {
      await resetPassword(user.email);
      setError('We sent you an email. Check your inbox')
    } catch (error) {
      setError(error.message);
    }
  };

  const divStyle = {
    backgroundImage: "url(https://i.imgur.com/9V62Mkn.png)"
  }

  return (
    <div className="flex justify-center h-screen w-screen">
        
      <div style={divStyle} alt="Background" className="hidden bg-cover lg:block lg:w-2/3" >
        <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 class="text-7xl font-bold whitespace-nowrap"><Titulo/></h2>
              <br />
              <p class="max-w-xl mt-3 text-gray-300 text-3xl">El lugar para volar a donde sea al alcance de tan sólo un clic.</p>
            </div>
        </div>
      </div>

      <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
        <div class="flex-1">
            <div class="text-center">
              <div className="w-full max-w-xs m-auto text-black">
                <div class="flex-1">
                  <div class="text-center">
                      <h2 class="text-4xl font-bold text-center text-gray-700 dark:text-white">Iniciar sesión</h2>
                      <p class="mt-3 text-gray-500 dark:text-gray-300">{error && <Alert message={error} />}</p>                        
                  </div>
                    <div class="mt-8">              
                    <form onSubmit={handleSubmit} >
                      <div>
                        <label
                          htmlFor="email"
                          className="text-left block mb-2 text-sm text-gray-600 dark:text-gray-200"
                        >
                          Correo electronico
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          onChange={handleChange}
                          className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                              placeholder="ejemplo@ejemplo.com"
                            />
                      </div>

                      <div className="mt-6">
                        <div className="my-4 text-sm flex justify-between">
                          <label
                            htmlFor="password"
                            className="text-sm text-gray-600 dark:text-gray-200"
                          >
                            Contraseña
                          </label>
                          <a
                            className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                            href="#!"
                            onClick={handleResetPassword}
                          >
                            ¿Olvidaste tu contraseña?
                          </a>
                        </div>

                        <input
                          type="password"
                          name="password"
                          id="password" 
                          onChange={handleChange}
                          className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                          placeholder="Contraseña"
                        />
                      </div>

                      <div class="mt-6">
                          <button
                          className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                          type="submit"
                        >
                          Entrar
                        </button>
                      </div>
                    </form>

                    <div class="mt-6">
                      <button
                        onClick={handleGoogleSignin}
                        className="bg-slate-50 hover:bg-slate-200 text-black  shadow rounded border-2 border-gray-300 py-2 px-4 w-full"
                      >
                        Inicia sesión con Google
                      </button>
                    </div>
                  <p className="mt-6 text-sm text-center text-gray-400">
                    ¿No tienes cuenta?&nbsp;&nbsp;
                    <Link to="/register" className="text-blue-500 focus:outline-none focus:underline hover:underline">
                      Registrate
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
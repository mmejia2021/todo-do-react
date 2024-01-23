import Swal from "sweetalert2";
import { useForm } from "../hooks/useForm";
import { useAuthStore } from '../../hooks';
import { useNavigate} from 'react-router-dom';

const RegisterForm = {
  nombre: '',
  apellido: '',
  edad: '',
  google: true,
  nuevoCampo: true,
  correo: '',
  password: '',
  password2: '',
  rol: 'USER_ROLE'

}

const SignupPage = () => {
  
  const { startRegister } = useAuthStore();
  const navigate = useNavigate();
  const { nombre, apellido, edad , google, nuevoCampo, correo, password,password2, rol, onInputChange: onRegisterChange } = useForm(RegisterForm);

    const registerFormSubmit = (event) => {
        event.preventDefault();
        if (password !== password2) {
          Swal.fire('Erro en registro', 'Contraseñas no son iguales', 'error')
          return;
        }
        startRegister({nombre, apellido, edad , google, nuevoCampo, correo, password, rol});
        navigate('/home')
    }

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:w-[60rem] dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Crear usuario
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={registerFormSubmit}>
                <div className="columns-2 md:columns-2 min-[320px]:columns-1">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                    <input type="text" name="nombre" value={nombre}  onChange={onRegisterChange} id="nombre" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pruebas IT" required="" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido</label>
                    <input type="text" name="apellido" id="apellido" placeholder="Lopéz" value={apellido} onChange={onRegisterChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div>
                </div>
                <div className="columns-2 md:columns-2 min-[320px]:columns-1">
                  <div>
                    <label name="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" value={password} onChange={onRegisterChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div>
                  <div>
                    <label name="password2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                    <input type="password" name="password2" id="password2" placeholder="••••••••" value={password2} onChange={onRegisterChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div>
                </div>
                <div className="columns-2 md:columns-2 min-[320px]:columns-1">
                  <div>
                    <label name="Edad" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Edad</label>
                    <input type="number" name="edad" id="edad" placeholder="12" value={edad} onChange={onRegisterChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div>
                  <div>
                    <label name="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Corre electrónico</label>
                    <input type="email" name="correo" id="correo" placeholder="demo@gmail.com" value={correo} onChange={onRegisterChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div>
                </div>
                <button type="submit" className="w-full text-white bg-pink-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Crear cuenta</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignupPage

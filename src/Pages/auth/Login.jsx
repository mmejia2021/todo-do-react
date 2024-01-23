import { useEffect } from "react";
import { useAuthStore } from '../../hooks';
import Swal from "sweetalert2";
import { useForm } from "../hooks/useForm";

const loginForm = {
    correo: '',
    password: ''
}

export const Login = () => {

    const { startLogin, errorMessage } = useAuthStore();

    const { correo: correo, password, onInputChange: onLoginChange } = useForm(loginForm);

    const loginFormSubmit = (event) => {
        event.preventDefault();
        startLogin({ correo, password })
    }

    useEffect(() => {
        if (errorMessage !== undefined) {
            Swal.fire('Error en la autenticación', errorMessage, 'error')
        }
    }, [errorMessage]);
    


    return (
        <form className="min-h-screen bg-cyan-600 flex justify-center items-center group" noValidate onSubmit={loginFormSubmit}>

            <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
                <div>
                    <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">Iniciar sesión</h1>
                    <p className="text-center mb-2 font-bold">Plantila react + vite</p>
                </div>
                <div className="space-y-4">
                    <label>
                        <input type="email"
                            required
                            name="correo"
                            value={correo}
                            id="correo"
                            onChange={onLoginChange}
                            placeholder="Correo electrónico"
                            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
                            pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}?" />
                        <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                            Por favor ingreso un correo valido
                        </span>
                    </label>
                    <input type="password" name="password" id="password" value={password} onChange={onLoginChange} required placeholder="Contraseña" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500" pattern=".{4,}" />

                </div>
                <div className="text-center mt-6">
                    <button type="submit" className="py-3 w-64 text-xl text-white bg-pink-500 rounded-2xl group-invalid:pointer-events-none group-invalid:opacity-30" >Ingresar</button>

                </div>
            </div>

        </form>

    )
}

export default Login

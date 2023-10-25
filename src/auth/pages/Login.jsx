import { useEffect } from "react";
import { useAuthStore, useForm } from "../../Pages";
import Swal from "sweetalert2";

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
    }, [errorMessage])


    return (
        <form className="min-h-screen bg-purple-400 flex justify-center items-center group" noValidate onSubmit={loginFormSubmit}>

            <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
                <div>
                    <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">Iniciar sesión</h1>
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
                    <button type="submit" className="py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl group-invalid:pointer-events-none group-invalid:opacity-30" >Ingresar</button>

                </div>
            </div>
            <div className="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block"></div>
            <div
                className="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block">
            </div>
        </form>

    )
}

export default Login

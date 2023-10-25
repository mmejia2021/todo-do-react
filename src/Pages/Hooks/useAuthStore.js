import { useDispatch, useSelector } from "react-redux"
import { userApi } from "../../api";
import { onChecking, onLogin, onLogout, clearErrorMessage } from '../../store/auth/authSlide'

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async ({ correo, password }) => {
        dispatch(onChecking());

        try {
            const data = await userApi.post('/auth/login', { correo, password });
            localStorage.setItem('token', data.data.token)
            dispatch(onLogin({ nombre: data.data.usuario.nombre, uid: data.data.usuario.uid }));

            console.log({ data });

        } catch (error) {
            dispatch(onLogout('Credenciales incorrectas'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }
 

    const startRegister = async ({ nombre, edad, apellido, google, nuevoCampo, correo, password, rol }) => {
        dispatch(onChecking());
        try {
            const {data} = await userApi.post('/usuarios', { nombre, edad, apellido, google, nuevoCampo, correo, password, rol });
            console.log({ data }); 
            
        } catch (error) {
            console.log(error)
            dispatch(onLogout('Credenciales incorrectas'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }

    }

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token')
        if (!token) return dispatch(onLogout());
        try {
            const {data} = await 
        } catch (error) {
            
        }
    }

    return {
        status,
        user,
        errorMessage,

        startLogin,
        startRegister
    }
}
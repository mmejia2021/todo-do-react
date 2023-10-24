import { useDispatch, useSelector } from "react-redux"
import { userApi } from "../../api";
import { onChecking, onLogin, onLogout } from '../../store/auth/authSlide'

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
            dispatch(onLogout('Credenciales incorrectas') );
        }
    }

    return {
        status,
        user,
        errorMessage,

        startLogin,
    }
}
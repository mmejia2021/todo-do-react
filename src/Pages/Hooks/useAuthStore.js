import { useDispatch, useSelector } from "react-redux"
import { userApi } from "../../api";
import { onChecking, onLogin, onLogout, OnGetUsers, clearErrorMessage, onDelete } from '../../store/auth/authSlide'

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
            const { data } = await userApi.post('/usuarios', { nombre, edad, apellido, google, nuevoCampo, correo, password, rol });
            console.log({ data });

        } catch (error) {
            console.log(error)
            dispatch(onLogout('Credenciales incorrectas'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }

    }

    const checkAuthToken = async () => {
        const token = localStorage.getItem('token')
        if (!token) return dispatch(onLogout());
    }

    const startLogout = async () => {
        localStorage.clear();
        dispatch(onLogout());
    }

    const obtenerUsers = async (desde = 0, limite = 10) => {
        dispatch(onChecking());
        try {
            const { data } = await userApi.get(`/usuarios?desde=${desde}&limite=${limite}`);
           dispatch(OnGetUsers({ 
            data: data
            }));
        } catch (error) {
            console.log(error);
        }

    }

    const onDeteleUser = async (id) => {
        dispatch(onChecking());
        try {
            const { data } = await userApi.delete(`/usuarios/${id}`);
            dispatch(onDelete({
                data:data
            }))
            console.log(data)
        } catch (error) {
            console.log(error);
        }

    }
    return {
        status,
        user,
        errorMessage,

        startLogin,
        startRegister,
        checkAuthToken,
        startLogout,
        obtenerUsers,
        onDeteleUser
    }
}
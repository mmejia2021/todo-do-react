import { userApi } from "../../api";
import {setUsers, starLoadingUsers } from "./userSlide"

export const getUsers = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(starLoadingUsers());

       const resp = await userApi.get(`/usuarios?desde=0&limite=${page * 1}`);
       const data = await resp;
       dispatch(setUsers({users: data.data, page: page +1}))
    }

}
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        user: {},
        users: {},
        errorMessage: undefined
    },
    reducers: {
        onChecking: (state) => {
            state.status = 'checking';
            state.user = {};
            state.users = {};
            state.errorMessage = undefined;
        },
        onLogin: (state, { payload }) => {
            state.status = 'authenticated';
            state.user = payload;
            state.users = {};
            state.errorMessage = undefined;
        },
        onLogout: (state, { payload }) => {
            state.status = 'not-authenticated';
            state.user = {};
            state.users = {};
            state.errorMessage = payload;
        },
        clearErrorMessage: (state) => {
            state.errorMessage = undefined;
        },
        OnGetUsers: (state, { payload }) => {
            state.status = 'authenticated';
            state.user = {};
            state.users = payload;
            state.errorMessage = undefined;
        },
        onDelete: (state, { payload }) => {
            state.status = 'authenticated',
                state.user = payload;
            state.errorMessage = undefined;
        }
    },

});


// Action creators are generated for each case reducer function
export const { onChecking, onLogin, onLogout, OnGetUsers, clearErrorMessage, onDelete } = authSlice.actions;
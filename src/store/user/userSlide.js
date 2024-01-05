import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        page: 0,
        users: [],
        isLoading: false
    },
    reducers: {
        starLoadingUsers: (state) => {
            state.isLoading = true;
        },
        setUsers: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.users = action.payload.users;
        }
    }
});


// Action creators are generated for each case reducer function
export const { starLoadingUsers, setUsers } = userSlice.actions;
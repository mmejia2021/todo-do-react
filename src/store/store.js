import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlide";
import { userSlice } from "./user/userSlide";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        users: userSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })

})



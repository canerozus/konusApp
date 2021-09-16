import { createSlice,  } from '@reduxjs/toolkit'

export const AuthSlicer = createSlice({
    name: 'auth',
    initialState:{
        user:{},

        email:{},
        uid:{},
        PhotoURL:[]

    },
    reducers: {
        setUser:(state, action) => {
            state.user = action.payload;
            state.email = action.payload;
            state.uid = action.payload;
            state.PhotoURL = action.payload;

        }
    },

})


export const { setUser } = AuthSlicer.actions

export default AuthSlicer.reducer
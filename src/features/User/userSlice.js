import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, register } from "../../api/auth";
import { toastr } from 'react-redux-toastr'
import { read } from "../../api/user";
// import toastr from 'toastr';
// import "toastr/build/toastr.min.css";

export const signup = createAsyncThunk(
    "user/signup",
    async (userData, { rejectWithValue }) => {
        try {
            const { data } = await register(userData);
            toastr.success("Thông Báo", "Đăng ký tài khoản thành công");
            return data;
        } catch (error) {
            toastr.error("Đăng ký thất bại", error.response.data.message);
        }
    }
)

export const signin = createAsyncThunk(
    "user/signin",
    async (userData, { rejectWithValue }) => {
        try {
            const { data } = await login(userData);
            toastr.success("Thông Báo", "Đăng nhập thành công");
            localStorage.setItem('user', JSON.stringify(data));
            return data;
        } catch (error) {
            toastr.error("Đăng nhập thất bại", error.response.data.message);
        }
    }
)



const userSlice = createSlice({
    name: "user",
    initialState: {
        info: {}
    },
    reducers: {
        logout(state) {
            state.info = ""
            localStorage.removeItem('user');
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signin.fulfilled, (state, action) => {
            state.info = action.payload
        })
    }
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
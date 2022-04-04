import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, register } from "../../api/auth";
import { toastr } from 'react-redux-toastr'
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

            localStorage.setItem("user", JSON.stringify(data))
            toastr.success("Thông Báo", "Đăng nhập thành công");
            return data;
        } catch (error) {
            toastr.error("Đăng nhập thất bại", error.response.data.message);
        }
    }
)

const userSlice = createSlice({
    name: "user",
    initialState: {
        isAuthenticate: false,
        current: [],
        user: [],
        settings: {}
    },
    extraReducers: (builder) => {
        builder.addCase(signin.fulfilled, (state, action) => {
            state.isAuthenticate = true;
        })
    }
})

export default userSlice.reducer;
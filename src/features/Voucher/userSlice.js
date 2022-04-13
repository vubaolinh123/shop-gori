import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, register } from "../../api/auth";
import { toastr } from 'react-redux-toastr'
import { list, read, remove, update } from "../../api/user";
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
    async (userData) => {
        try {
            const { data } = await login(userData);
            console.log('1')
            if (data) {
                toastr.success("Thông Báo", "Đăng nhập thành công");
                localStorage.setItem('user', JSON.stringify(data));
                return data
            }
        } catch (error) {
            toastr.error("Đăng nhập thất bại", error.response.data.message);
        }
    }
)

export const getAllUser = createAsyncThunk(
    "user/getAllUser",
    async () => {
        try {
            const { data } = await list();
            return data;
        } catch (error) {
            console.log("Error Slice User GetAll", error);
        }
    }
)

export const updateStatusUser = createAsyncThunk(
    "user/updateStatusUser",
    async (user, thunkAPI) => {
        try {
            const { data } = await update(user.statusFake, user.id)
            return data
        } catch (error) {
            console.log(error);
        }
    }
)

export const deleteUser = createAsyncThunk(
    "user/deleteUser",
    async (id, thunkAPI) => {
        try {
            const { data } = await remove(id)
            toastr.success("Thông Báo", "Xóa tài khoản thành công")
            return data
        } catch (error) {
            console.log(error);
        }
    }
)

export const getOneUser = createAsyncThunk(
    "user/getOneUser",
    async (id, thunkAPI) => {
        try {
            const { data } = await read(id)
            return data
        } catch (error) {
            console.log("UserSliceGetOne", error);
        }
    }
)




const userSlice = createSlice({
    name: "user",
    initialState: {
        info: "",
        value: [],
        comment: []
    },
    reducers: {
        logout(state) {
            state.info = ""
            localStorage.removeItem('user');
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signin.fulfilled, (state, action) => {
            if (action.payload) {
                state.info = action.payload
            } else {
                state.info = ""
            }

        })
        builder.addCase(signin.rejected, (state, action) => {
            console.log('action.payload', action.payload)
        })
        builder.addCase(getAllUser.fulfilled, (state, action) => {
            state.value = action.payload
        })
        builder.addCase(updateStatusUser.fulfilled, (state, action) => {

        })
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.value = state.value.filter(item => item._id !== action.payload._id)
        })
        builder.addCase(getOneUser.fulfilled, (state, action) => {
            state.comment = action.payload
        })

    }
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
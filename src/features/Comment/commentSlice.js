import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { add, list, remove, update } from "../../api/comment";

export const getAllComment = createAsyncThunk(
    "comment/getAllComment",
    async () => {
        const { data } = await list();
        return data
    }
)

export const addComment = createAsyncThunk(
    "comment/addComment",
    async (comment) => {
        const { data } = await add(comment);
        return data
    }
)

export const removeComment = createAsyncThunk(
    "comment/removeComment",
    async (id) => {
        const { data } = await remove(id);
        return data
    }
)

export const updateComment = createAsyncThunk(
    "comment/updateComment",
    async (comment) => {
        const { data } = await update(comment);
        console.log("dataComment", data);
        return data
    }
)


const commentSlice = createSlice({
    name: "comment",
    initialState: {
        value: []
    },
    extraReducers: (builder) => {
        builder.addCase(getAllComment.fulfilled, (state, action) => {
            console.log("actionPayload", action.payload);
            state.value = action.payload
        })
        builder.addCase(addComment.fulfilled, (state, action) => {
            state.value.push(action.payload)
        })
        builder.addCase(removeComment.fulfilled, (state, action) => {
            state.value = state.value.filter(item => item._id !== action.payload._id)
        })
        builder.addCase(updateComment.fulfilled, (state, action) => {

        })


    }
})

export default commentSlice.reducer
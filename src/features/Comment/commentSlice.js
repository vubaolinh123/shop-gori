import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { add, list } from "../../api/comment";

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


const commentSlice = createSlice({
    name: "comment",
    initialState: {
        value: []
    },
    extraReducers: (builder) => {
        builder.addCase(getAllComment.fulfilled, (state, action) => {
            state.value = action.payload
        })
        builder.addCase(addComment.fulfilled, (state, action) => {
            state.value.push(action.payload)
        })

    }
})

export default commentSlice.reducer
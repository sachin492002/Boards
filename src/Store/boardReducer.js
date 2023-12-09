

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    blogs:[],
    blogModalOpen:false,
};

const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        setBlogs: (state, action) => {
            console.log(action.payload)
            state.blogs = [...state.blogs, action.payload];
        },
        setblogsModalOpen:(state, action)=>{
            console.log(action.payload)
            state.blogModalOpen = action.payload;
        },

    },
});

export const { setBlogs,setblogsModalOpen } = blogsSlice.actions;

export default blogsSlice.reducer;

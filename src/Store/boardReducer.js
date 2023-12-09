import {createSlice, current} from '@reduxjs/toolkit';

const initialState = {
    Boards:[],
    boardsSearch:[],
    boardModalOpen:false,
    postModalOPen:false,
    currentboard:null,
    bookmarks:[],
};

const BoardsSlice = createSlice({
    name: 'Boards',
    initialState,
    reducers: {
       deleteBookmark:(state, action)=>{
           state.bookmarks  = state.bookmarks.filter(( obj ) => obj.title !== action.payload);
       },
        setBookMark:(state, action)=>{
            state.bookmarks = [...state.bookmarks,action.payload];
            const index = state.Boards.findIndex((obj)=> obj.title === state.currentboard.title)
            state.Boards[index].bookmark = true;
            console.log(state.Boards);
        }
        ,
        getBoardsSearch:(state, action) => {
            const boards = state.Boards.filter((product) => {
                return product.title.toLowerCase().startsWith(action.payload);
            });
            state.boardsSearch = boards;
        },
        setBoards: (state, action) => {
            state.Boards = [...state.Boards, action.payload];
            state.boardsSearch =  state.Boards;
        },
        deleteBoard:(state, action)=>{
            console.log(action.payload)
            state.Boards = state.Boards.filter(( obj ) => obj.title !== action.payload);
            state.boardsSearch = state.Boards;
        },
        deletePost:(state, action)=>{
            const id = action.payload;
            console.log(id);
            const index = state.Boards.findIndex((obj)=> obj.title === state.currentboard.title)
            state.Boards[index].posts = state.Boards[index].posts.filter(( obj) => obj.subject !== action.payload);
            state.currentboard.posts = state.currentboard.posts.filter(( obj) => obj.subject !== id);
        }
        ,
        setCurrentBoard:(state, action)=>{
            const res = state.Boards.findIndex(blog => blog.title === action.payload);
            state.currentboard = state?.Boards[res];
        },
        setLiked:(state,action)=>{
            const id = action.payload;
            console.log(current(state.boardsSearch));
            const index = state.Boards.findIndex((obj)=> obj.title === state.currentboard.title)
            const indexpost = state.Boards[index].posts.findIndex((obj)=> obj.subject === id)
            state.Boards[index].posts[indexpost].likes = state.Boards[index].posts[indexpost].likes+1;
            state.currentboard.posts[indexpost].likes = state.currentboard.posts[indexpost].likes+1;
        }

        ,
        setBoardPosts:(state,action)=>{
            const { id, post } = action.payload;
            const boardIndex = state.Boards.findIndex(blog => blog.title === id);
            if (boardIndex !== -1) {
                if (!state.Boards[boardIndex].posts ) {
                    state.Boards[boardIndex].posts = [];
                }
                state.Boards[boardIndex].posts.push(post);
            }
            state.boardsSearch = state.Boards;
        },
        setBoardsModalOpen:(state, action)=>{
            state.boardModalOpen = action.payload;
        },
        setpostsModalOpen:(state, action)=>{
            state.postModalOPen = action.payload;
        }
    },
});

export const { setLiked,deleteBookmark,setBoards,deletePost,setBoardsModalOpen,setBookMark,deleteBoard,setpostsModalOpen,getBoardsSearch,setCurrentBoard,setBoardPosts } = BoardsSlice.actions;

export default BoardsSlice.reducer;

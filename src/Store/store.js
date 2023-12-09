import {configureStore} from "@reduxjs/toolkit";
import BoardsReducer from './boardReducer'
const initialState = JSON.parse(localStorage.getItem('BoardsState')) || BoardsReducer(undefined, {});
export const store = configureStore({
    reducer: {
        Boards: BoardsReducer,
    },
    preloadedState: { Boards: initialState },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

store.subscribe(() => {
    const state = store.getState().Boards;
    localStorage.setItem('BoardsState', JSON.stringify(state));
});



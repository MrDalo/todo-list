import {configureStore} from '@reduxjs/toolkit';
import toDoItemSlice from './slices/toDoItemSlice';
import toDoListSlice from './slices/toDoListSlice';


const store = configureStore({
    reducer: {
        toDoList: toDoListSlice.reducer,
        toDoItem: toDoItemSlice.reducer,
        
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
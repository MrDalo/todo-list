import {configureStore} from '@reduxjs/toolkit';
import toDoListSlice from './slices/toDoListSlice';
import { toDoListActions } from './slices/toDoListSlice';


const store = configureStore({
    reducer: {
        toDoList: toDoListSlice.reducer
        
    }
});

export default store;
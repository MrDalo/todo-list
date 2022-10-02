import {createSlice} from '@reduxjs/toolkit';

interface IToDoItem{
    id: number,
    name: string,
    description: string,
    date: Date,
    taskListId: number
}

const initialState: IToDoItem[] = [];

const toDoItemSlice = createSlice({
    name: "toDoItem",
    initialState: initialState,
    reducers: {

    }
});


export const toDoItemActions = toDoItemSlice.actions;
export default toDoItemSlice;
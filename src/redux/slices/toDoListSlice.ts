import {createSlice} from '@reduxjs/toolkit';

interface IToDoList{
    id: number,
    name: string
}

const initialStateVar: IToDoList[] = [];


const toDoListSlice = createSlice({
    name: "toDoList",
    initialState: initialStateVar,
    reducers: {
        addNewList: (state, action) =>{
            const newToDoList = {
                id: Date.now(),
                name: action.payload.name
            }

            state.push(newToDoList);
        },
        deleteList: (state, action) =>{

        },
        editList: (state, action)=> {

        }

    }
});


export const toDoListActions = toDoListSlice.actions;
export default toDoListSlice;





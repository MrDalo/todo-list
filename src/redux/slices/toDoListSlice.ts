import {createSlice} from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid';

interface IToDoList{
    id: string,
    name: string
}

const initialStateVar: IToDoList[] = [];


const toDoListSlice = createSlice({
    name: "toDoList",
    initialState: initialStateVar,
    reducers: {
        addNewList: (state, action) =>{
            const newToDoList = {
                id: uuidv4(),
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





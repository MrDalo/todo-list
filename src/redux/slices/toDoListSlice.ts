import {createSlice} from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid';

interface IToDoList{
    id: string,
    name: string
}

const initialStateVar: IToDoList[] = [];
const initialStateTestingData: IToDoList[] = [
    {
        id: uuidv4(),
        name: "TaskList 1"
    },
    {
        id: uuidv4(),
        name: "TaskList 2"
    },
    {
        id: uuidv4(),
        name: "TaskList 3"
    },
    {
        id: uuidv4(),
        name: "TaskList 4"
    },
    {
        id: uuidv4(),
        name: "TaskList 5"
    },

];

const toDoListSlice = createSlice({
    name: "toDoList",
    initialState: initialStateTestingData,
    reducers: {
        addNewList: (state, action) =>{
            const newToDoList = {
                id: uuidv4(),
                name: action.payload.name
            }

            state.push(newToDoList);
        },
        readLists: (state, action)=>{

        },
        updateList: (state, action)=> {

        },
        deleteList: (state, action) =>{

        }

    }
});


export const toDoListActions = toDoListSlice.actions;
export default toDoListSlice;





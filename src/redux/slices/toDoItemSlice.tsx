import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid';

export interface IToDoItem{
    id: string,
    name: string,
    description: string,
    date: string,
    taskListId: string,
    checked: boolean
}

const initialStateVar: IToDoItem[] = [];
const initialStateTestingData: IToDoItem[] = [
    {
        id: uuidv4(),
        name: "Task 1",
        description: "Description 1",
        date: new Date().toLocaleString(),
        taskListId: uuidv4(),
        checked: false
    },
    {
        id: uuidv4(),
        name: "Task 2",
        description: "Description 2",
        date: new Date().toLocaleString(),
        taskListId: uuidv4(),
        checked: false
    },
    {
        id: uuidv4(),
        name: "Task 3",
        description: "Description 3",
        date: new Date().toLocaleString(),
        taskListId: uuidv4(),
        checked: true
    },
];

const toDoItemSlice = createSlice({
    name: "toDoItem",
    initialState: initialStateTestingData,
    reducers: {
        createNewItem: (state, action: PayloadAction<IToDoItem>) =>{
            const newToDoItem = {
                id: uuidv4(),
                name: action.payload.name,
                description: action.payload.description,
                date: action.payload.date,
                taskListId: action.payload.taskListId,
                checked: action.payload.checked
            };

            state.push(newToDoItem);

        },
        readItems: (state, action) =>{

        },
        updateItem: (state, action: PayloadAction<string>) =>{

        },
        deleteItem: (state, action: PayloadAction<string>)=>{
            return state.filter(item => item.id !== action.payload);
        },
        filterItems: (state, action)=>{

        },
        checkedItem: (state, action: PayloadAction<string>)=>{
            const task = state.filter(item => item.id === action.payload);
            task[0].checked = !task[0].checked; 
        }

    }
});


export const toDoItemActions = toDoItemSlice.actions;
export default toDoItemSlice;
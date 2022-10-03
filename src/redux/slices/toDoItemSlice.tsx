import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid';
import axios from 'axios';

export interface IToDoItem{
    id: string,
    name: string,
    description: string,
    date: string,
    taskListId: string,
    checked: boolean
}

export const getItemsAsync = createAsyncThunk(
    'items/getItemsAsync',
    async (id: string)=>{
        
        const response = await axios.get(`https://63348dc4849edb52d6f3c6e3.mockapi.io/taskLists/${id}/taskItems`)
        .then(res=>{
            return res.data;
        })
        .catch(error =>{
            return error.message;
        })

        return await response;
    }
);

export const createItemAsync = createAsyncThunk(
    'items/createItemsAsync',
    async (payload: IToDoItem)=>{
        
        const response = await axios.post(`https://63348dc4849edb52d6f3c6e3.mockapi.io/taskLists/${payload.taskListId}/taskItems`,
        {
            id: uuidv4(),
            name: payload.name,
            description: payload.description,
            date: payload.date,
            taskListId: payload.taskListId,
            checked: payload.checked

        })
        .then(res=>{
            return res.data;
        })
        .catch(error =>{
            return error.message;
        })

        return await response;
    }
);

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
    initialState: initialStateVar,
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
        filterItems: (state, action: PayloadAction<string>)=>{

            switch(action.payload){
                case "All":{
                    console.log("All");
                    break;                    
                }
                case "Active":{
                    console.log("Active");
                    
                    break;
                }
                case "Finished":{
                    
                    console.log("Finished");
                    break;
                }

            }

        },
        checkedItem: (state, action: PayloadAction<string>)=>{
            const task = state.filter(item => item.id === action.payload);
            task[0].checked = !task[0].checked; 
        }

    },
    extraReducers: (builder) => {
        builder.addCase(getItemsAsync.fulfilled, (state, action) =>{
            // console.log('payload: ',action.payload);
            return action.payload;
        })
        builder.addCase(createItemAsync.fulfilled, (state, action) =>{
            state.push(action.payload);
        })

    }
});


export const toDoItemActions = toDoItemSlice.actions;
export default toDoItemSlice;
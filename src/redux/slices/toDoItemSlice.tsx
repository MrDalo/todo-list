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

export interface IItem{
    toDoItems: IToDoItem[],
    searchString: string,
    filterString: string
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

export const deleteItemAsync = createAsyncThunk(
    'items/deleteItemsAsync',
    async (payload: {id: string, taskListId: string})=>{
        
        const response = await axios.delete(`https://63348dc4849edb52d6f3c6e3.mockapi.io/taskLists/${payload.taskListId}/taskItems/${payload.id}`)
        .then(res=>{
            console.log('Delete successful');
        })
        .catch(error =>{
            console.log('Delete unsuccessful: ', error.message);
        })

        return await payload.id;
    }
);

export const checkboxItemAsync = createAsyncThunk(
    'items/checkboxItemsAsync',
    async (payload: {id: string, taskListId: string, checked: boolean})=>{
        
        const response = await axios.put(`https://63348dc4849edb52d6f3c6e3.mockapi.io/taskLists/${payload.taskListId}/taskItems/${payload.id}`,
        {
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

const initialStateVar: IItem = {toDoItems: [], searchString: "", filterString: "All"};
const initialStateTestingData: IItem ={
    toDoItems: [
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
        }
    ],
    searchString: "",
    filterString: "All"
};

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

            state.toDoItems.push(newToDoItem);

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
        updateItem: (state, action: PayloadAction<string>)=>{

        },
        checkedItem: (state, action: PayloadAction<string>)=>{
            const task = state.toDoItems.filter(item => item.id === action.payload);
            task[0].checked = !task[0].checked; 
        }

    },
    extraReducers: (builder) => {
        builder.addCase(getItemsAsync.fulfilled, (state, action) =>{
            const returnObject: IItem = {toDoItems: action.payload, searchString: state.searchString, filterString: state.filterString};
            return returnObject;
        })
        builder.addCase(createItemAsync.fulfilled, (state, action) =>{
            state.toDoItems.push(action.payload);
        })
        builder.addCase(deleteItemAsync.fulfilled, (state, action) =>{
            const tasks = state.toDoItems.filter(item => item.id !== action.payload);
            return {...state, toDoItems: tasks};
        })
        builder.addCase(checkboxItemAsync.fulfilled, (state, action) =>{
            state.toDoItems.forEach(item => item.id === action.payload.id ? item.checked = action.payload.checked : item.checked);
        })

    }
});


export const toDoItemActions = toDoItemSlice.actions;
export default toDoItemSlice;
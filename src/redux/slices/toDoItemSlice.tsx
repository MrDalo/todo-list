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
            return error;
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
            return error;
        })

        return await response;
    }
);

export const deleteItemAsync = createAsyncThunk(
    'items/deleteItemsAsync',
    async (payload: {id: string, taskListId: string})=>{
        
        await axios.delete(`https://63348dc4849edb52d6f3c6e3.mockapi.io/taskLists/${payload.taskListId}/taskItems/${payload.id}`)
        .then(res=>{
        })
        .catch(error =>{
            return error;
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
            return error;
        })

        return await response;
    }
);

export const updateItemAsync = createAsyncThunk(
    'items/updateItemsAsync',
    async (payload: {id: string, taskListId: string, name: string, description: string, date: string})=>{
        
        const response = await axios.put(`https://63348dc4849edb52d6f3c6e3.mockapi.io/taskLists/${payload.taskListId}/taskItems/${payload.id}`,
        {
            id: payload.id,
            name: payload.name,
            description: payload.description

        })
        .then(res=>{
            return res.data;
        })
        .catch(error =>{
            return error;
        })

        return await response;
    }
);

const initialStateVar: IItem = {toDoItems: [], searchString: "", filterString: "All"};


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
                    state.filterString = "All";
                    break;                    
                }
                case "Active":{
                    state.filterString = "Active";
                    break;
                }
                case "Finished":{
                    state.filterString = "Finished"
                    break;
                }

            }

        },
        searchItems: (state, action: PayloadAction<string>)=>{
            state.searchString = action.payload;
            
        },
        clearSearchInput: (state)=>{
            state.searchString = "";
        },
        updateItem: (state, action: PayloadAction<string>)=>{

        },
        checkedItem: (state, action: PayloadAction<string>)=>{
            const task = state.toDoItems.filter(item => item.id === action.payload);
            task[0].checked = !task[0].checked; 
        }

    },
    extraReducers: (builder) => {
        builder.addCase(getItemsAsync.rejected, (state, action) =>{
            const messageWindow = document.getElementById('message-window');
            messageWindow?.classList.add('error');
            setTimeout(()=>{messageWindow?.classList.remove('error')}, 2000);
            messageWindow!.innerHTML = "<p>Error occured!</p>";
        })
        .addCase(getItemsAsync.pending, (state, action) =>{
            const messageWindow = document.getElementById('message-window');
            messageWindow?.classList.add('loading');
            messageWindow!.innerHTML = "<p>Loading items...</p>";
        })
        .addCase(getItemsAsync.fulfilled, (state, action) =>{
            const messageWindow = document.getElementById('message-window');
            messageWindow?.classList.remove('loading');
            messageWindow?.classList.add('success');
            messageWindow!.innerHTML = "<p>Items loaded!</p>";
            setTimeout(()=>{messageWindow?.classList.remove('success')}, 2000);

            const returnObject: IItem = {toDoItems: action.payload, searchString: state.searchString, filterString: state.filterString};
            return returnObject;
        })
        .addCase(createItemAsync.rejected, (state, action) =>{
            const messageWindow = document.getElementById('message-window');
            messageWindow?.classList.add('error');
            setTimeout(()=>{messageWindow?.classList.remove('error')}, 2000);
            messageWindow!.innerHTML = "<p>Error occured!</p>";
        })
        .addCase(createItemAsync.pending, (state, action) =>{
            const messageWindow = document.getElementById('message-window');
            messageWindow?.classList.add('loading');
            messageWindow!.innerHTML = "<p>Creating item...</p>";
        })
        .addCase(createItemAsync.fulfilled, (state, action) =>{
            const messageWindow = document.getElementById('message-window');
            messageWindow?.classList.remove('loading');
            messageWindow?.classList.add('success');
            messageWindow!.innerHTML = "<p>Item created!</p>";
            setTimeout(()=>{messageWindow?.classList.remove('success')}, 2000);

            state.toDoItems.push(action.payload);
        })
        .addCase(deleteItemAsync.rejected, (state, action) =>{
            const messageWindow = document.getElementById('message-window');
            messageWindow?.classList.add('error');
            setTimeout(()=>{messageWindow?.classList.remove('error')}, 2000);
            messageWindow!.innerHTML = "<p>Error occured!</p>";
        })
        .addCase(deleteItemAsync.pending, (state, action) =>{
            const messageWindow = document.getElementById('message-window');
            messageWindow?.classList.add('loading');
            messageWindow!.innerHTML = "<p>Deleting item...</p>";
        })
        .addCase(deleteItemAsync.fulfilled, (state, action) =>{
            const messageWindow = document.getElementById('message-window');
            messageWindow?.classList.remove('loading');
            messageWindow?.classList.add('success');
            messageWindow!.innerHTML = "<p>Item deleted!</p>";
            setTimeout(()=>{messageWindow?.classList.remove('success')}, 2000);
            
            const tasks = state.toDoItems.filter(item => item.id !== action.payload);
            return {...state, toDoItems: tasks};
        })
        .addCase(checkboxItemAsync.rejected, (state, action) =>{
            const messageWindow = document.getElementById('message-window');
            messageWindow?.classList.add('error');
            setTimeout(()=>{messageWindow?.classList.remove('error')}, 2000);
            messageWindow!.innerHTML = "<p>Error occured!</p>";
        })
        .addCase(checkboxItemAsync.pending, (state, action) =>{
            const messageWindow = document.getElementById('message-window');
            messageWindow?.classList.add('loading');
            messageWindow!.innerHTML = "<p>Loading...</p>";
        })
        .addCase(checkboxItemAsync.fulfilled, (state, action) =>{
            const messageWindow = document.getElementById('message-window');
            messageWindow?.classList.remove('loading');
            messageWindow?.classList.add('success');
            messageWindow!.innerHTML = "<p>Successful action!</p>";
            setTimeout(()=>{messageWindow?.classList.remove('success')}, 2000);
            
            state.toDoItems.forEach(item => item.id === action.payload.id ? item.checked = action.payload.checked : item.checked);
        })
        .addCase(updateItemAsync.rejected, (state, action) =>{
            const messageWindow = document.getElementById('message-window');
            messageWindow?.classList.add('error');
            setTimeout(()=>{messageWindow?.classList.remove('error')}, 2000);
            messageWindow!.innerHTML = "<p>Error occured!</p>";
        })
        .addCase(updateItemAsync.pending, (state, action) =>{
            const messageWindow = document.getElementById('message-window');
            messageWindow?.classList.add('loading');
            messageWindow!.innerHTML = "<p>Loading...</p>";
        })
        .addCase(updateItemAsync.fulfilled, (state, action) =>{
            const messageWindow = document.getElementById('message-window');
            messageWindow?.classList.remove('loading');
            messageWindow?.classList.add('success');
            messageWindow!.innerHTML = "<p>Edit successful!</p>";
            setTimeout(()=>{messageWindow?.classList.remove('success')}, 2000);
            
            state.toDoItems.forEach(item => {
                if(item.id === action.payload.id){
                    item.name = action.payload.name;
                    item.description = action.payload.description;
                    item.date = action.payload.date;
                }
            });
        });

    }
});


export const toDoItemActions = toDoItemSlice.actions;
export default toDoItemSlice;
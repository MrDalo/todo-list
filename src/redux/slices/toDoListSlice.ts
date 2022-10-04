import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';

/**
 * @brief Interface for Item object
 */
interface IToDoList{
    id: string,
    name: string
}


/**
 * @brief Interface for the redux state toDoList
 */
interface IList{
    toDoLists: IToDoList[],
    activeID: string
}

/**
 * @brief Async get operation of the ToDoList
 * 
 */
export const getListsAsync = createAsyncThunk(
    'lists/getListsAsync',
    async ()=>{
        
        const response = await axios.get(`https://63348dc4849edb52d6f3c6e3.mockapi.io/taskLists`)
        .then(res=>{
            return res.data;
        })
        .catch(error =>{
            return error;
        })

        return await response;
    }
);

/**
 * @brief Async create operation of the ToDoList
 * 
 */
export const addListAsync = createAsyncThunk(
    'lists/addListAsync',
    async (name: string) =>{
        
        const response = await axios.post(`https://63348dc4849edb52d6f3c6e3.mockapi.io/taskLists`, 
        {
            id: uuidv4(),
            name: name
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

const initialStateVar: IList = {toDoLists: [], activeID: '0'};


const toDoListSlice = createSlice({
    name: "toDoList",
    initialState: initialStateVar,
    reducers: {
        addNewList: (state, action) =>{
            const newToDoList = {
                id: uuidv4(),
                name: action.payload.name
            }

            state.toDoLists.push(newToDoList);
        },
        readLists: (state, action)=>{

        },
        updateActiveIDList: (state, action)=> {
            return{toDoLists: state.toDoLists, activeID: action.payload}

        },
        deleteList: (state, action) =>{

        }

    },
    extraReducers: (builder) => {
        builder.addCase(getListsAsync.rejected, (state, action) =>{
            const messageWindow = document.getElementById('message-window');
            messageWindow?.classList.add('error');
            setTimeout(()=>{messageWindow?.classList.remove('error')}, 2000);
            messageWindow!.innerHTML = "<p>Error occured!</p>";
        })
        .addCase(getListsAsync.pending, (state, action) =>{
            const messageWindow = document.getElementById('message-window');
            messageWindow?.classList.add('loading');
            messageWindow!.innerHTML = "<p>Loading lists...</p>";
        })
        .addCase(getListsAsync.fulfilled, (state, action) =>{
            const messageWindow = document.getElementById('message-window');
            messageWindow?.classList.remove('loading');
            messageWindow?.classList.add('success');
            messageWindow!.innerHTML = "<p>Lists loaded!</p>";
            setTimeout(()=>{messageWindow?.classList.remove('success')}, 2000);

            const returnObject:IList = {toDoLists: action.payload, activeID: state.activeID};
            return returnObject;
        })
        .addCase(addListAsync.rejected, (state, action) =>{
            const messageWindow = document.getElementById('message-window');
            messageWindow?.classList.add('error');
            setTimeout(()=>{messageWindow?.classList.remove('error')}, 2000);
            messageWindow!.innerHTML = "<p>Error occured!</p>";
        })
        .addCase(addListAsync.pending, (state, action) =>{
            const messageWindow = document.getElementById('message-window');
            messageWindow?.classList.add('loading');
            messageWindow!.innerHTML = "<p>Creating new list...</p>";
        })
        .addCase(addListAsync.fulfilled, (state, action) =>{
            const messageWindow = document.getElementById('message-window');
            messageWindow?.classList.remove('loading');
            messageWindow?.classList.add('success');
            messageWindow!.innerHTML = "<p>New list created!</p>";
            setTimeout(()=>{messageWindow?.classList.remove('success')}, 2000);

            state.toDoLists.push(action.payload);
        });

    }
});


export const toDoListActions = toDoListSlice.actions;
export default toDoListSlice;





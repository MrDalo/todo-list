import { List } from '@mui/material';
import React from 'react';
import { StyledList } from './styles/ToDoListStyles';
import ToDoListItem from './ToDoListItem';



const ToDoList = () => {
  return (
    <StyledList>
        <ToDoListItem/>
        <ToDoListItem/>
        <ToDoListItem/>
        <ToDoListItem/>

    </StyledList>
  );
}

export default ToDoList;
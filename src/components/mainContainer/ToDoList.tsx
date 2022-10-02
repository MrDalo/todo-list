import React from 'react';
import { List } from '@mui/material';
import ToDoListItem from './ToDoListItem';
import { StyledBox } from './styles/ToDoListStyles';

const ToDoList = () => {
  return (
    <StyledBox>
        <List>
            <ToDoListItem />
            <ToDoListItem />
            <ToDoListItem />
            <ToDoListItem />
            <ToDoListItem />
            <ToDoListItem />
            <ToDoListItem />
            <ToDoListItem />
            <ToDoListItem />
            
        </List>
    </StyledBox>
  );
}

export default ToDoList;
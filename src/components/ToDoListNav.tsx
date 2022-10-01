import React from 'react';
import { StyledList } from './styles/ToDoListNavStyles';
import ToDoListItemNav from './ToDoListItemNav';



const ToDoListNav = () => {
  return (
    <StyledList>
        <ToDoListItemNav/>
        <ToDoListItemNav/>
        <ToDoListItemNav/>
        <ToDoListItemNav/>

    </StyledList>
  );
}

export default ToDoListNav;
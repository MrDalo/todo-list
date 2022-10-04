import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ToDoList from './ToDoList';
import { StyledIconButton } from './styles/ToDoListSectionStyles';
import AddItemForm from './AddItemForm';


/**
 * @brief Section on the page with list of tasks and form for creating new tasks
 */
const ToDoListSection = () => {

  const handleAddToDoItemClick = () =>{
    const iconButton = document.getElementById('add-circle-icon-button');
    const addTaskForm = document.getElementById('add-item-form');

    iconButton?.classList.toggle('active-button');
    addTaskForm?.classList.toggle('hidden-toggle');
  }
  
  
  return (
    <>

      <ToDoList />
      
      <StyledIconButton id="add-circle-icon-button" onClick={handleAddToDoItemClick}>
        <AddCircleOutlineIcon sx={{fontSize: '36px', zIndex: 4}}/>
      </StyledIconButton>

      <AddItemForm />

    </>
    



  );
}

export default ToDoListSection;
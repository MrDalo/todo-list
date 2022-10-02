import React, { ReactNode } from 'react';
import { StyledList } from './styles/ToDoListNavStyles';
import ToDoListItemNav from './ToDoListItemNav';
import { useAppSelector } from '../../redux/hooks';



const ToDoListNav = () => {

  const allToDoLists = useAppSelector((state) => state.toDoList);
  
  return (
    <StyledList>

      {allToDoLists.map((item, index)=><ToDoListItemNav key={index} id={item.id} name={item.name}/>)}

    </StyledList>
  );
}

export default ToDoListNav;
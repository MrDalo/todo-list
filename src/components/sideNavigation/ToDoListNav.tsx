import React, { useEffect } from 'react';
import { StyledList } from './styles/ToDoListNavStyles';
import ToDoListItemNav from './ToDoListItemNav';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getListsAsync } from '../../redux/slices/toDoListSlice';



const ToDoListNav = () => {
  const dispatch = useAppDispatch();
  const allToDoLists = useAppSelector((state) => state.toDoList);

  useEffect(()=>{
    dispatch(getListsAsync());
  }, [dispatch]);
  
  return (
    <StyledList>

      {allToDoLists.toDoLists.map((item, index)=><ToDoListItemNav key={index} id={item.id} name={item.name}/>)}

    </StyledList>
  );
}

export default ToDoListNav;
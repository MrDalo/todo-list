import React, { ReactNode, useEffect } from 'react';
import { StyledList } from './styles/ToDoListNavStyles';
import ToDoListItemNav from './ToDoListItemNav';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { getListsAsync } from '../../redux/slices/toDoListSlice';



const ToDoListNav = () => {
  // const dispatch = useDispatch<AppDispatch>();
  const dispatch = useAppDispatch();
  const allToDoLists = useAppSelector((state) => state.toDoList);

  useEffect(()=>{
    dispatch(getListsAsync());
  }, [dispatch]);
  
  return (
    <StyledList>

      {allToDoLists.toDoLists.map((item, index)=><ToDoListItemNav key={index} id={item.id} name={item.name}/>)}
      {/* {allToDoLists.toDoLists.map((item, index)=>
        <ToDoListItemNav key={index} id={item.id} name={item.name}/>
      )} */}
      {/* {console.log(allToDoLists.toDoLists) as ReactNode} */}

    </StyledList>
  );
}

export default ToDoListNav;
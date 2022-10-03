import React, { useEffect } from "react";
import { List } from "@mui/material";
import ToDoListItem from "./ToDoListItem";
import { StyledBox } from "./styles/ToDoListStyles";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { getItemsAsync } from "../../redux/slices/toDoItemSlice";
import { AppDispatch } from "../../redux/store";
import { useParams } from "react-router-dom";
import { toDoListActions } from "../../redux/slices/toDoListSlice";

const ToDoList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const toDoItems = useAppSelector((state) => state.toDoItem);
  const IDOfList = useAppSelector((state) => state.toDoList.activeID);
  const param  = useParams();

  useEffect(()=>{
    if(IDOfList !== '0'){
      dispatch(getItemsAsync(IDOfList));
    }
    else if(param.id !== '0'){
      if(param.id != null){
        dispatch(getItemsAsync(param.id));
        dispatch(toDoListActions.updateActiveIDList(param.id));
      }
    }
  }, [dispatch, IDOfList, param]);


  return (
    <StyledBox>
      <List>
        {/* {toDoItems.map((item, index) => (
          <ToDoListItem
            key={index}
            id={item.id}
            name={item.name}
            description={item.description}
            date={item.date}
            taskListId={item.taskListId}
            checked={item.checked}
          />
        ))} */}
      </List>
    </StyledBox>
  );
};

export default ToDoList;
